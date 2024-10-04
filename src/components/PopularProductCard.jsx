import React from "react";
import{ star }from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="" className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="" width={24} height={24} /> <p className="font-montserrat leading-normal text-xl text-slate-gray ">4.5</p>
      </div>
      <h3 className="text-slate-gray text-xl mt-2 leading-normal font-semibold">{name}</h3>
      <p className="font-semibold text-2xl text-coral-red">{price}</p>
    </div>

  );
};

export default PopularProductCard;
