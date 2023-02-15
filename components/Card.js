import React from "react";
import Image from "next/image";

const Card = ({ image, name, twitter, description }) => {
  return (
    <div className=" shadow-lg rounded-xl break-words h-[32rem] w-auto md:w-[20rem]">
      <div className="relative  p-5 h-[23rem]">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div className="grid p-3">
        <h1 className="text-lg font-bold">{name}</h1>
        <h4 className="italic text-sm">{twitter}</h4>
      </div>
      <div className="p-3">
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default Card;
