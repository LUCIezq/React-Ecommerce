interface TitleProps {
    text: string
}

export default function Title({ text }: TitleProps) {
    return <h2 className='text-[#ffffff] text-[35px] font-bold w-full self-start'>{text}</h2>
}