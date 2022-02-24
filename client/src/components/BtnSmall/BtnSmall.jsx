import Icon from '../Icon/Icon';
import styles from './BtnSmall.module.css';

function BtnSmall({
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

export default BtnSmall;
