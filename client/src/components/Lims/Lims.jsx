import Icon from '../Icon/Icon';
import searchIcon from '../../images/searchIcon.png';

import styles from './Lims.module.css';

function Lims() {
  return (
    <div className={styles.lims}>
      <div className={styles.header}>
        <h3 className={styles.title}>lims</h3>
      </div>

      <div className={styles.innerWrapper}>
        <div className={styles.searchWrapper}>
          <input className={styles.searchInput} id='folderSearch' type="text" placeholder='Search' />
          <label htmlFor="folderSearch">
            <Icon image={searchIcon} />
          </label>
        </div>
      </div>



      <div className={styles.footer}>
        <div className={styles.timer}>
          <span>Run 00:23/01:00</span>
          <span>-00:47</span>
        </div>
        <div className={styles.footerBox}>
          <h3 className={styles.title}>run</h3>
          <div className={styles.footerBtns}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Lims;
