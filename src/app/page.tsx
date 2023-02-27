import Image from "next/image";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const photo = "/images/modern.jpg";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <div className="h-screen relative bg-gradient-to-b from-fuchsia-900 to-zinc-900">
        <Image
          priority
          src={photo}
          alt="Next.js logo"
          className="h-full w-full object-cover opacity-10 shadow-lg"
          fill
        />
      </div>

      <div className="absolute top-0 h-full w-full" id="main">
        <div className="flex items-center justify-center h-full">
          <a href="/#grid">
            <div className="flex flex-col px-6">
              <div className="text-white font-semibold text-8xl drop-shadow-md">
                Hello World
              </div>
              <div className="text-zinc-300 text-2xl drop-shadow-md">
                Hello World
              </div>
            </div>
          </a>
        </div>
      </div>

      <div
        className="min-h-screen max-w-7xl mx-auto flex items-center"
        id="grid"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5">
          <div className="bg-zinc-800 text-zinc-300 p-5 rounded-lg">
            <div className="text-[24px] font-semibold">Hello World</div>
            <div>
              Aliqua velit dolor occaecat irure anim qui qui exercitation
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
            </div>
          </div>
          <div className="bg-zinc-800 text-zinc-300 p-5 rounded-lg">
            <div className="text-[24px] font-semibold">Hello World</div>
            <div>
              Aliqua velit dolor occaecat irure anim qui qui exercitation
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
            </div>
          </div>
          <div className="bg-zinc-800 text-zinc-300 p-5 rounded-lg">
            <div className="text-[24px] font-semibold">Hello World</div>
            <div>
              Aliqua velit dolor occaecat irure anim qui qui exercitation
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
            </div>
          </div>
          <div className="lg:col-span-2 bg-zinc-800 text-zinc-300 p-5 rounded-lg">
            <div className="text-[24px] font-semibold">Hello World</div>
            <div>
              Aliqua velit dolor occaecat irure anim qui qui exercitation
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
            </div>
          </div>
          <div className="bg-zinc-800 text-zinc-300 p-5 rounded-lg">
            <div className="text-[24px] font-semibold">Hello World</div>
            <div>
              Aliqua velit dolor occaecat irure anim qui qui exercitation
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
            </div>
          </div>
          <div className="bg-zinc-800 text-zinc-300 p-5 rounded-lg">
            <div className="text-[24px] font-semibold">Hello World</div>
            <div>
              Aliqua velit dolor occaecat irure anim qui qui exercitation
              laboris consequat. Enim dolor velit ex ex commodo tempor minim
              enim. Dolor eu ea irure id esse nulla ut. Proident ea ut
              adipisicing sunt non irure ea mollit sit irure reprehenderit.
            </div>
          </div>
          <div className="lg:col-span-2 bg-zinc-800 text-zinc-300 rounded-lg">
            <div className="h-72 relative">
              <Image
                priority
                src={photo}
                alt="Next.js logo"
                className="h-full w-full object-cover opacity-30 shadow-lg absolute inset-0 rounded-lg"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
