import React from 'react'
import Common from '../../../components/CommonBg/Common';
import Testimonial from '../../../components/Testimonials/Testimonial';
import CommonBanner from '../../../components/CommonBanner/CommonBanner';

const page = () => {
  const data = {
    name:"Testimonials",
  };
  return (
    <div>
    <Common myData={data}/>
    <div style={{marginTop:"140px"}}>
      <Testimonial />
    </div>
    <CommonBanner />
    </div>
  )
}

export default page