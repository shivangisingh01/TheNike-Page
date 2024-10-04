import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex mt-10 justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold font-palanquin">
          We Provide You <span className="text-coral-red">Super</span>
          <span className="text-coral-red">Quality </span> Shoes
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
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img src={shoe8} alt="" className="object-contain w-[510px] h-[460px] "/>
      </div>
    </section>
  );
};

export default SuperQuality;
