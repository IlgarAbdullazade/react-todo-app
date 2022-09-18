import styles from './Button.module.css';

function Button(props) {
  const { children } = props;
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
