interface TitleProps {
    text: string
}

export default function Title({ text }: TitleProps) {
    return <h2 className='text-[#ffffff] px-3 bg-[#88868613] text-[35px] font-bold w-fit self-start lg:text-[30px]'>{text}</h2>
}