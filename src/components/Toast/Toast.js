import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import clsx from 'clsx';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast, dismiss }) {
  const [visible, setVisible] = React.useState(true);
  const Icon = ICONS_BY_VARIANT[toast.variant];

  return (
    <div className={`${styles.toast} ${styles[toast.variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{toast.variant}</VisuallyHidden>
        {toast.message}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={event => dismiss(toast.id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
