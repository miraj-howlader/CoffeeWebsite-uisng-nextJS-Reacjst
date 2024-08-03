import React from 'react'
import { motion } from 'framer-motion'
import NavList from './NavList'


const hightAnimation = {
    initial:{
        height:0,
    },
    open:{
        height:'85vh',
        transition:{duration:1,ease:[0.75,0,0.23,1]}
    },
    close:{
        height:0,
        transition:{duration:1,ease:[0.75,0,0.23,1]}
    }
}
const Nav = () => {
  return (
    <motion.nav
    variants={hightAnimation}
    initial='initial'
    animate='open'
    exit='close'
    className=' bg-black overflow-hidden absolute z-[50] -top-full
    w-full'
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavList />
      </div>
     
    </motion.nav>
  )
}

export default Nav
