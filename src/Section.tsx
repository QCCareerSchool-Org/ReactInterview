import type { FC, PropsWithChildren } from 'react';

import styles from './Section.module.css';

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <section className={styles.section}>
    {children}
  </section>
);
