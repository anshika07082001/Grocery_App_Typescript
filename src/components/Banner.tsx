import React from 'react'

const Banner = () => {
  return (
    <div className='d-flex flex-column col-12'>
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='d-flex flex-row p-1 pt-2 pb-2'>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Home-Care-web-min.png' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-3/Travel-web-min.png' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-Day-SPAR-ATTA-web-min.jpg' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-SPAR-Ghee-web-min.jpg' alt=''/>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex flex-row p-1 pt-2 pb-2'>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Home-Care-web-min.png' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-3/Travel-web-min.png' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-Day-SPAR-ATTA-web-min.jpg' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-SPAR-Ghee-web-min.jpg' alt=''/>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex flex-row p-1 pt-2 pb-2'>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/Home-Care-web-min.png' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-3/Travel-web-min.png' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-Day-SPAR-ATTA-web-min.jpg' alt=''/>
                        <img className='col-3 p-1' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-SPAR-Ghee-web-min.jpg' alt=''/>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
        <img className='col-12 p-2' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/nov_20_2020_greestrip.jpg' alt=''/>
    </div>
  )
}

export default Banner