import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import DropdownBtn from '../DropdownBtn/DropdownBtn';
import Icon from '../Icon/Icon';
import profile from '../../images/Profile.png';
import unlock from '../../images/unlock-icon.png';

import styles from './Header.module.css';

function Header({
  menuBtnHandleClick,
  menuIsOpen,
}) {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.innerWrapper}>

          <div className={styles.navigation}>
            <div
              className={styles.menuBtn}
              onClick={menuBtnHandleClick}>
              <span className={menuIsOpen ? `${styles.menuBtnBurger} ${styles.isOpen}` : styles.menuBtnBurger}></span>
            </div>

            <ul className={styles.navigationList}>
              <li className={styles.navigationListItem}>
                <DropdownBtn
                  title={'Instruments'}>
                  <ul className={styles.instrumentsList}>
                    <li className={styles.instrumentsListItem}>instrument 1</li>
                    <li className={styles.instrumentsListItem}>instrument 2</li>
                    <li className={styles.instrumentsListItem}>instrument 3</li>
                  </ul>
                </DropdownBtn>
              </li>
              <li className={styles.navigationListItem}>
                <NavLink to='/Widgets'>Widgets</NavLink>
              </li>
              <li className={styles.navigationListItem}>
                <NavLink to='/View'>View</NavLink>
              </li>
              <li className={styles.navigationListItem}>
                <NavLink to='/Administrations'>Administrations</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.userControls}>
            <ul className={styles.userControlsList}>
              <li className={styles.userControlsListItem}>
                <button className={styles.userControlsBtn}>
                  <span className={styles.userControlsBtnIcon}>
                    <Icon image={profile} />
                  </span>
                  Alexander
                </button>
              </li>
              <li className={styles.userControlsListItem}>
                <DropdownBtn title={'ENG'}>
                  <span>RU</span>
                </DropdownBtn>
              </li>
              <li className={styles.userControlsListItem}>
                <Icon image={unlock} />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
