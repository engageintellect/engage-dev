import { type PropsWithChildren } from "react";

type CardWideProps = {
  title: string;
  description: string;
  video?: string;
};

export default function CardWide({
  title,
  description,
  video,
}: PropsWithChildren<CardWideProps>) {
  if (video) {
    return (
      // VIDEO CARD
      <div className="lg:col-span-2 bg-zinc-800 text-zinc-300 rounded-lg">
        <div className="h-64 relative overflow-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-20 shadow-lg absolute inset-0 rounded-lg saturate-150"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute top-0 p-5">
            <div className="text-[24px] font-semibold">{title}</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      // REGULAR CARD
      <div className="lg:col-span-2 bg-zinc-800 text-zinc-300 p-5 rounded-lg h-64">
        <div className="text-[24px] font-semibold">{title}</div>
        <div>{description}</div>
      </div>
    );
  }
}
