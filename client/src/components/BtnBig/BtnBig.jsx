import styles from './BtnBig.module.css';

function BtnBig({
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

export default BtnBig;
