import React from 'react'
import Slider from "react-slick";

const Banner = () => {
  const images = ['https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-12/FnM-NCR-web-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-2/Winter-Store-web-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/TEA-COFFE-web-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/TEA-COFFE-web-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Daily-Essential-web-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Daily-Essential-web-min.png']

const image =['https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Drinkware-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Pasta-and-Noodles-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Utensils-min.jpg',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Home-Care-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Bedsheets-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Dairy-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Skin-Care-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Electric-Appliances-min.jpg',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Hot-Sips-min.png']

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1
  };

  return (
  <div className='col-12 '>
    <div style={{width: '1200px',margin:'auto'}} className='p-3'>
      <Slider {...settings}>
        {images.map((item)=>{
          return (
            <img src={item} alt='' className='m-1 p-1'/>
          )
        })}
      </Slider>
    </div>
    <img className='col-12 p-2' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/nov_20_2020_greestrip.jpg' alt=''/>
    <div style={{width: '1200px',margin:'auto'}} className='p-3'>
      <Slider {...settings}>
        {image.map((item)=>{
          return (
            <img src={item} alt='' className='m-1 p-1'/>
          )
        })}
      </Slider>
    </div>
  </div>
  )
}

export default Banner