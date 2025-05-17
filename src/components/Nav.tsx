import NavBar from "./NavBar";

type Props = {
    hidden: boolean
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ hidden, setHidden }: Props) {
    return (
        <nav className="text-white flex w-fit gap-15 ">

            {
                !hidden && <div className="md:hidden">
                    <NavBar setHidden={setHidden} />
                </div>
            }

            <div className="hidden md:block">
                <NavBar />
            </div>

        </nav >
    )
}

