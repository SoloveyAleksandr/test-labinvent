import RunControlBtn from '../RunControlBtn/RunControlBtn';
import Icon from '../Icon/Icon';

import styles from './Lims.module.css';

function Lims({
  totalTime,
  currentTime
}) {

  function timeLine() {
    const width = 100 / totalTime * currentTime;
    return `${width}%`;
  }

  function getTime(value) {
    const time = Math.floor(+value / 60 / 60) > 10 ? Math.floor(+value / 60 / 60) : `0${Math.floor(+value / 60 / 60)}`;
    const minutes = Math.floor(+value / 60 % 60) > 10 ? Math.floor(+value / 60 % 60) : `0${Math.floor(+value / 60 % 60)}`;
    const seconds = +value % 60 > 10 ? +value % 60 : `0${+value % 60}`;
    if (+time > 0) {
      return `${time}:${minutes}:${seconds}`;
    } else return `${minutes}:${seconds}`
  }

  return (
    <div className={styles.lims}>
      <div className={styles.header}>
        <h3 className={styles.title}>lims</h3>
      </div>

      <div className={styles.innerWrapper}>
        <div className={styles.searchWrapper}>
          <input className={styles.searchInput} id='folderSearch' type="text" placeholder='Search' />
          <label 
          htmlFor="folderSearch"
          className={styles.searchIcon}>
            <Icon
              icon={'searchIcon'}
              size={16}
              color={'#515b69'} />
          </label>
        </div>
      </div>



      <div className={styles.footer}>
        <div className={styles.timer}>
          <div
            className={styles.timerTimeLine}
            style={{
              width: timeLine()
            }}></div>
          <div className={styles.timerInfoWrapper}>
            <span>Run {getTime(currentTime)}/{getTime(totalTime)}</span>
            <span>-00:47</span>
          </div>
        </div>
        <div className={styles.footerBox}>
          <h3 className={styles.title}>run</h3>
          <div className={styles.footerBtns}>
            <RunControlBtn
              text={'on'}
              bgColor={'#2575aa'}
              color={'#14741b'} />
            <RunControlBtn
              text={'off'}
              bgColor={'#2575aa'}
              color={'#8c9092'} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Lims;
