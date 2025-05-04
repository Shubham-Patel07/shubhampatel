import Image from "next/image"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[110px] max-h-[116px] sm:max-w-[125px] sm:max-h-[132px] md:max-w-[141px] md:max-h-[148px]"
        />
        <HiArrowRight className="absolute text-3xl md:text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
}

export default ProjectsBtn