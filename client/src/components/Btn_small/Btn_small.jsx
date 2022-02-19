import Icon from '../Icon/Icon';
import styles from './Btn_small.module.css';

function Btn_small({
    isFill = false,
    handleClick,
    ...props
}) {
    return (
        <button
            onClick={handleClick}
            className={isFill ?
                `${styles.btn_small} ${styles.isFill}` :
                styles.btn_small}>
            <Icon {...props} />
        </button>
    );
}

export default Btn_small;
