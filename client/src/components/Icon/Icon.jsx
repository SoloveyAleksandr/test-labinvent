import styles from './Icon.module.css';

function Icon({ image }) {
  return (
    <div className={styles.icon}>
      <img src={image} alt="icon" />
    </div>
  );
}

export default Icon;
