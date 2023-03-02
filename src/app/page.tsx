import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import FadeIn from "./lib/components/FadeIn";
import "./globals.css";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// IMAGES
const modern = "/images/modern.jpg";
const modern2 = "/images/modern2.jpg";

// VIDEOS
const beach_waves = "/videos/beach-waves.mp4";
const venice = "/videos/venice.mp4";
const la_night = "/videos/la-night.mp4";
const data_earth = "/videos/data-earth.mp4";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <div className="h-screen relative bg-gradient-to-b from-fuchsia-900 to-zinc-900">
        <Image
          priority
          src={modern}
          alt="Next.js logo"
          className="h-full w-full object-cover opacity-10 shadow-lg"
          fill
        />
      </div>

      <div className="absolute z-50 top-0 right-0 h-full p-2 lg:p-5 text-right">
        <a href="/" target="_blank">
          <div className="flex lg:fixed lg:top-5 lg:right-5 items-center justify-end gap-2 text-zinc-300 bg-zinc-900/25 hover:bg-zinc-900/50 rounded-md transition-all duration-300 py-2 px-4">
            <div>
              <FaGithub className="text-2xl drop-shadow-lg" />
            </div>
            <div className="text-lg font-semibold drop-shadow-lg">GitHub</div>
          </div>
        </a>
      </div>

      <div className="absolute top-0 h-full w-full" id="main">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col px-6 z-50">
            <a
              href="/#grid"
              className="text-white font-semibold text-8xl drop-shadow-md"
            >
              Hello World
            </a>
            <div className="text-zinc-300 text-2xl drop-shadow-md z-50">
              <a href="https://google.com">Hello World</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen max-w-7xl mx-auto flex items-center"
        id="grid"
      >
        <FadeIn
          component={
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
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
                  irure id esse nulla ut. Proident ea ut adipisicing sunt non
                  irure ea mollit sit irure reprehenderit.
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
                <div className="h-72 relative overflow-none">
                  {/* <Image
                priority
                src={modern2}
                alt="Next.js logo"
                className="h-full w-full object-cover opacity-20 shadow-lg absolute inset-0 rounded-lg"
                fill
              /> */}

                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-20 shadow-lg absolute inset-0 rounded-lg saturate-150"
                  >
                    <source src={data_earth} type="video/mp4" />
                  </video>

                  {/* <div className="absolute top-0 flex items-center justify-center h-full flex-col p-5"> */}
                  <div className="absolute top-0 p-5">
                    <div className="text-[24px] font-semibold">Hello World</div>
                    <div>
                      Fugiat id occaecat elit cupidatat culpa ullamco laboris ea
                      non reprehenderit do irure ipsum sit. Mollit sunt
                      adipisicing aute do cupidatat laboris veniam labore minim
                      esse dolore ipsum anim. Eu voluptate in laborum commodo
                      culpa culpa tempor elit Lorem velit culpa. Exercitation
                      aute ut officia excepteur excepteur minim ullamco mollit
                      Lorem esse officia non.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
