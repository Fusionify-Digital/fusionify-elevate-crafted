import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fusionify" },
      {
        name: "description",
        content:
          "Contact Fusionify in Bogor about automation, payments, websites or custom software.",
      },
      { property: "og:title", content: "Contact — Fusionify" },
      {
        property: "og:description",
        content: "Reach the Fusionify team in Bogor about the ecosystem or a custom engagement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const fieldClass = "field";


function Contact() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <section className="shell page-hero section-top contact-page-hero">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <p className="sheet-label"><span>01</span> Contact</p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.01] font-extrabold sm:text-[4.5rem]">
                Let&rsquo;s build something that moves.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
            <Reveal delay={120} variant="fade">
              <p className="text-[15.5px] leading-[1.75] text-white/80">
                Automation, payments, a website, software or a custom digital system.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell section-y">
      <div className="grid-12 gap-y-16">
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <p className="sheet-label"><span>02</span> Tell us about the project</p>
            <h2 className="mt-6 text-[2.25rem] leading-[1.05] font-extrabold sm:text-[3.25rem]">Get in touch.</h2>
            <p className="mt-6 max-w-sm text-[15.5px] leading-[1.75] text-muted-foreground">
              Tell us what you need — automation, payments, a website, software or a custom
              system. You can also email hello@fusionify.id.
            </p>
          </Reveal>

          <Reveal delay={140} variant="fade" className="mt-12 space-y-8">
            <div>
              <p className="eyebrow">General</p>
              <a href="mailto:hello@fusionify.id" className="link-quiet mt-2 block text-[15px]">
                hello@fusionify.id
              </a>
            </div>
            <div>
              <p className="eyebrow">Office</p>
              <address className="mt-2 text-[15px] leading-relaxed not-italic text-muted-foreground">
                Bogor, Jawa Barat
                <br />
                Indonesia
              </address>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <Reveal delay={100}>
            <form
              className="space-y-10"
              onChange={() => setChecked(false)}
              onSubmit={(e) => {
                e.preventDefault();
                setChecked(true);
              }}
            >
              <p id="form-limitation" className="text-[14.5px] leading-[1.7] text-muted-foreground">
                This form only checks the required fields. It does not send or save your message.
                To contact Fusionify, email hello@fusionify.id directly.
              </p>
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">
                    Name
                  </label>
                  <input id="name" name="name" required className={`${fieldClass} mt-3`} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="company" className="eyebrow">
                    Organisation
                  </label>
                  <input id="company" name="company" className={`${fieldClass} mt-3`} placeholder="Company" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={`${fieldClass} mt-3`}
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`${fieldClass} mt-3 resize-none`}
                  placeholder="A short description of what you need."
                />
              </div>
              <Button
                type="submit"
                variant="ghost"
                className="btn btn-primary h-auto whitespace-normal"
                aria-describedby="form-limitation"
              >
                Check fields
              </Button>
              {checked && (
                <p role="status" className="text-[14.5px] leading-[1.7] text-muted-foreground">
                  Required fields checked. Your message has not been sent or saved. Email{" "}
                  <a href="mailto:hello@fusionify.id" className="link-quiet">hello@fusionify.id</a>{" "}
                  directly to contact Fusionify.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
      </section>
    </>
  );
}
