# Decisions

- 2026-11-13: Live site is www.activebarre.com (Netlify site "activebarre", deploys from master; DNS on Google Cloud DNS, www CNAME to Netlify). Builds need Node 16 (netlify.toml); locally, build in a `node:16` container as your own user (`--user $(id -u) -e HOME=/tmp`), or sharp's install fails.
- 2026-11-13: Intro offer (Bookamat "Women's Health Intro Pack", 4 classes for $40, new clients) is featured on the homepage and at /intro, called "Intro offer". Its Bookamat link lives in src/config.js. Prices follow the Bookamat audit in upbound-web/active-barre.
- 2026-11-13: This Gatsby site is temporary. When the new booking app (upbound-web/active-barre) launches, the site's pages move into that repo on Cloudflare and this Netlify site is retired.
