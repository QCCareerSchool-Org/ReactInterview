import type { FC, PropsWithChildren } from 'react';

import styles from './Wrapper.module.css';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);
