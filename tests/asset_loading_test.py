"""Ensure hosted media works without Lovable's same-origin asset gateway."""
import unittest
from playwright.sync_api import sync_playwright


class AssetLoadingTest(unittest.TestCase):
    def test_images_load_without_local_lovable_gateway(self):
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 1800})
            page.route("http://localhost:8080/__l5e/**", lambda route: route.fulfill(status=404))
            page.goto("http://localhost:8080", wait_until="networkidle")
            for selector in ("header img", "footer img", 'img[alt="Fi, the Fusionify mascot, holding a blank sign"]'):
                image = page.locator(selector)
                image.scroll_into_view_if_needed()
                page.wait_for_function(
                    "selector => { const image = document.querySelector(selector); return image && image.complete && image.naturalWidth > 0; }",
                    arg=selector,
                )
                self.assertTrue(image.get_attribute("src").startswith("https://fusionify-elevate-crafted.lovable.app/__l5e/assets-v1/"))
                self.assertGreater(image.evaluate("image => image.naturalWidth"), 0)
            browser.close()