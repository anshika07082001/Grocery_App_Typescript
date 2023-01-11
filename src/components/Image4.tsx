import React from 'react'

const Image4 = () => {
    const images = ['https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/static/Party-Corner-STATIC-min.jpg',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/static/Snack-Time-Banner.jpg',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/static/Live-Better-Spendless.jpg',
'https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-9-9/Big-Grocery-Banner-static-mm.jpg']

return (
    <div className='p-2'>
        <div className='grid4'>
            {images.map((item)=>{
                return (
                    <img src={item} alt=''/>
                )
            })}
        </div>
        <img className='pt-5 pb-3 col-12' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/Online%20Grocery%20Shopping-Buy%20grocery%20online%20save.jpg' alt=''/>
        <div className='border border-1 border-dark-subtle m-4 p-4 d-flex flex-column'>
            <p className='text-dark-emphasis fw-bold'>Online Grocery Store With the Freshest Produce — SPAR</p>
            <p className='text-dark-emphasis fw-light'>SPAR is the leading hypermarket and focuses to provide its customers with fresh produce every time they visit the store, be it the physical or online grocery store. SPAR has 12,500+ stores in 44 countries across 4 continents. In India SPAR currently has 25 stores across 9 cities including — Bangalore, Mangalore, Shimoga, Chennai, Coimbatore, Hyderabad, New Delhi, Gurugram and Ghaziabad. Apart from physical stores, SPAR also has an online presence. It is great to get all your groceries and daily essentials delivered right to your doorstep? Isn’t it?</p>
            <p className='text-dark-emphasis fw-bold'>SPAR’s 25 online hypermarket in India is convenient, has top brands, exclusive deals and so much more to offer:</p>
        </div>
    </div>
  )
}

export default Image4