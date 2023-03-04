import "./globals.css";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import FadeIn from "./lib/components/FadeIn";
import Card from "./lib/components/Card";
import CardWide from "./lib/components/CardWide";
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
const waves = "/videos/waves.mp4";
const network_hub = "/videos/network-hub.mp4";
const network = "/videos/network.mp4";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-zinc-700 to-zinc-900">
      {/* HEADER */}
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

      {/* HERO */}
      <div className="absolute top-0 h-full w-full" id="main">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col px-6 z-50 gap-2">
            <div>
              <a
                href="/#grid"
                className="text-white font-semibold text-8xl drop-shadow-md"
              >
                engage intellect
              </a>
            </div>
            <div className="text-zinc-300 text-2xl drop-shadow-md z-50">
              <a href="https://google.com">Hello World</a>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div
        className="min-h-screen max-w-7xl mx-auto flex items-center"
        id="grid"
      >
        {/* CARDS */}
        <FadeIn
          component={
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
              <Card
                url="https://google.com"
                title="About"
                description="Aliqua velit dolor occaecat irure anim qui qui exercitation laboris consequat. Enim dolor velit ex ex commodo tempor minim enim. Dolor eu ea irure id esse nulla ut. Proident ea ut adipisicing sunt non irure ea mollit sit irure reprehenderit."
              />

              <Card video={network} />

              <Card
                url="https://engage-homepage.vercel.app/category/articles"
                title="Articles"
                description="Aliqua velit dolor occaecat irure anim qui qui exercitation laboris consequat. Enim dolor velit ex ex commodo tempor minim enim. Dolor eu ea irure id esse nulla ut. Proident ea ut adipisicing sunt non irure ea mollit sit irure reprehenderit."
              />

              <CardWide video={network_hub} />
              <Card
                url="https://engage-homepage.vercel.app/category/projects"
                title="Projects"
                description="Aliqua velit dolor occaecat irure anim qui qui exercitation laboris consequat. Enim dolor velit ex ex commodo tempor minim enim. Dolor eu ea irure id esse nulla ut. Proident ea ut adipisicing sunt non irure ea mollit sit irure reprehenderit."
              />
              {/* <Card video={waves} /> */}
              <Card
                url="http://45.56.88.245:8090/_/"
                title="Linode Server"
                description="Backend database, powered by PocketBase."
              />
              <Card
                url="http://192.168.0.185:8090/_/"
                title="Pi"
                description="A secure, local-only PocketBase backend. Hosted on a Raspberry Pi."
              />
              <Card
                url="https://engageintellect-docs.vercel.app/docs"
                title="Docs"
                description="A secure, local-only PocketBase backend."
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
