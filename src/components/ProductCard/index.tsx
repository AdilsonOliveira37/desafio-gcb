import styles from './styles.module.scss';

interface ProductCardProps{
  title: string;
  imgURL: string;
  link: string;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <div className={styles.container}>
      <img src={props.imgURL} alt={props.title} />
      <div >
        <h3>{props.title}</h3>
        <button onClick={()=> props.link}>See Recipe</button>
      </div>
    </div>
  )
}