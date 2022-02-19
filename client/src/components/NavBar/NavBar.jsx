import Icon from '../Icon/Icon';
import searchIcon from '../../images/searchIcon.png';

import styles from './NavBar.module.css';

function NavBar({ isOpen }) {
  return (
    <div className={isOpen ?
      `${styles.navBar} ${styles.isOpen}` :
      styles.navBar} >
      <div className={styles.header}>
        <h3 className={styles.title}>Menu</h3>
      </div>
    </ div>
  );
}

export default NavBar;
