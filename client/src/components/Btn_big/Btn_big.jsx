import styles from './Btn_big.module.css';

function Btn_big({
    text = 'button',
    handleClick,
}) {
    return (
        <button
            onClick={handleClick}
            className={styles.btnBig}>
            {text}
        </button>
    );
}

export default Btn_big;