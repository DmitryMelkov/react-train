import styles from './btnDefault.module.scss';

const BtnDefault = ({ children, isActive, onClick, icon, borderRadius, disabled, iconSize }) => {
  return (
    <button
      className={`${styles['btn-default']} ${isActive ? styles['active'] : ''} ${disabled ? styles['disabled'] : ''}`}
      onClick={disabled ? null : onClick}
      style={{ borderRadius }}
      disabled={disabled}
    >
      {icon && <span className={styles['btn-icon']} style={{ fontSize: iconSize }}>{icon}</span>}
      {children}
    </button>
  );
};

export default BtnDefault;
