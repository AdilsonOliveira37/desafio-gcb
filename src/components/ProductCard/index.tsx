import styles from './styles.module.scss';

interface ProductCardProps{
  title: string;
  imgURL: string;
  link: string;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContent}>
        <img src={props.imgURL} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <button onClick={()=> props.link}>See Recipe</button>
      </div>
    </div>
  )
}