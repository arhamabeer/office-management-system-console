import { BRAND, DEFAULT_FEATURE_FLAGS } from '@ems/config';
import styles from './page.module.css';

const CONFIG_DOMAINS = [
  'Organization profile & branding overrides',
  'Tax configuration (jurisdiction, fiscal year, slabs)',
  'Leave policy (quota, accrual, carry-forward, encashment)',
  'Attendance policy (source, shifts, working hours, holidays)',
  'Salary structure components & payslip template',
];

export default function ConsoleHome() {
  const flags = Object.entries(DEFAULT_FEATURE_FLAGS);
  return (
    <main className={styles.wrap}>
      <div className={styles.card}>
        <span className={styles.badge}>Phase 2 · Deferred</span>
        <h1 className={styles.title}>{BRAND.productName} Console</h1>
        <p className={styles.text}>
          The internal console for configuring the backend, web, and mobile apps. Per the plan, it is
          <strong> not built until backend, frontend, and mobile are complete</strong>. This scaffold
          exists only to reserve the app and document the architectural hooks it will manage — the
          <code> AppConfig</code> and <code>FeatureFlag</code> collections exposed by the API.
        </p>

        <div className={styles.sectionLabel}>Feature flags (hook surface)</div>
        <div className={styles.list}>
          {flags.map(([key, enabled]) => (
            <div className={styles.row} key={key}>
              <span className={styles.rowKey}>{key}</span>
              <span className={styles.pill}>{enabled ? 'on' : 'off'}</span>
            </div>
          ))}
        </div>

        <div className={styles.sectionLabel}>Configuration domains it will manage</div>
        <div className={styles.list}>
          {CONFIG_DOMAINS.map((d) => (
            <div className={styles.row} key={d}>
              <span className={styles.rowKey} style={{ fontFamily: 'inherit' }}>
                {d}
              </span>
            </div>
          ))}
        </div>

        <p className={styles.footer}>
          Themed with the shared BrainCrop tokens from <code>@ems/config</code>. Build begins after
          M1–M4 ship.
        </p>
      </div>
    </main>
  );
}
