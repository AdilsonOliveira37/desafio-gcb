import { ProductCard } from "../../components/ProductCard";
import { PostCard } from "../../components/PostCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from './styles.module.scss';

import introductionImg from '../../assets/images/Illustration.svg';
import serviceImg from '../../assets/images/Illustration2.svg';
import clientImg from '../../assets/images/Illustration3.svg';
import searchIcon from '../../assets/images/search_white_24dp.svg';

import profileImg1 from "../../assets/images/pessoa1.jpg";
import profileImg2 from "../../assets/images/pessoa2.jpg";
import profileImg3 from "../../assets/images/pessoa3.jpg";
import profileImg4 from "../../assets/images/pessoa4.jpg";
import recipe1 from "../../assets/images/prato1.jpg";
import recipe2 from "../../assets/images/prato2.jpg";
import recipe3 from "../../assets/images/prato3.jpg";
import recipe4 from "../../assets/images/prato4.jpg";
import post1 from "../../assets/images/post1.jpg";
import post2 from "../../assets/images/post2.jpg";
import post3 from "../../assets/images/post3.jpg";
import post4 from "../../assets/images/post4.jpg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 650,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 650
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  const bestRecipes = [{
    title: 'Broccoli Salad with Bacon',
    img: recipe1
  },
  {
    title: 'Classic Beef Burgers',
    img: recipe2
  },
  {
    title: 'Classic Potato Salad',
    img: recipe3
  },
  {
    title: 'Cherry Cobbler on the Grill',
    img: recipe4
  }];

  const ourBlogPosts = [{
    title: 'Quick-start guide to nuts and seeds',
    postImg: post1,
    userName: 'Kevin Ibrahim',
    userImg: profileImg1
  },
  {
    title: 'Nutrution: Tips for Improving Your Health',
    postImg: post2,
    userName: 'Mike Jackson',
    userImg: profileImg2
  },
  {
    title: 'The top 10 benefits of eating healthy',
    postImg: post3,
    userName: 'Bryan McGregor',
    userImg: profileImg3
  },
  {
    title: 'What Makes a Healthy Diet?',
    postImg: post4,
    userName: 'Jashua',
    userImg: profileImg4
  }];

  return (
    <>
      <Header />
      {/* Seção de Introdução  */}
      <main className={styles.container}>
        <section className={styles.introductionContent}>
          <img src={introductionImg} alt="Imagem illustrativa introdução" />
          <div className={styles.content}>
            <h1>
              Ready for <br />
              Trying a new <br />
              recipe?
            </h1>
            <div>
              <input type="text" placeholder="Search healthy recives" />
              <button type="button">
                <img src={searchIcon} alt="search icon" />
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Receitas  */}
        <section className={styles.recipesContent}>
          <div className={styles.content}>
            <h2>Our Best Recipes</h2>
            <p>
              Far far away, behind the word mountains, far from the countries <br />
              Vakalia and Consonantia, there live blind texts.
            </p>
            <div>
              {bestRecipes.map(bestRecipe => (
                <ProductCard
                  key={bestRecipe.title}
                  title={bestRecipe.title}
                  imgURL={bestRecipe.img}
                  link="/"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Seção de serviços */}
        <section className={styles.servicesContent}>
          <img src={serviceImg} alt="Imagem illustrativa de culinária" />
          <div className={styles.content}>
            <div>
              <h2>The best services ready <br />
                To serve you</h2>
              <p>
                Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <button>
                Know More
              </button>
            </div>
          </div>
        </section>

        {/* Seção do Blog  */}
        <section className={styles.blogContent}>
          <div className={styles.content}>
            <h2>Read Our Blog</h2>
            <p>Far far away, behind the word mountains,  far from the countries <br />
              Vokalia and Consonantia, there live the blind texts.</p>
            <div className={styles.whiteShadow}></div>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              partialVisible
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {ourBlogPosts.map(ourBlogPost => (
                <PostCard
                  key={ourBlogPost.title}
                  title={ourBlogPost.title}
                  postImgURL={ourBlogPost.postImg}
                  userName={ourBlogPost.userName}
                  userImgURL={ourBlogPost.userImg}
                  link="/"
                />
              ))}
            </Carousel>
          </div>
        </section>
        <section className={styles.clientContent}>
          <img src={clientImg} alt="Imagem illustrativa do cliente" />
          <div className={styles.content}>
            <div>
              <h2>Join our membership <br />
                to get special offer</h2>
              <div>
                <input type="email" placeholder="Enter your email address" />
                <button>Join</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}