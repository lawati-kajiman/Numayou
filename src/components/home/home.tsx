"use-client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundBeams } from "../ui/background-beam";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { AuroraBackground } from "../ui/aurora-background";

const words =
  "Welcome To Numayou The Only Plateform Where You Get Your Customized Furniture And Clothes And Earn Money Through Your Design";

const Home = () => {
  return (
    <AuroraBackground className="h-full w-full bg-zinc-50 dark:bg-zinc-900">
      <div className="h-full w-full bg-neutral-950 p-10 flex items-center justify-between">
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Numayou
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            <TextGenerateEffect words={words} />
          </p>
        </div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white">
              Get Ready To Experience The Power Of Customized Furniture
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Get Your Customized Furniture WhenEver HowEver WhereEver You Want.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/wave.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="http://localhost:3000/products"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                Try Now NumaYou
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </AuroraBackground>
  );
};

export default Home;
