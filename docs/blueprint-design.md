# FUSIONIFY blueprint design

## Direction

Full-height painted-sky hero, oversized editorial headings, translucent navigation, animated clouds, cream content surfaces and a navy contact band. The interaction rhythm follows the supplied visual reference while the scene, system cards and content are original FUSIONIFY work implemented in React/TanStack. No third-party site code, personal images or mascot assets were copied. Fonts are loaded from Google Fonts; existing Fusionify asset pointers retain their public Lovable resolution.

## Shared tokens

| Role       | Light   | Dark    |
| ---------- | ------- | ------- |
| Background | #fff9f1 | #0b1733 |
| Surface    | #f4eee4 | #10213f |
| Ink        | #122b49 | #fff9f1 |
| Brand      | #2469a9 | #94c9f4 |
| Hero start | #2d75b6 | #1c3868 |
| Hero end   | #245d94 | #0b1733 |

Typography: Bricolage Grotesque headings, Space Grotesk body/UI, JetBrains Mono section labels. A shared 12-column grid, existing section spacing and semantic Tailwind colors keep the other routes consistent.

## Behavior

- Light/dark preference is applied before paint and persisted under `fusionify-theme`. Storage denial falls back gracefully.
- Mobile navigation closes after navigation, on Escape, and when resized to desktop. Escape restores focus to its trigger. Closed navigation is hidden from focus and assistive technology.
- Native anchors retain scrolling, with an offset for the fixed header.
- The header carries page-level scroll progress and routes animate in with one shared easing curve.
- The home hero includes pointer-responsive depth, layered system cards, a floating Fusionify mascot, atmospheric clouds and a looping capability ticker.
- A short branded loader runs on a full page load. Client-side route changes use the lighter route transition.
- Reduced-motion preference disables decorative motion and transitions.
- Contact form remains validation-only. It does not send or save the entered message.
- Existing company, product, team and partner copy remains authoritative. This change does not update company facts or product availability.

## Brand adaptations

The original Fusionify mark and mascot replace the reference identity. Existing content, team names and product structure remain authoritative. Portfolio-specific sections become company overview, ecosystem, platforms, solutions, history, leadership, partners and contact sections. Audio and cursor effects are omitted so motion remains lightweight and does not obstruct navigation.

## Verification

- TypeScript: `npx tsc --noEmit`.
- Production build: `npm run build`.
- Browser: desktop viewport 1363×936; mobile layout in a 390×844 same-origin iframe. No horizontal overflow observed in those views.
- Checked loader, sky hero, cloud transition, pointer depth, navigation, typography, palette, buttons, product panels and mobile wrapping against the design direction.
- Exercised product anchor, navigation to Company/Contact, mobile open/navigation/close, persistent theme across routes, and contact validation status.
- No application console error was observed; browser-extension metadata errors were excluded.
- Existing Python Playwright regression suite was not executed: the local browser download failed. Browser interaction checks used the cloud browser. No claim of cross-browser or physical-device verification.

Preview-only Vite allowed host: terminal.local. This setting affects development only.
