import styles from './ControlInfo.module.css';

function ControlInfo({
    title,
    value = '-',
    unit,
}) {
    return (
        <div className={styles.controlInfo}>
            <span className={styles.controlInfoTitle}>
                {title}
            </span>
            <div className={styles.controlInfoBox}>
                <span className={styles.controlInfoValue}>
                    {value}
                </span>
                <span className={styles.controlInfoUnit}>
                    {unit}
                </span>
            </div>
        </div>
    );
}

export default ControlInfo;
