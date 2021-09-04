import illustrationImg from '../../assets/images/signup.svg';
import styles from './styles.module.scss';

export function Signup() {
  return (
    <div className={styles.container}>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando um app de comidas saudaveis" />
        <strong>Crie Salas ao vivo</strong>
        <p>Can you be happy</p>
      </aside>
      <main>
        <h1>Healthy Food</h1>
        <form>
          <div className={styles.inputGroup}>
            <label>Nome e sobrenome:</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Data de nascimento:</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Nome:</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Nome:</label>
            <input type="text" />
          </div>
          <input type="text" />
        </form>
      </main>
    </div>
  )
}