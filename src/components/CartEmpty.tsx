interface CartEmptyProp {
    text: string;
}

export default function CartEmpty({ text }: CartEmptyProp) {
    return (
        <h2 className="text-[15px] h-full text-white">
            {text}
        </h2>
    )
}