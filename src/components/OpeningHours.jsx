

import Image from "next/image"
import Seperator from "./Seperator"
import Badge from "./Badge"

const OpeningHours = () => {
  return (
    <section className=" flex bg-primary h-[60vh] xl:h-[90vh]">
      <div className="relative xl:flex flex-1 justify-center
       items-center">
        <div className=" w-full h-full absolute top-0 z-40 bg-black/60"></div>
        <Image src='/assets/opening/img.png'
        fill
        alt=""
        className="object-cover"
        />
        <Badge containerStyles='w-[320px] h-[320px] absolute z-40'/>
      </div>
      <div className=" flex-1 bg-opening_hours bg-cover
       bg-no-repeat flex flex-col justify-center items-center relative">
          <div className=" w-full h-full absolute top-0 z-19 bg-black/[0.85]"></div>
          {/* text  */}

          <div className=" z-20 flex flex-col items-center justify-center">
            <h2 className="h2 text-white mb-4">Opening Hours</h2>
          <Seperator bg="accent"/>
          <div className=" mt-12 relative w-[300px] h-[220px]
           xl:w-[470px] xl:h-[280px]">
            <Image src='/assets/opening/program-badge.svg'
            fill
            alt=""
            className=" object-contain"
            />
          </div>
          </div>
      </div>
     
    </section>
  )
}

export default OpeningHours
