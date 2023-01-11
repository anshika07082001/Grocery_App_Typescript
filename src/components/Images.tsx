import React from 'react'

const Images = () => {
    const images =['https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Fruits-&-Vegetable-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Fish-and-Meat-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Packaged%20Food-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Masala-and-Dry-Fruits-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Munchies-Biscuit-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Soft-Drinks-and-Juices-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Tea-coffee-and-more-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Winter-Winter-Ready-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Tablewa-dinnerware-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Cookware-and-Serveware-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Blankets-and-Bedsheets-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Gas-Stoves-and-range-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Home%20Care-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Juicer-Mixer-Blenders-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Glassware-and-Mugs-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Utensiles-min.png',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Travel-and-Lugguage-min.png']

  return (
    <>
    <h4 className='ps-2 pt-2 text-dark-emphasis'>Shop By Category</h4>
    <hr className='col-3 ms-2'/>
    <div className='grid'>
        {images.map((item)=>{
            return(
                <img src={item} alt=''/>
            )
        })}
    </div>
    </>
  )
}

export default Images