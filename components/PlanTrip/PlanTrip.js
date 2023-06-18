import React from 'react';
import styles from './PlanTrip.module.css';
import { FaCarAlt, FaCalendarAlt, } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Hero2 = () => {
    return (
        <div className={styles.hero2}>

            <h2>Book a car</h2>

            <div className={styles.hero2_main}>

                <form action="#" className={styles.form}>

                    <div className={styles.form_div1}>
                        <div className={styles.select_car}>
                            <label htmlFor="lang"><FaCarAlt className={styles.hero2_icon} /> Select Your Car Type<span>*</span></label>
                            <select name="Select your car type" id="lang">
                                <option>Select your car type</option>
                                <option>Car1</option>
                                <option>Car2</option>
                                <option>Car3</option>
                                <option>Car4</option>
                                <option>Car5</option>
                                <option>Car6</option>
                                <option>Car7</option>
                                <option>Car8</option>
                            </select>
                        </div>
                        <div className={styles.pick_up}>
                            <label htmlFor="lang"><FaCalendarAlt className={styles.hero2_icon} />Pick-up<span>*</span></label>
                            <select name="destination" id="destination">
                                <option>Select pick up location</option>
                                <option>Car1</option>
                                <option>Car2</option>
                                <option>Car3</option>
                                <option>Car4</option>
                                <option>Car5</option>
                                <option>Car6</option>
                                <option>Car7</option>
                                <option>Car8</option>
                            </select>
                        </div>
                        <div className={styles.drop_off}>
                            <label htmlFor="lang"><FaCalendarAlt className={styles.hero2_icon} />Drop-of<span>*</span></label>
                            <select name="destination" id="destination">
                                <option value="placeholder">Select drop off location</option>
                                <option value="car1">Car1</option>
                                <option value="car2">Car2</option>
                                <option value="car3">Car3</option>
                                <option value="car4">Car4</option>
                                <option value="car5">Car5</option>
                                <option value="car6">Car6</option>
                                <option value="car7">Car7</option>
                                <option value="car8">Car8</option>
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
                        <button>Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero2