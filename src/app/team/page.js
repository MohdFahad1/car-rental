import React from 'react'
import Common from '../../../components/CommonBg/Common';
import Image from 'next/image';
import {data as Members} from './data';
import styles from './page.module.css';

const page = () => {
  const data = {
    name:"Our Team",
  };
  return (
    <>
      <div>
        <Common myData={data}/>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className={styles.main}>
          {Members.map((members) => {
            const {id, name, designation, image} = members;
            return (
              <div key={id} className={styles.card}>
              <Image src={image} alt={name} height={300} width={300}/>
              <h2 style={{marginTop:"10px"}}>{name}</h2>
              <p style={{color:"gray", fontWeight:"500"}}>{designation}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default page