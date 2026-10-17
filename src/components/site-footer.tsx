import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

import mark from "@/assets/fusionify-mark.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

export function SiteFooter() {
  return (
    <footer className="fx-footer">
      <div className="fx-container">
        <div className="fx-footer-brand">
          <img src={assetUrl(mark)} alt="" />
          <span>fusionify</span>
        </div>
        <div className="fx-footer-socials">
          <a href="https://github.com/Fusionify-Digital" target="_blank" rel="noreferrer">
            <Github /> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/company/fusionify" target="_blank" rel="noreferrer">
            <Linkedin /> <span>LinkedIn</span>
          </a>
          <a href="mailto:hello@fusionify.id">
            <Mail /> <span>Email</span>
          </a>
        </div>
        <div className="fx-footer-bottom">
          <p>© {new Date().getFullYear()} PT Fusionify Digital Store</p>
          <p>BOGOR · INDONESIA · GMT+7</p>
          <nav aria-label="Footer navigation">
            <Link to="/capabilities">Capabilities</Link>
            <Link to="/company">Company</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
