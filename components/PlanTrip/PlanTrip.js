import React from 'react';
import styles from './PlanTrip.module.css';
import { FaCarAlt, FaCalendarAlt, } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Hero2 = () => {
    return (
        <div className={styles.hero2}>

            <h2>Book a car</h2>

            <div className={styles.hero2_main}>

                <form className={styles.form}>


                    <div className={styles.select_options}>
                        <label htmlFor="lang"><span><FaCarAlt /></span> Select Your Car Type<span>*</span></label>
                        <select>
                            <option>Select your car type</option>
                            <option>Audi A1 S-Line</option>
                            <option>VW Golf 6</option>
                            <option>Toyota Camry</option>
                            <option>BMW 320 Modernline</option>
                            <option>Mercedes-Benz GLK</option>
                            <option>VW Passat CC</option>
                        </select>
                    </div>

                    <div  className={styles.select_options}>
                        <label htmlFor="lang"><span><MdLocationOn /></span>Pick-up<span>*</span></label>
                        <select name="destination" id="destination">
                            <option>Select pick up location</option>
                            <option>New Delhi</option>
                            <option>Noida</option>
                            <option>Gurgaon</option>
                            <option>Haryana</option>
                            <option>Greater Noida</option>
                        </select>
                    </div>

                    <div  className={styles.select_options}>
                        <label htmlFor="lang"><span><MdLocationOn /></span>Drop-of<span>*</span></label>
                        <select name="destination" id="destination">
                            <option value="placeholder">Select drop off location</option>
                            <option value="car1">Noida</option>
                            <option value="car2">Haryana</option>
                            <option value="car3">Greater Noida</option>
                            <option value="car4">Gurgaon</option>
                            <option value="car5">Noida</option>
                        </select>
                    </div>

                    <div className={styles.date_span}>
                        <label htmlFor="start"><span><FaCalendarAlt /></span>Pick-up <span>*</span></label>
                        <br />
                        <input type="date" id="start" name="trip-start" />
                    </div>

                    <div className={styles.date_span}>
                        <label htmlFor="start"><span><FaCalendarAlt /></span>Drop-of <span>*</span></label>
                        <br />
                        <input type="date" id="start" name="trip-start" />
                    </div>

                    <div>
                        <input type="submit" value="Search" className={styles.button}/>
                    </div>

                </form>
            </div>


        </div>
    )
}

export default Hero2




{/* <form action="#" className={styles.form}>

<div className={styles.form_div1}>


<div className={styles.select_car}>
    <label htmlFor="lang"><FaCarAlt className={styles.hero2_icon} /> Select Your Car Type<span>*</span></label>
    <select name="Select your car type" id="lang">
        <option>Select your car type</option>
        <option>Audi A1 S-Line</option>
        <option>VW Golf 6</option>
        <option>Toyota Camry</option>
        <option>BMW 320 Modernline</option>
        <option>Mercedes-Benz GLK</option>
        <option>VW Passat CC</option>
    </select>
</div>


<div className={styles.pick_up}>
    <label htmlFor="lang"><FaCalendarAlt className={styles.hero2_icon} />Pick-up<span>*</span></label>
    <select name="destination" id="destination">
        <option>Select pick up location</option>
        <option>New Delhi</option>
        <option>Noida</option>
        <option>Gurgaon</option>
        <option>Haryana</option>
        <option>Greater Noida</option>
    </select>
</div>



<div className={styles.drop_off}>
    <label htmlFor="lang"><FaCalendarAlt className={styles.hero2_icon} />Drop-of<span>*</span></label>
    <select name="destination" id="destination">
        <option value="placeholder">Select drop off location</option>
        <option value="car1">Noida</option>
        <option value="car2">Haryana</option>
        <option value="car3">Greater Noida</option>
        <option value="car4">Gurgaon</option>
        <option value="car5">Noida</option>
    </select>
</div>


</div>

<div className={styles.form_div2}>


<div>
    <label htmlFor="start"><MdLocationOn className={styles.hero2_icon} />Pick-up <span>*</span></label>
    <br />
    <input type="date" id="start" name="trip-start" />
</div>


<div>
    <label htmlFor="start"><MdLocationOn className={styles.hero2_icon} />Drop-of <span>*</span></label>
    <br />
    <input type="date" id="start" name="trip-start" />
</div>


<button type="button">Search</button>


    </div>
</form> */}