import spiner from '../../images/loader.gif';

import styles from './Spiner.module.css';

function Spiner({
  isActive
}) {
  if (!isActive) {
    return '';
  } else {
    return (
      <div className={styles.spinerWrapper}>
        <img src={spiner} alt="spiner" />
      </div>
    );
  }
}

export default Spiner;
