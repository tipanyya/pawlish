import React from "react";
import Footer from "../components/Footer";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";   
import Dog1 from "../assets/services/dog1.png"
import Dog2 from "../assets/services/dog2.png"
import Dog3 from "../assets/services/dog3.png"
import Dog4 from "../assets/services/dog4.png"
import dogicon from "../assets/services/dog-icon.png"
import check from "../assets/services/check-icon.png"
import ekis from "../assets/services/x-icon.png"


const Services = () => {

  //Group Buttons Selection and Multiplyer
  const [selected, setSelected] = useState("small");

  const buttons = [
    { id: 'small', label: 'SMALL' },
    { id: 'medium', label: 'MEDIUM' },
    { id: 'large', label: 'LARGE' },
  ];

  const getPriceBySize = (basePrice) => {
  const multipliers = {
    small: 1,
    medium: 1.5,
    large: 2,
  };

  const multiplier = multipliers[selected] || 1;
  return Math.round(basePrice * multiplier);
};

  //Carousel Layout
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



  return (
    <div className="min-h-screen bg-[#FAEEE7] flex flex-col">
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col items-center mt-35">
          
          {/* //Header */}
          <div className="flex flex-row gap-4 justify-center items-center ">
            <div className="servies-pet-container w-20 h-20 rounded-lg border-3 flex justify-center items-center shadow-[0_9px_8px_rgba(0,0,0,0.25)]" > 
              <p className="servies-text-stroke text-6xl text-white"> P </p>
            </div>
            <div className="servies-pet-container mt-10 w-20 h-20 rounded-lg border-3 flex justify-center items-center shadow-[0_9px_8px_rgba(0,0,0,0.25)]" > 
              <p className="servies-text-stroke text-6xl text-white"> E </p>
            </div>

            <div className="relative w-20 h-20 mr-7  ">
              <div className="servies-pet-container mt-2 w-20 h-20 rounded-lg border-3 flex justify-center items-center shadow-[0_9px_8px_rgba(0,0,0,0.25)] transform rotate-[15deg]" > 
                <p className="servies-text-stroke text-6xl text-white transform rotate-[15deg]"> T </p>
              </div>

              <div>
                <img src={dogicon} alt="" className="absolute -bottom-10 -right-3 w-13 h-13.5 "/>
              </div>

            </div>
            
            <p className="services-services-text">Services</p>
          </div>

         <p className="text-outline-white2 mt-10"> Our services based on your dog’s size</p>


          {/* //Button Options */}
          <div className="flex gap-7 mt-10 mb-10 ">
            {buttons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelected(btn.id)}
                className="services-options-button 
                text-outline-white3 text- px-14 py-1  border-black border-3 rounded-lg shadow-[0_9px_8px_rgba(0,0,0,0.25)]"
                style={{
                  backgroundColor: selected === btn.id ? '#E26764' : '#F3C6C0',
                }}
              > {btn.label}
              </button>
            ))}
          </div>
      
          {/* //Carousel  */}
          <div className='carousel-container w-3/4 mb-20 '>
            <div >
              {/* //setting for showing ng carousel layout */}
              <Slider {...settings}> 
                {data.map((d) => (
                  <div key={d.name} className="h-auto text-black rounded-xl ">

                    {/* //box containing image */}
                    <div className='h-[300px] rounded-xl m-5 border-3 border-black shadow-[0_9px_8px_rgba(0,0,0,0.25)] mb-10'>
                      <img src={d.img} alt="" className=" h-full w-full rounded-xl "/>
                    </div>

                    {/* //box containing name */}
                    <div className="flex justify-center">
                      <div className=" carousel-pet-container w-3/4 h-13 rounded-lg border-3 border-black flex justify-center items-center bg-gray-800 shadow-[0_9px_8px_rgba(0,0,0,0.25)] mb-10">
                        <p className="text-outline-white3"> {d.name}</p>
                      </div>
                    </div>

                    {/* //box containing details */}
                      <div className="flex flex-col w-auto justify-center items-center gap-4 p-4 border-3 border-black rounded-xl bg-white mx-5 shadow-[0_9px_8px_rgba(0,0,0,0.25)] mb-10 ">
                      <p className="text-outline-white4"> Inclusion</p>                    
                      <ul className="text-left text-sm break-words w-full">
                        {allInclusions.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 ml-5 text-lg text-gray-500 font-opensans-semibold">
                            <span>
                              {d.inclusions.includes(item) ? (
                                <img src={check} alt="check" className="w-6 h-6" />
                              ) : (
                                <img src={ekis} alt="check" className="w-4 h-4 ml-1 mr-1.5" />
                              )}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                      <p className="text-2xl md:text-lg lg:text-2xl text-black font-opensans-bold text-center md:text-left">
                        PHP {getPriceBySize(d.price)}</p>
                      <button className="services-book-button 
                       text-lg font-opensans text-white font-extrabold border-black border-2 rounded-lg shadow-[0_9px_8px_rgba(0,0,0,0.25)]"
                        style={{
                          WebkitTextStroke: '1.3px black',
                          color: 'white',
                        }}
                        onClick={() => alert(`Booking Confirmed!`)}
                      > Book Now!
                      </button>
                    </div>
                      
                    </div>
                  </div>
                ))}
              </Slider>

            </div>
          </div>
        </div>

      </main>
        <Footer />

    </div>
  );
};

// dafault content
  const allInclusions = [
  "Bath",
  "Shampoo",
  "Blow dry",
  "Nail trim and filing",
  "Minor trimming",
  "Cologne spray",
  "Body trimming and cut",
  "Creative cut",
  "Teeth brushing and ear care"
];

const data = [
  {
    name: `Bath & Dry`,
    img: Dog1,
    price: 700,
    inclusions: [
      "Bath",
      "Shampoo",
      "Blow dry"
    ]
  },
  {
    name: `Basic Grooming`,
    img: Dog2,
    price: 900,
    inclusions: [
      "Bath",
      "Shampoo",
      "Blow dry",
      "Nail trim and filing",
      "Minor trimming"
    ]
  },
  {
    name: `Full Grooming`,
    img: Dog3,
    price: 1200,
    inclusions: allInclusions 
  },
  {
    name: `Pet Pampering `,
    img: Dog4,
    price: 1800,
    inclusions: allInclusions
  },
];

export default Services;
