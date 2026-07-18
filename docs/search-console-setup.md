# Google Search Console Setup

Post-deploy checklist for `https://bettorindex.app/`.

## 1. Add the property

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property: **URL prefix** → `https://bettorindex.app/`
3. Verify ownership using one of:
   - **HTML tag** — add the meta tag to `src/layouts/BaseLayout.astro` temporarily, deploy, verify, then remove if desired
   - **GitHub Pages** — if using a custom domain later, switch verification method

## 2. Submit the sitemap

After deploy, submit:

```
https://bettorindex.app/sitemap-index.xml
```

Confirm `robots.txt` is live at:

```
https://bettorindex.app/robots.txt
```

## 3. Validate structured data

Test the homepage with [Google Rich Results Test](https://search.google.com/test/rich-results):

- `FAQPage` (17 questions)
- `WebSite`
- `Organization`
- `SoftwareApplication`

Test a guide page for `Article` + `BreadcrumbList`.

## 4. Monitor queries

Watch Search Console Performance for:

- `sports betting research tool`
- `player props research`
- `game line research`
- `BettorIndex` (branded)
- Sport-specific: `NBA betting research`, `MLB props`, `NFL game lines`

## 5. Bing Webmaster Tools (optional)

Mirror the same property and sitemap at [Bing Webmaster Tools](https://www.bing.com/webmasters).

## 6. Social preview check

Verify Open Graph previews at [opengraph.xyz](https://www.opengraph.xyz/) using the homepage and a guide URL.
