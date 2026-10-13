// Lovable's asset gateway is not installed on external hosts such as Vercel.
// Keep immutable asset pointers unchanged and resolve them on their public host.
const assetOrigin = "https://fusionify-elevate-crafted.lovable.app";

export function assetUrl(asset: { url: string }): string {
  return asset.url.startsWith("/__l5e/assets-v1/")
    ? new URL(asset.url, assetOrigin).href
    : asset.url;
}