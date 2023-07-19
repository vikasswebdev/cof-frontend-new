import ButtonLink from "@/components/atoms/ButtonLink";
import React from "react";

const MobileAppSection: React.FC = () => {
  return (
    <section className="p-4 py-20 bg-indigo-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h2 className="md:text-6xl text-5xl md:w-3/4 font-bold">
              Innovate your way to success with your next app
            </h2>
            <p className="md:w-1/2 mt-8 text-gray-900">
              From social media to online shopping, mobile apps have
              revolutionized the way we interact and conduct business. As such,
              developing innovative apps has become a lucrative and highly
              sought-after skill.
            </p>
            <ButtonLink title="Let's Build" to="/contactus" />
          </div>

          <div className="relative overflow-hidden mt-10 md:mt-0">
            <video
              playsInline={true}
              width="298"
              height="630"
              autoPlay={true}
              loop={true}
              muted={true}
              className="absolute top-7 left-1 rounded-3xl"
            >
              <source src="./demo-video.mp4" type="video/mp4" />
              <source src="./demo-video.ogg" type="video/ogg" />
            </video>
            <svg
              width="308"
              height="663"
              viewBox="0 0 308 663"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.7566 0C20.0382 0 0 20.0382 0 44.7566V618.243C0 642.962 20.0382 663 44.7566 663H263.243C287.962 663 308 642.962 308 618.243V44.7566C308 20.0382 287.962 0 263.243 0H44.7566ZM27 29C15.9543 29 7 37.9543 7 49V614C7 625.046 15.9543 634 27 634H281C292.046 634 301 625.046 301 614V49C301 37.9543 292.046 29 281 29H27Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60.5025 19C62.4369 19 64.005 17.433 64.005 15.5C64.005 13.567 62.4369 12 60.5025 12C58.5681 12 57 13.567 57 15.5C57 17.433 58.5681 19 60.5025 19Z"
                  fill="#A7A7A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M77.6878 20C80.1748 20 82.191 17.9853 82.191 15.5C82.191 13.0147 80.1748 11 77.6878 11C75.2007 11 73.1846 13.0147 73.1846 15.5C73.1846 17.9853 75.2007 20 77.6878 20Z"
                  fill="#A7A7A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M95.9162 18C97.2976 18 98.4174 16.8807 98.4174 15.5C98.4174 14.1193 97.2976 13 95.9162 13C94.5349 13 93.415 14.1193 93.415 15.5C93.415 16.8807 94.5349 18 95.9162 18Z"
                  fill="#A7A7A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M106.436 18C107.817 18 108.937 16.8807 108.937 15.5C108.937 14.1193 107.817 13 106.436 13C105.054 13 103.935 14.1193 103.935 15.5C103.935 16.8807 105.054 18 106.436 18Z"
                  fill="#A7A7A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M223.347 20C225.834 20 227.85 17.9853 227.85 15.5C227.85 13.0147 225.834 11 223.347 11C220.86 11 218.844 13.0147 218.844 15.5C218.844 17.9853 220.86 20 223.347 20Z"
                  fill="#A7A7A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M246.623 19C248.557 19 250.125 17.433 250.125 15.5C250.125 13.567 248.557 12 246.623 12C244.688 12 243.12 13.567 243.12 15.5C243.12 17.433 244.688 19 246.623 19Z"
                  fill="#A7A7A7"
                />
                <path
                  d="M171 13H135C133.895 13 133 13.8954 133 15C133 16.1046 133.895 17 135 17H171C172.105 17 173 16.1046 173 15C173 13.8954 172.105 13 171 13Z"
                  fill="#A7A6A5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="308" height="663" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
