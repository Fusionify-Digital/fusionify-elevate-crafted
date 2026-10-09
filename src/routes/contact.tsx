import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PT Fusionify Digital Group" },
      {
        name: "description",
        content:
          "Contact PT Fusionify Digital Group in Bogor about automation, payments, websites or custom software.",
      },
      { property: "og:title", content: "Contact — PT Fusionify Digital Group" },
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
  const [sent, setSent] = useState(false);

  return (
    <section className="shell section-top">
      <div className="grid-12 gap-y-16">
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 text-[2.75rem] leading-[1.05] font-extrabold sm:text-[3.25rem]">
              Get in touch.
            </h1>
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
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Thank you — your message has been noted.");
              }}
            >
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
              <button
                type="submit"
                className="btn btn-primary"
              >
                {sent ? "Message sent" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
