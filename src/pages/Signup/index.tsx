import illustrationImg from '../../assets/images/signup.svg';
import styles from './styles.module.scss';
import arrowIcon from '../../assets/images/arrow.svg';
import { SignupForm } from '../../components/SignupForm';

export function Signup() {

  return (
    <div className={styles.container}>
      <aside>
        <a href="/">
          <img src={arrowIcon} alt="icon arrow" />
          ...Our Blog</a>
        <strong>Come be healthy</strong>
        <p>Can you be happy</p>
        <img src={illustrationImg} alt="Ilustração simbolizando um app de comidas saudaveis" />
      </aside>
      <main>
        <div>
          <h1>Sign Up to Healthy Food</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima delectus nulla dolore atque deleniti tempore ipsum vero ratione exercitationem. Eum quidem quasi dolorem odio molestiae quo! Dolor blanditiis rem tempore.</p>
          <SignupForm />
        </div>
      </main>
    </div>
  )
}