import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";
interface ContactData {
    id: number,
    title: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
    description: string,
    link: string
}

const ContactCard = ({ title, icon: Icon, description, link }: ContactData) => {
    return (

        <div className="border-1 border-[#3533333b] dark:border-[#e6e6e63b] p-3 rounded-2xl shadow-2xl shadow-[#00000019] " >
            <div className=" flex flex-col gap-4">

                <Icon />

                <div>
                    <p className="text-[20px] font-bold">
                        {title}
                    </p>
                    <span className="text-[14px] text-[#0000008c] dark:text-[#ffffff6e]">
                        {description}
                    </span>
                </div>

                <span className="text-blue-500 text-[14px]">
                    {link}
                </span>
            </div>
        </div>
    )
}

export default ContactCard;