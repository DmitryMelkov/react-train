import React from 'react';
import styles from './btnDefault.module.scss';

interface BtnDefaultProps {
  children?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  borderRadius?: string;
  disabled?: boolean;
  iconSize?: string;
}

const BtnDefault: React.FC<BtnDefaultProps> = ({
  children,
  isActive = false,
  onClick,
  icon,
  borderRadius,
  disabled = false,
  iconSize,
}) => {
  return (
    <button
      className={`${styles['btn-default']} ${isActive ? styles['active'] : ''} ${disabled ? styles['disabled'] : ''}`}
      onClick={disabled ? undefined : onClick} // Используйте undefined вместо null
      style={{ borderRadius }}
      disabled={disabled}
    >
      {icon && <span className={styles['btn-icon']} style={{ fontSize: iconSize }}>{icon}</span>}
      {children}
    </button>
  );
};

export default BtnDefault;
