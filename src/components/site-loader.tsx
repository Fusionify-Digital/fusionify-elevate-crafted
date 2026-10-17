import { useEffect, useState } from "react";
import mark from "@/assets/fusionify-mark.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="site-loader" aria-hidden="true">
      <div className="loader-lockup">
        <img src={assetUrl(mark)} alt="" width={58} height={58} />
        <span>FUSIONIFY</span>
      </div>
      <div className="loader-line"><i /></div>
      <p>Building digital momentum</p>
    </div>
  );
}
