# EMS Console Dashboard (Phase 2 — DEFERRED)

Next.js internal console to configure/customize the backend, web, and mobile apps.

> **Deferred by the plan (PLAN.md §2):** this app is **not built** until backend, frontend, and
> mobile are complete. Only its scaffold + architectural hooks exist for now.

## What exists today

- A themed placeholder shell (BrainCrop tokens from `@ems/config`).
- A page documenting the hook surface it will manage: the backend `AppConfig` and `FeatureFlag`
  collections (feature-flag keys come from `@ems/config` `FEATURE_FLAGS`) and the configuration
  domains (tax, leave, attendance, salary, branding).

## Run (optional preview)

```bash
pnpm install
pnpm --filter console-dashboard dev   # http://localhost:3002
```

## When it gets built

After M1–M4 ship, the console will provide UIs to edit `AppConfig`/`FeatureFlag` and the four
configurable business-rule sets — all through the existing REST API, respecting the same RBAC.
