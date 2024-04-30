import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

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
            <textarea value={message}
              onChange={event => setMessage(event.target.value)}
              id="message"
              className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>

            {VARIANT_OPTIONS.map(currentVariant => {
              const key = `variant-${currentVariant}`;
              return (<>
                <label htmlFor={key}>
                  <input
                    id={key}
                    type="radio"
                    name={key}
                    value={currentVariant}
                    checked={variant === currentVariant}
                    onChange={event => {
                      console.log(event.target.value);
                      setVariant(event.target.value);
                    }}
                  />
                  {currentVariant}
                </label>
              </>)
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
    </div >
  );
}

export default ToastPlayground;
