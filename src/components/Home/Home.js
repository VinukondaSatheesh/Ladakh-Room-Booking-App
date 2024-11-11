import './Home.css'
import home from '../../images/home.jpg'
import { useState } from 'react'
import Discover from '../Discover/Discover'
import Services from '../Services/Services'
import { Link } from 'react-router-dom'
const Home=()=>{
    const [rooms,setRooms]=useState(1)

    const onClickMinus=()=>{
        setRooms(rooms-1)
    }
    const onClickPlus=()=>{
        setRooms(rooms+1)
    }
    return (
        <div className='home-container'>
            <div className='details-container'>
            <div className='left-container'>
                <h1>Work from <br/>ladakh</h1>
                <p>India's first true digital tourism ecosystem</p>
                <div className='icons-container'>
                    <i className='bx bxl-facebook-circle'></i>
                    <i className='bx bxl-instagram-alt' ></i>
                </div>
            </div>
            <img src={home} alt='' className='img'/></div>
            <div className='banner-container'>
                <div className='check-in-container'>
                    <p>CHECK-IN</p>
                    <input className='input' type='date'/>
                </div>
                <div className='hr'></div>
                <div className='check-in-container'>
                    <p>CHECK-OUT</p>
                    <input className='input' type='date'/>
                </div>
                <div className='hr'></div>
                <div className='rooms-container'>
                    <label>Rooms</label>
                    <div className='buttons-container'>
                        <button className='button-minus' onClick={onClickMinus}>-</button>
                        <p>{rooms}</p>
                        <button className='plus-button' onClick={onClickPlus}>+</button>
                    </div>
                </div>
                <div className='hr'></div>
                <div className='book-btn-container'>
                    <Link to='/form'><button className='book-button' type='button'>BOOK</button></Link>
                </div>
            </div>
            <Discover/>
            <Services/>
        </div>
    )
}
export default Home