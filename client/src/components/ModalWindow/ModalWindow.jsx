import styles from './ModalWindow.module.css';

function ModalWindow({
  isOpen,
  closeFunc,
  children,
}) {
  return (
    <div className={isOpen ?
      `${styles.modalWindowWrapper} ${styles.open}` :
      styles.modalWindowWrapper}>
      <div
        className={styles.modalWindowBG}
        onClick={closeFunc}></div>
      <div className={styles.modalWindow}>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
