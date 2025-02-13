import styles from './btnDefault.module.scss';

const BtnDefault = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`${styles['btn-default']} ${isActive ? styles['active'] : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BtnDefault;
