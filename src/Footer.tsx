import type { FC } from 'react';

import styles from './Footer.module.css';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className="container">
      <small>&copy; 2024 QC Career School</small>
    </div>
  </footer>
);
