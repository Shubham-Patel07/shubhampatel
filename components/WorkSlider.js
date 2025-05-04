const workSlides = {
  slides: [
    {
      images: [
        {
          title: "WrongSecrets",
          path: "/OWASP thumbnail.png",
          forks: 120,
          link: "https://wrongsecrets.herokuapp.com/"
        },
        {
          title: "Swiggy Clone",
          path: "/Swiggy clone.png",
          forks: 10,
          link: "https://shubham-patel-frontend-developer.vercel.app/"
        },
      ],
    },
  ],
};

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Icons
import { BsArrowRight } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";

// Image
import Image from "next/image";

// Swiper modules
import { Pagination } from "swiper";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full sm:h-[480px]"
    >
      {workSlides.slides.map((slide, Index) => {
        return (
          <SwiperSlide key={Index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
              {slide.images.map((image, imageIndex) => {
                return (
                  <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  key={imageIndex}
                >
                  <div
                    className="rounded-lg overflow-hidden group"
                    key={imageIndex}
                  >
                    {/* image wrapper */}
                    <div className="relative flex items-center justify-center">
                      {/* image */}
                      <Image
                        src={image.path}
                        alt={image.title}
                        width={500}
                        height={500}
                        className="object-cover aspect-video"
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#000000] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      {/* hover title overlay */}
                      <div className="absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white px-2">
                          {/* title part 1 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100">
                            LIVE
                          </div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* title + forks row */}
                    <div className="mt-2 px-1">
                      <div className="flex items-center justify-between">
                        {/* project title */}
                        <div className="text-sm font-semibold text-white truncate max-w-[75%]">
                          {image.title}
                        </div>
                        {/* forks icon + count */}
                        <div className="flex items-center gap-x-1 text-xs text-gray-400">
                          <VscRepoForked className="text-base" />
                          <span>{image.forks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
