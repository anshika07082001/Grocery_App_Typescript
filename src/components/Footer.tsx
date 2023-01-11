import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='col-12 bg-body-secondary '>
        <div className='col-12 p-2 d-flex flex-row justify-content-between border-bottom border-2 border-danger'>
            <h4 className='ps-4 pb-2 pt-2 text-dark-emphasis'>Get new recipes & blogs in your inbox every week</h4>
            <div className='col-4 border border-1 me-4 mb-2 mt-2 d-flex flex-row align-items-center justify-content-between'>
                <input className='col-9 border-0 p-2' style={{outline:'none'}}/>
                <button className='border-0 bg-success p-2 text-white fw-light '>SUBSCRIBE</button>
            </div>
        </div>
        <div className='col-12 d-flex flex-row p-3'>
            <div className='col-2 p-2 border-end border-dark-subtle '>
                <img style={{width:'200px'}} src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg' alt=''/>
            </div>
            <div className='col-2 d-flex flex-column p-2 ps-4 border-end border-dark-subtle'>
                <span className='fw-bolder fs-6'>Information</span>
                <Link to='/about' className='text-decoration-none text-dark'>
                <span className='fw-lighter text-primary-subtle'>About Us</span>
                </Link>
                <span className='fw-lighter text-primary-subtle'>Privacy Policy</span>
                <span className='fw-lighter text-primary-subtle'>Terms</span>
                <span className='fw-lighter text-primary-subtle'>Store Locater</span>
            </div>
            <div className='col-2 d-flex flex-column p-2 ps-4 border-end border-dark-subtle'>
                <span className='fw-bolder fs-6'>Shopping</span>
                <span className='fw-lighter text-primary-subtle'>Your Account</span>
                <span className='fw-lighter text-primary-subtle'>FAQs</span>
                <span className='fw-lighter text-primary-subtle'>Return Policy</span>
            </div>
            <div className='col-2 d-flex flex-column p-2 ps-4 border-end border-dark-subtle'>
                <span className='fw-bolder fs-6'>Engage</span>
                <span className='fw-lighter text-primary-subtle'>Contact Us</span>
                <span className='fw-lighter text-primary-subtle'>Share Feedback</span>
                <span className='fw-lighter text-primary-subtle'>Corporate Site</span>
            </div>
            <div className='col-4 d-flex flex-column p-2 ps-5'>
                <div className='d-flex flex-row'>
                    <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/flogo.jpg' alt=''/>
                    <div className='d-flex flex-column p-2'>
                        <span className='fw-lighter text-primary-subtle'>Download the SPAR India Mobile App</span>
                        <div>
                            <img className='m-1' src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/gplay.jpg' alt=''/>
                            <img className='m-1 ms-3' src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/appstore.jpg' alt=''/>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row pt-3 pb-2 align-items-center'>
                    <span className='fw-lighter text-primary-subtle'>Connect with us</span>
                    <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/fbicon.jpg' alt=''/>
                    <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/twicon.jpg' alt=''/>
                    <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/inicon.jpg' alt=''/>
                </div>
                <span className='fw-light text-dark'>18605009418</span>
            </div>
        </div>
    </div>
    <div className='col-12 d-flex flex-row justify-content-between align-items-center p-2'>
        <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/payoptions.png' alt=''/>
        <div className='fw-lighter text-dark d-flex flex-row align-items-center'>
            <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Stylesheet/images/returnicon.jpg' alt=''/>
            <span className=' p-2 ps-3'>HASSLE FREE RETURNS AND NO QUESTIONS ASKED</span>
        </div>
    </div>
    <div className='bg-dark col-12 p-3 d-flex flex-row justify-content-around'>
        <div className='col-3 d-flex flex-row text-light  align-items-center'>
            <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Stylesheet/images/delicon.jpg' alt=''/>
            <span>SAME DAY DELIVERY</span>
        </div>
        <div className='col-3 d-flex flex-row text-light align-items-center'>
            <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Stylesheet/images/cardsicon.jpg' alt=''/>
            <span>WE ALSO ACCEPT CARD ON DELIVERY</span>
        </div>
        <div className='col-3 d-flex flex-row text-light align-items-center'>
            <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Stylesheet/images/freeicon.jpg' alt=''/>
            <span>FREE DELIVERY ON ORDERS ABOVE ₹499</span>
        </div>
    </div>
    <div className='col-12 d-flex flex-column bg-success p-2 text-white'>
        <span className='fw-light m-2 fs-6 mt-3'>POPULAR CATEGORIES: Fruits & VegetablesGroceryMeat, Poultry & FishDairy, Frozen & BattersBeveragesBranded FoodSnacks & SweetsHome & HygieneBeauty & Personal CareBaby Food & CareHome & KitchenLuggage & TravelToys & StationeryClothing & AccessoriesBakery & CakesElectronics & Appliances</span>
        <span className='fw-light m-2 fs-6 mt-3'>POPULAR BRANDS: SurfexcelAmulAashirvaadFortuneTataNGK Chef ChoiceBritanniaSafe HarvestSunpureGTSCadburysMother DairyMilton -spotzeroNandiniBrooke BondKellogg'SIndia GateMaggiComfortGold WinnerMilky MistParleIdhyamLaysHarpicMTRGalaSaffolaDaawatSunfeastVimMc-cainDoveColgateNiveaArielWhisperHorlicksDettolKissanDaburHimalaya</span>
        <span className='fw-light m-2 fs-6 mt-3'>CITIES WE SERVE: Chennai, Bangalore, Hyderabad, New Delhi, Gurgaon, Ghaziabad, Coimbatore, Shimoga, Mangalore</span>
        <span className='fw-bolder m-2 fs-6 mt-3'>SPAR India © All rights Reserved</span>
    </div>
    </>
  )
}

export default Footer