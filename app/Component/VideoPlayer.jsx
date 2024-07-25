import Image from "next/image";
import Thumbnail from "../../public/VideoPlaceHolder.jpeg";

function VideoPlayer({ videoSrc = null }) {
  return (
    <div>
      {videoSrc ? (
        <video width="877" height="500" controls preload="none">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="relative">
          <Image
            src={Thumbnail}
            alt="Fallback image"
            width={877}
            height={500}
            quality={75}
            priority
            className=" relative rounded-2xl"
            layout="responsive"
          />
          <figure className="absolute text-gray-600 bg-slate-200 rounded-full p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </figure>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
