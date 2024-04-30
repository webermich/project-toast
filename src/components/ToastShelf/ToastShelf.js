import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, dismiss}) {

  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast =>
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast toast={toast} dismiss={dismiss}/>
        </li>
      )}

    </ol>
  );
}

export default ToastShelf;
