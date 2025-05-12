interface CartEmptyProp {
    text: string;
}

export default function CartEmpty({ text }: CartEmptyProp) {
    return (
        <div>
            <span>
                {text}
            </span>
            <img src="" alt="" />
        </div>
    )
}