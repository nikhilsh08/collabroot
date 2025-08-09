import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Google from "@/assets/logo/Google.svg";

const HeroSection = () => {
  return (
    <section className="text-[#333333] py-16 lg:py-24 relative">
      <div className="lg:w-11/12 max-lg:w-[100vw] mx-auto px-4">
        <div className="grid w-full lg:grid-cols-2 gap-7 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col max-lg:text-center max-lg:items-center max-lg:justify-center max-md:order-2 w-full relative">
            <div className="text-orange-500 flex gap-x-4 ml-0.5 text-sm font-semibold tracking-wider uppercase mb-3">
              <span>Handmade.</span>
              <span>Sustainable.</span>
              <span>Global.</span>
            </div>
            <h1 className="text-5xl xl:text-6xl max-md:text-3xl  font-bold tracking-[-1.5px] mb-6 leading-tight">
              Empowering Artisans, Elevating Sustainability
            </h1>
            <p className="text-gray-600 text-lg max-md:text-base max-md:mx-[1.68rem] mb-8 leading-relaxed">
              Handcrafted bags and hampers made from textile waste — empowering women, preserving the planet.
            </p>
            <div className="flex flex-col sm:flex-row max-md:mb-8 max-md:items-center gap-4">
              <Button className="bg-[#e75415] hover:bg-[#282421] w-[150px] h-[55.322px] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Get A Quote
              </Button>
              <Button className="border border-gray-300 hover:bg-[#282421] bg-[#ffffff] hover:text-[#ffffff] w-[207px] text-[#333333] h-[55.322px] px-8 py-4 rounded-full font-semibold transition-colors">
                Explore Our Services
              </Button>
            </div>

            {/* Arrow Image - Positioned like screenshot */}
            <Image
              src="/assets/icons/arrow-1.png"
              width={120}
              height={120}
              alt="Arrow"
              className="absolute -bottom-14 max-lg:hidden lg:left-[350px] top-[333px] xl:left-[370px] w-[135px] h-auto rotate-[10deg]"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 max-md:order-2 items-center max-sm:px-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="bg-white rounded-3xl p-4 border w-fit border-[#d1cbc6] shadow-lg">
                <Image
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l9p7qck61o3yjswoh5il.jpeg"
                  width={600}
                  height={600}
                  draggable={false}
                  alt="Woman working on sewing machine"
                  className="w-[575px] h-[600px] max-md:h-[450px] max-lg:w-[90vw] object-cover rounded-2xl"
                />
              </div>

              {/* Stats Card - Top Right */}
              <div className="absolute top-14 right-6 border opacity-80 border-[#d1cbc6] bg-white rounded-2xl p-6 shadow-lg w-[165px] max-lg:-top-12 max-lg:-right-4 max-lg:opacity-95 max-lg:mt-4">
                <div className="flex flex-col items-start text-start w-28 h-48 space-y-1 mb-2">
                  <Image
                    src="/assets/sewing-machine.png"
                    width={100}
                    height={100}
                    alt="Sewing Machine"
                    className="w-20 h-20"
                  />
                  <div className="text-start !ml-0">
                    <p className="text-md font-semibold text-gray-600">Crafting</p>
                    <p className="text-md font-semibold text-gray-600">Quality</p>
                    <p className="text-md font-semibold text-gray-600">Garments</p>
                    <p className="text-md font-semibold text-gray-600">Since</p>
                    <p className="text-2xl font-bold text-orange-500">1995</p>
                  </div>
                </div>
              </div>

              {/* Google Review Card - Bottom Left */}
              <div className="absolute bottom-12 -left-20 lg:w-[300px] max-lg:w-[150px] max-lg:h-[200px] opacity-80 lg:h-[130px] border max-lg:-bottom-6 max-lg:-left-4 max-lg:opacity-95 border-[#d1cbc6] bg-white rounded-2xl p-4 shadow-lg flex  items-center">
                <div className="flex items-center max-lg:flex-col space-x-3">
                  <Google className="w-16 h-16" />
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-orange-500">
                      4.9
                    </h1>
                    <div className="text-sm text-gray-600">
                      1600+ Google Review
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
