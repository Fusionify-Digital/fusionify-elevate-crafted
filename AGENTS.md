<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep contact form submission validation-only until a real delivery mechanism is explicitly added; this prevents false delivery confirmations.
- Keep browser behavioral regression tests in `tests/` using Python's unittest and Playwright; the project has no JavaScript test runner configured.
- Resolve Lovable asset pointers through `src/lib/asset-url.ts` on the public Lovable host; external deployments do not provide the same-origin asset gateway.
