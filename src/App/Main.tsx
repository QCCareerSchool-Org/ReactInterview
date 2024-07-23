import type { FC, PropsWithChildren } from 'react';

import styles from './Main.module.css';

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);
