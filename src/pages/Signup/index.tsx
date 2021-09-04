
import styles from './styles.module.scss';

export function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}