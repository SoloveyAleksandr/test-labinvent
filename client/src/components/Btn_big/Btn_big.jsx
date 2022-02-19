import styles from './Btn_big.module.css';

function Btn_big({
    isFill = true,
    text = 'button',
    handleClick,
}) {
    return (
        <button
            onClick={handleClick}
            className={isFill ?
                `${styles.btnBig} ${styles.isFill}` :
                styles.btnBig}>
            {text}
        </button>
    );
}

export default Btn_big;