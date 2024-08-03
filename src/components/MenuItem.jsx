import Image from 'next/image'
import React from 'react'

const MenuItem = ({name,price,description,imgSrc}) => {
  return (
    <div className=' flex  items-center gap-4'>
      <div className='relative w-[60px] h-[60px] xl:w-[72px]
       xl:h-[72px] rounded-full'>
        <Image src={imgSrc} fill alt='' className=' object-cover' priority/>
      </div>
      {/* text  */}
      <div className=' flex flex-col flex-1  gap-2'>
        <div className=' flex  justify-between gap-4 items-baseline'>
            {/* name  */}
            <p className=' uppercase font-primary font-semibold
             text-[22px] text-primary'>{name}</p>
            {/* border  */}
            <div className=' flex-1 border-b border-dashed border-primary'></div>
            {/* price  */}
            <p className='leading-none font-primary font-semibold
             text-[30px] text-primary'>{price.toFixed(2)}</p>
        </div>
        {/* description  */}
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MenuItem
