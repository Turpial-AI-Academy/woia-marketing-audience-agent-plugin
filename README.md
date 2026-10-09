# woia-marketing-audience

WOIA Marketing v0.5.7 provider for `marketing.audience`.

- Primary skill: `$marketing-audience`
- Authoring profile: thin
- Origin: WOIA-native

Capability-owned tools/templates live in this plugin. Generic certification/release tooling lives in `woia-ecosystem`.

The skill and template support scoped consumers. Marketing and Ads can use accepted scoped evidence from approved sources; Customer Data remains optional. No effects are executed. See skills/marketing-audience/references/CONSUMER-COMPATIBILITY.md. Generic thin certification is performed from Ecosystem v0.5.7; no local bootstrap/doctor/CI tasks exist in this thin baseline.

## Maintenance

Edit only this canonical repository. Keep `plugin.json`, `package.json` and `dev.woia/manifest.json` versions aligned. From the canonical WOIA Ecosystem repository, run `mise run plugin:certify-thin --repo <absolute-plugin-repository>`, then use its release preparation/publication tasks. Install and update consumers from immutable published artifacts; keep Project personalization in overlays.
