
import styles from './page.module.css';
import Hero from "../../components/Home/Hero/Hero";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import Hero3 from "../../components/Home/Hero3/Hero3";
import Choose from '../../components/Home/ChooseUs/ChooseUs';
import Testimonial from '../../components/Testimonials/Testimonial';
import Faq from '../../components/Faq/Faq';
import PickCar from '../../components/Home/PickCar/PickCar';


export default function Home() {
  return (
    <>
      <Hero />
      <PlanTrip />
      <Hero3 />
      <PickCar />
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
