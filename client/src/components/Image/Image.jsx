import styles from './Image.module.css';

function Image({ image }) {
  return (
    <div className={styles.icon}>
      <img src={image} alt="icon" />
    </div>
  );
}

export default Image;
