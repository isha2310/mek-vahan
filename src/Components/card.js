import React,{useState, useEffect} from 'react';
import './manageAddress.css'
import Home from '../assets/home.png'
import Pg from '../assets/pg.png'
import Office from '../assets/office.png'
import Factory from '../assets/factory.png'
import Camp from '../assets/camp.png'
import Default from '../assets/user.svg'

const Cards = (props) => {
    const [image, setImage] = useState(Default)

    useEffect(( ) => {
        const venueProp = props.venue
        const venue = venueProp.toLowerCase()
        console.log(venue, venueProp)
        if(venue === 'home')
            setImage(Home)
        else if(venue === 'office')
            setImage(Office)
        else if(venue === 'factory')
            setImage(Factory)
        else if(venue === 'camp')
            setImage(Camp)
        else if(venue === 'pg')
            setImage(Pg)
        else 
            setImage(Default)
    })

    return(
        <div className="card">
            <div className="cardTitle">
                <img src={image} alt="" style={{height: 35, width: 35, paddingRight:10, paddingTop: 3}} align="left" /> 
                <h2>{props.venue}</h2>
            </div>
            <div className="cardContent">
                <p>{props.address}</p>
                <div className="card-button"><button className="add-button" align="right">Edit</button>
                <button style={{width: 80}}>Delete</button></div>
            </div>
        </div>
    )
}

export default Cards
