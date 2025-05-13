interface CartEmptyProp {
    text: string;
}

export default function CartEmpty({ text }: CartEmptyProp) {
    return (
        <div className="flex justify-center items-center">
            <span className="text-[15px]">
                {text}
            </span>
        </div>
    )
}