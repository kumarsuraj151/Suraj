import React from 'react'
import {motion} from 'framer-motion'
import { SiPytorch } from "react-icons/si";
import { InView } from 'react-intersection-observer';
const boxVariants = {
    initial: { y: "2em" },
    animate: {
      y: 0,
      transition: { staggerChildren: 0.005, ease: "easeInOut" },
    },
  }

export default function skill() {
  return (
    <InView threshold={.35}>
        {({ref,inView})=>(
                <motion.div
                ref={ref}
                variants={boxVariants} initial="initial" animate={inView? "animate":""}
                
                        className="my-12 box-border p-12 shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)]"
                        id="skills"
                      >
                        <h1 className="text-3xl mb-5">Professional Skills</h1>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        <motion.div variants={boxVariants} className='inline-flex border-box mx-1 mb-1 bg-slate-300 p-1 rounded'><SiPytorch size={20}/><p className='ml-2'>Pytorch</p></motion.div>
                        
                      </motion.div>
        )}

          </InView>
  )
}
