import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([{ 'id': '1223', 'message': 'halloo', 'variant': VARIANT_OPTIONS[1] }, { 'id': '4444', 'message': 'fsfgffsbd', 'variant': VARIANT_OPTIONS[3] }]);

  function dismiss(id) {
    const nextToasts = toastList.filter((toast) => {
      return toast.id !== id;
    });

    setToastList(nextToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>


      {<ToastShelf toasts={toastList} dismiss={dismiss} />}

      <form
        onSubmit={event => {
          event.preventDefault();
          setToastList([...toastList, { 'id': crypto.randomUUID(), 'message': message, 'variant': variant }]);
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
    </div >
  );
}

export default ToastPlayground;
