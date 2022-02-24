import Icon from '../Icon/Icon';

import styles from './RunStateBtn.module.css';

function RunStateBtn({
    isRun = false,
}) {
    if (isRun) {
        return (
            <button className={`${styles.runBtn} ${styles.isRun}`} >
                <span className={styles.runBtnIcon}>
                    <Icon icon={'playIcon'} className={styles.runBtnIcon} size={16} />
                </span>
                RUN
            </ button>
        );
    } else {
        return (
            <button className={styles.runBtn} >
                <span className={styles.runBtnIcon}>
                    <Icon icon={'stopIcon'} size={16} />
                </span>
                STOPPED
            </ button>
        );
    }
}

export default RunStateBtn;
