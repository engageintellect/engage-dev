import { type PropsWithChildren } from "react";

type CardProps = {
  title?: string;
  description?: string;
  video?: string;
  url?: string;
};

export default function Card({
  title,
  description,
  video,
  url,
}: PropsWithChildren<CardProps>) {
  if (video) {
    return (
      // VIDEO CARD
      <a href={url} target="_blank">
        <div className=" bg-zinc-800 text-zinc-300 rounded-lg">
          <div className="h-64 relative overflow-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-25 shadow-lg absolute inset-0 rounded-lg saturate-0"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute top-0 p-5">
              <div className="text-[24px] font-semibold">{title}</div>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </a>
    );
  } else {
    return (
      // REGULAR CARD
      <a href={url} target="_blank">
        <div className="bg-zinc-800 hover:shadow-lg hover:bg-opacity-50 transition-all duration-300 text-zinc-300 p-5 rounded-lg h-64">
          <div className="text-2xl font-semibold">{title}</div>
          <div>{description}</div>
        </div>
      </a>
    );
  }
}
