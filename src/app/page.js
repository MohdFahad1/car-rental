import styles from './page.module.css';
import Hero from "../../components/Home/Hero/Hero";
import Hero2 from "../../components/Home/Hero2/Hero2";
import Hero3 from "../../components/Home/Hero3/Hero3";
import Hero4 from "../../components/Home/Hero4/Hero4";

export default function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <div className={styles.banner}>
        <h1>Save big with our cheap car rental!</h1>
        <h3>Top Airports. Local Suppliers. <span>24/7</span> Support</h3>
      </div>
    </>
  )
}
