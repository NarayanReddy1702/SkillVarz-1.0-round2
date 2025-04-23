import React from "react";

const Page2 = () => {
  return (
    <div className="min-h-screen text-black flex items-center justify-center flex-col gap-y-10 px-4">
      <div className="text-center text-base md:text-2xl font-[font-2] md:w-[58%]">
        We are a Digital Creative agency who specializes in web design and
        development for clients who care about details. Building upon my
        experiences in digital design across various industry sectors and
        numerous projects, my goal is to create high-end web experiences that
        elevate your brand to exceptional heights.
      </div>
      <div className="flex md:w-[61%] gap-y-3 flex-col md:flex-row items-center justify-between">
        <h1 className="font-[font-2] text-xl md:text-base ">Designer : Aditya</h1>
        <h1 className="font-[font-2] text-xl md:text-base ">Studio : VizuaLab</h1>
        <h1 className="font-[font-2] text-xl md:text-base ">Coder : Samee</h1>
      </div>
      <div className="w-full items-center flex justify-center   overflow-hidden">
        <div  className= "w-[80%] md:w-[64%] bg-[url(/src/assets/Images/img1.png)] bg-cover bg-top h-[42vw] md:h-[20vw] "></div>
      </div>
    </div>
  );
};

export default Page2;
