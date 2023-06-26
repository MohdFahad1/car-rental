
import styles from './page.module.css';
import Hero from "../../components/Home/Hero/Hero";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import Hero3 from "../../components/Home/Hero3/Hero3";
import Hero4 from "../../components/Home/Hero4/Hero4";
import Choose from '../../components/Home/ChooseUs/ChooseUs';
import Testimonial from '../../components/Testimonials/Testimonial';
import Faq from '../../components/Faq/Faq';


export default function Home() {
  return (
    <>
      <Hero />
      <PlanTrip />
      <Hero3 />
      <Hero4 />
      <div className={styles.banner}>
        <h1>Save big with our cheap car rental!</h1>
        <h3>Top Airports. Local Suppliers. <span>24/7</span> Support</h3>
      </div>
      <Choose />
      <Testimonial />
      <Faq />
    </>
  )
}
