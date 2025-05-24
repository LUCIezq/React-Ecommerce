interface TitleProps {
    text: string
}

export default function Title({ text }: TitleProps) {
    return <h2 className='text-[#ffffff] text-6xl font-bold w-fit self-start '>{text}</h2>
}