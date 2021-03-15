import React from 'react'
import { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    
    let [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random()* data.length));


    const InceramentHandler = () => {
        setCurrentIndex(prevState => {
            return (prevState + 1 ) % (data.length);
        })
    }

    const DecreamentHandler = () => {
        setCurrentIndex(prevState => (prevState - 1 + data.length) % data.length);
    }

    // for Readability :: 
    let {image , name , job , text} = data[currentIndex]

    return (
        <article className= "Card">
                <div className="ImageContainer">
                    <img src={image} alt={name} />
                    <span className="Quote">
                        <FaQuoteRight />
                    </span>
                </div>
                <h2 className = "Name"> {name}</h2>
                <p className = "Job">{job}</p>
                <p>{text}</p>
            <button onClick={() => DecreamentHandler()} className = "Button"> <FaChevronLeft/> </button>
            <button onClick={() => InceramentHandler()} className = "Button"> <FaChevronRight/> </button>
        </article>
    )
}

export default Review