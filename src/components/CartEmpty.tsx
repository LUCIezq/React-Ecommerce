interface CartEmptyProp {
    text: string;
}

export default function CartEmpty({ text }: CartEmptyProp) {
    return (
        <h2 className="text-[15px] text-white text-center">
            {text}
        </h2>
    )
}