"use client"
import React, { useState } from 'react';
import styles from './PlanTrip.module.css';
import { FaCarAlt, FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import ModalComponent from '../Modal/Modal';
import Golf6 from "../../public/vw.png";
import AudiA1 from "../../public/audi.png";
import Toyota from "../../public/toyota.png";
import Bmw320 from "../../public/bmw.png";
import Benz from "../../public/mercedes.png";
import Passat from "../../public/vw2.png";

const Hero2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [car, setCar] = useState("");
    const [pick, setPick] = useState("");
    const [drop, setDrop] = useState("");
    const [pickDate, setPickDate] = useState("");
    const [dropDate, setDropDate] = useState("");
    const [carImg, setCarImg] = useState("");

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    if (car === "Select your car type") {
        setCar("");
    }

    if (pick === "Select pick up location") {
        setPick("");
    }

    if (drop === "Select drop off location") {
        setDrop("");
    }

    if (pickDate === "dd-mm-yy") {
        setPickDate("dd-mm-yy");
    }

    if (dropDate === "dd-mm-yy") {
        setDropDate("dd-mm-yy");
    }

    let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = AudiA1;
      break;
    case "VW Golf 6":
      imgUrl = Golf6;
      break;
    case "Toyota Camry":
      imgUrl = Toyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = Bmw320;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = Benz;
      break;
    case "VW Passat CC":
      imgUrl = Passat;
      break;
    default:
      imgUrl = "";
  }



    return (
        <>
            <div className={styles.hero2}>

                <h2>Book a car</h2>

                <div className={styles.hero2_main}>

                    <form className={styles.form}>


                        <div className={styles.select_options}>
                            <label htmlFor="lang"><span><FaCarAlt /></span> Select Your Car Type<span>*</span></label>
                            <select onChange={(e) => setCar(e.target.value)}>
                                <option>Select your car type</option>
                                <option>Audi A1 S-Line</option>
                                <option>VW Golf 6</option>
                                <option>Toyota Camry</option>
                                <option>BMW 320 Modernline</option>
                                <option>Mercedes-Benz GLK</option>
                                <option>VW Passat CC</option>
                            </select>
                        </div>

                        <div className={styles.select_options}>
                            <label htmlFor="lang"><span><MdLocationOn /></span>Pick-up<span>*</span></label>
                            <select name="destination" id="destination" onChange={(e) => setPick(e.target.value)}>
                                <option>Select pick up location</option>
                                <option>New Delhi</option>
                                <option>Noida</option>
                                <option>Gurgaon</option>
                                <option>Haryana</option>
                                <option>Greater Noida</option>
                            </select>
                        </div>

                        <div className={styles.select_options}>
                            <label htmlFor="lang"><span><MdLocationOn /></span>Drop-of<span>*</span></label>
                            <select name="destination" id="destination" onChange={(e) => setDrop(e.target.value)}>
                                <option>Select drop off location</option>
                                <option>Noida</option>
                                <option>Haryana</option>
                                <option>Greater Noida</option>
                                <option>Gurgaon</option>
                                <option>New Delhi</option>
                            </select>
                        </div>

                        <div className={styles.date_span}>
                            <label htmlFor="start"><span><FaCalendarAlt /></span>Pick-up <span>*</span></label>
                            <br />
                            <input type="date" id="start" name="trip-start" onChange={(e) => setPickDate(e.target.value)} />
                        </div>

                        <div className={styles.date_span}>
                            <label htmlFor="start"><span><FaCalendarAlt /></span>Drop-of <span>*</span></label>
                            <br />
                            <input type="date" id="start" name="trip-start" onChange={(e) => setDropDate(e.target.value)} />
                        </div>

                        <div>
                            <button className={styles.button} onClick={openModal}>Search</button>
                        </div>

                    </form>
                </div>
            </div>

            <div>
                {isOpen && <ModalComponent car={car} pick={pick} drop={drop} pickDate={pickDate} dropDate={dropDate} isOpen={isOpen} setIsOpen={setIsOpen} carImg={carImg}/>}
            </div>
        </>
    )
}

export default Hero2