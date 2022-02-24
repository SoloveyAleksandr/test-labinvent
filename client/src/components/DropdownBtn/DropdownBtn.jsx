import Icon from '../Icon/Icon';

import styles from './DropdownBtn.module.css';

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
        <Icon
          icon={'arrowIcon'}
          size={24} />
      </span>
      <div className={styles.content}>
        {children}
      </div>
    </button >
  );
}

export default DropdownBtn;
