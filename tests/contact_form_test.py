"""Browser regression checks for the validation-only contact form.

Run with: python3 -m unittest discover -s tests -p '*_test.py'
"""
import unittest
from playwright.sync_api import sync_playwright


class ContactFormTest(unittest.TestCase):
    def test_valid_form_does_not_transmit_or_persist_message(self):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            context = browser.new_context(viewport={"width": 1280, "height": 1800})
            page = context.new_page()
            page.goto("http://localhost:8080/contact", wait_until="networkidle")
            storage_before = page.evaluate("({local: {...localStorage}, session: {...sessionStorage}})")
            writes = []
            page.on("request", lambda request: writes.append(request.url) if request.method not in ("GET", "HEAD", "OPTIONS") else None)
            page.get_by_label("Name", exact=True).fill("Form regression check")
            page.get_by_label("Organisation").fill("Test organisation")
            page.get_by_label("Work email").fill("test@example.com")
            page.get_by_label("Message", exact=True).fill("This message must stay in this page only.")
            page.get_by_role("button", name="Check fields").click()
            page.wait_for_timeout(300)
            self.assertEqual(page.get_by_role("status").count(), 1)
            self.assertEqual(writes, [])
            self.assertEqual(page.evaluate("({local: {...localStorage}, session: {...sessionStorage}})"), storage_before)
            page.reload(wait_until="networkidle")
            self.assertEqual(page.get_by_label("Message", exact=True).input_value(), "")
            browser.close()

    def test_required_fields_block_empty_form(self):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 1800})
            page.goto("http://localhost:8080/contact", wait_until="networkidle")
            page.get_by_role("button", name="Check fields").click()
            self.assertFalse(page.locator("form").evaluate("form => form.checkValidity()"))
            self.assertEqual(page.get_by_role("status").count(), 0)
            browser.close()