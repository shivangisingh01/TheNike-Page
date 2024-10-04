import React from 'react'
import { offer } from "../assets/images";
import Button   from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687} className='object-contain w-full'/>
      </div>
      
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold font-palanquin">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="text-gray-400 font-montserrat lg:max-w-lg info-text leading-normal mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit
          quos modi eum accusantium voluptates atque ad vero perspiciatis
          similique architecto, asperiores{" "}
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          {" "}
          explicabo, incidunt sapiente illo adipisci distinctio! Possimus,
          totam.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" />
          <Button label="Learn more" backgroundColor = "bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer