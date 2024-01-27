import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const ShowRoom = () => {
  return (
    <div className="bg-bridal gap-3 flex p-8 md:p-16 lg:py-28">
      <div className="p-2 lg:p-16 max-w-[500px] flex flex-col justify-center">
        <h3 className="text-4xl font-bold mb-2">
          50+ Beautiful rooms inspiration
        </h3>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="button_solid">Explore More</button>
      </div>
      <div className="hidden md:inline-flex relative">
        <Image
          src="/Rectangle 24.png"
          width={400}
          height={580}
          alt="interior design"
          className="h-full"
        />
        <div className="flex absolute bottom-3 left-3 items-stretch">
          <div className="bg-white p-3 ">
            <p className="text-sm mb-4 ">01 - Bed Room</p>
            <h4 className="text-2xl font-bold">Inner Peace</h4>
          </div>
          <button className="button_solid px-4 mb-0 self-end"><ArrowRightIcon className="h-4" /></button>
        </div>
      </div>
      <div className="hidden md:inline-flex relative">
        <Image
          src="/Rectangle 40.png"
          width={400}
          height={580}
          alt="interior design"
          className="h-full"
        />
        <div className="flex absolute bottom-3 left-3 items-stretch">
          <div className="bg-white p-3 ">
            <p className="text-sm mb-4 ">01 - Dining</p>
            <h4 className="text-2xl font-bold">Inner Peace</h4>
          </div>
          <button className="button_solid px-4 mb-0 self-end"><ArrowRightIcon className="h-4" /></button>
        </div>
      </div>
    </div>
  );
};

export default ShowRoom;
