interface TitleProps {
    text: string
}

export default function Title({ text }: TitleProps) {
    return <h2 className='text-[#000000d2] dark:text-white text-[40px] sm:text-6xl font-bold w-fit self-start '>{text}</h2>
}