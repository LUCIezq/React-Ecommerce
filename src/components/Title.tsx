import { motion } from "motion/react"

interface TitleProps {
    text: string
}

export default function Title({ text }: TitleProps) {
    return <motion.h2 initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring" }} className='text-[#000000d2] dark:text-white text-[40px] sm:text-6xl font-bold w-fit self-start '>{text}</motion.h2>
}