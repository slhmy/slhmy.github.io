import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Blog", href: "https://slhmy.github.io/blog" },
  { name: "Learn", href: "https://slhmy.github.io/full-stack-docusaurus/" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
      <nav className="z-10 my-12 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        slhmy
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 text-center animate-fade-in">
        <h2 className="text text-zinc-500 ">
          Stay Creative
        </h2>
      </div>
      
      <div className="absolute bottom-8 text-center animate-fade-in">
        <h2 className="text-xs text-zinc-500 ">
          Inspired by{" "}
          <a href="https://chronark.com/">
            <span className="text-zinc-300">chronark.com</span>
          </a>
        </h2>
      </div>
    </div>
  );
}
