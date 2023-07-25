import React from 'react'
import Common from '../../../components/CommonBg/Common';
import {data as vehicleData} from './data';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { FaCarSide, FaStar } from 'react-icons/fa';

const page = () => {
  const data = {
    name:"Vehicle Models",
  };
  return (
    <>
    <div>
      <Common myData={data}/>
    </div>
    <div className={styles.main}>
    <div className={styles.models}>
      {vehicleData.map((vehicle) => {
        const { id, name, price, company, image } = vehicle;
        return (
          <div key={id} className={styles.model_card}>

          {/* model image  */}
            <div className={styles.model_img}>
                <Image src={image} alt={name} height={250} width={350}/>
            </div>

            <div style={{paddingLeft:"25px", paddingRight:"25px", marginTop:"20px"}}>
            {/* Model name */}
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <h1>{name}</h1>
                <h3><FaStar /></h3>
              </div>
              <div>
                <h1>{price}</h1>
                <p>per day</p>
              </div>
            </div>

            <div style={{marginTop:"20px"}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p style={{fontSize:"20px", display:"flex", gap:"10px", alignItems:"center"}}><FaCarSide /> <span style={{color:"gray", fontWeight:"500"}}>{company}</span></p>
                <p style={{fontSize:"20px", display:"flex", gap:"10px", alignItems:"center"}}><span style={{color:"gray", fontWeight:"500"}}>4/5</span> <FaCarSide /></p>
              </div>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <p style={{fontSize:"20px", display:"flex", gap:"10px", alignItems:"center"}}><FaCarSide /> <span style={{color:"gray", fontWeight:"500"}}>Manual</span></p>
                <p style={{fontSize:"20px", display:"flex", gap:"10px", alignItems:"center"}}><span style={{color:"gray", fontWeight:"500"}}>Diesel</span> <FaCarSide /></p>
              </div>
            </div>

            </div>

            <hr style={{margin:"25px"}}/>

            <div style={{display:"flex", justifyContent:"center"}}>
            <Link href="/">
              <button className={styles.book}>Book Ride</button>
            </Link>
            </div>

          </div>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default page