import "./globals.css";
import { FaGithub, FaCode, FaServer } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { RiCodeBoxFill } from "react-icons/ri";
import Image from "next/image";
import FadeIn from "./lib/components/FadeIn";
import Card from "./lib/components/Card";
import CardWide from "./lib/components/CardWide";
import { info, hero, cards } from "./data";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// IMAGES
const modern = "/images/modern5.jpg";

// VIDEOS
const beach_waves = "/videos/beach-waves.mp4";
const waves = "/videos/waves.mp4";
const network_hub = "/videos/network-hub.mp4";
const network = "/videos/network.mp4";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-zinc-700 to-zinc-900">
      {/* HEADER */}
      <div className="h-screen relative bg-gradient-to-b from-fuchsia-900 top-0 to-zinc-900">
        <Image
          priority
          src={modern}
          alt="Next.js logo"
          className="h-full w-full saturate-0 object-cover opacity-10 shadow-lg"
          fill
        />
      </div>

      <div className="absolute z-50 top-0 right-0 h-full p-2 lg:p-5 text-right">
        <a href={info.github_url} target="_blank">
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
          <div className="flex flex-col justify-center px-6 z-50 gap-5">
            <div>
              <a
                href="/#grid"
                className="text-white font-semibold text-8xl drop-shadow-md"
              >
                <div className="flex justify-center gap-2">
                  <div>
                    <FaCode className="text-[20rem] hover:scale-[97%] active:scale-[90%] transition-all duration-200 text-zinc-900 opacity-50 drop-shadow-lg" />
                  </div>
                </div>
              </a>
            </div>

            <div className="flex justify-center gap-2">
              <div>
                <a
                  href={hero.button1.url}
                  className="bg-zinc-900/25 text-zinc-300 hover:bg-zinc-900/50 rounded-md py-2 px-4 text-xl transition-all duration-300"
                >
                  {hero.button1.label}
                </a>
              </div>
              <div>
                <a
                  href={hero.button2.url}
                  className="bg-zinc-900/25  text-zinc-300 hover:bg-zinc-900/50 rounded-md py-2 px-4 text-xl transition-all duration-300"
                >
                  {hero.button2.label}
                </a>
              </div>
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
                url={cards.card1.url}
                title={cards.card1.title}
                description={cards.card1.description}
              />
              <Card url={cards.card2.url} video={network} />
              <Card
                url={cards.card3.url}
                title={cards.card3.title}
                description={cards.card3.description}
              />
              <CardWide url={cards.card4.url} video={network_hub} />
              <Card
                url={cards.card5.url}
                title={cards.card5.title}
                description={cards.card5.description}
              />
              <Card
                url={cards.card6.url}
                title={cards.card6.title}
                description={cards.card6.title}
              />
              <Card
                url={cards.card7.url}
                title={cards.card7.title}
                description={cards.card7.description}
              />
              <Card
                url={cards.card8.url}
                title={cards.card8.title}
                description={cards.card8.description}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}
