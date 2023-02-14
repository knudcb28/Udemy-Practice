import React from "react";
import Image from "next/image";

const Card = ({ image, name, twitter, description }) => {
  return (
    <div className="border border-slate-900 rounded break-words h-[20rem] w-auto sm:w-[12rem]">
      <div className="flex justify-center border-b border-slate-900 p-5">
        <Image src={image} alt="image" height={50} />
      </div>
      <div className="grid pt-2">
        <h1 className="text-lg font-bold">{name}</h1>
        <h4 className="italic text-sm">{twitter}</h4>
      </div>
      <div className="pt-5">
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default Card;
