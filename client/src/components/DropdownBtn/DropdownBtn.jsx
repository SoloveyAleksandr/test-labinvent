import Icon from '../Icon/Icon';
import arrow from '../../images/arrow.svg';

import styles from './DropdownBtn.module.css';
import { useState } from 'react';

function DropdownBtn({
  title,
  children,
}) {

  return (
    <button className={styles.DropdownBtn}>
      <span className={styles.btnTitle}>
        {title}
      </span>
      <span className={styles.btnIcon}>
        <Icon image={arrow} />
      </span>
      <div className={styles.content}>
        {children}
      </div>
    </button >
  );
}

export default DropdownBtn;
