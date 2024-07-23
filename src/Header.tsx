import type { FC } from 'react';

import styles from './Header.module.css';

export const Header: FC = () => (
  <header className={styles.header}>
    <div className="container">
      QC Career School
    </div>
  </header>
);
