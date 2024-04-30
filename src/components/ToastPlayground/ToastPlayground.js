import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';



const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { addToast, removeAll } = React.useContext(ToastContext);

  useEscapeKey(removeAll);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>


      {<ToastShelf />}

      <form
        onSubmit={event => {
          event.preventDefault();
          addToast(message, variant);
          setMessage('');
          setVariant(VARIANT_OPTIONS[0]);
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={event => setMessage(event.target.value)}
                id="message"
                className={styles.messageInput}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>

              {VARIANT_OPTIONS.map(currentVariant => {
                const key = `variant-${currentVariant}`;
                return (
                  <label htmlFor={key} key={key} >
                    <input
                      id={key}
                      type="radio"
                      name={key}
                      value={currentVariant}
                      checked={variant === currentVariant}
                      onChange={event => {
                        setVariant(event.target.value);
                      }}
                    />
                    {currentVariant}
                  </label>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`} >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}


export default ToastPlayground;
