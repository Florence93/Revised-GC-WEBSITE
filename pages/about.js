import React from "react";
import Image from "next/image";
import Container from "../components/container";
import heroImg from "../public/img/sa1.jpg";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Gemway Consult
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            At GC, our goal is to ensure that your desire to travel abroad either for education or 
            other reasons are achieved. You can be rest assured that your applications will be treated with 
            utmost professionalism. With us, achieving your dream is certain.
            </p>

          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      
    </>
  );
}

