import React from 'react';
import Image from "next/image";
import { awards } from "@/utils/data/awards";
import { FaTrophy } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/ai.json';

const Awards = () => {
  return (
    <div id="awards" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Awards Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Awards & Honors
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex justify-center items-center mb-8">
          <div className="w-1/2 h-1/2 max-w-md">
            <AnimationLottie animationPath={lottieFile} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 lg:px-8">
          {awards.map((award) => (
            <GlowCard key={award.id} identifier={`award-${award.id}`}>
              <div className="p-3 relative text-white h-full">
                <Image
                  src="/blur-23.svg"
                  alt="Award Background"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">{award.year}</p>
                  <FaTrophy className="text-yellow-400" />
                </div>
                <h3 className="text-sm sm:text-base font-medium mb-1">{award.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{award.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Awards;