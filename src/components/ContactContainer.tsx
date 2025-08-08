import { ContactData } from "@/data/ContactData";
import ContactCard from "./ContactCard";
import { MotionHighlight } from "./animate-ui/effects/motion-highlight";

const ContactContainer = () => {
    return (

        <div className="grid grid-cols-2 gap-6">
            <MotionHighlight hover className="rounded-xl bg-[#0000001c] dark:bg-[#ffffff27]">
                {
                    ContactData.map((item) => {
                        return (
                            <ContactCard key={item.id} {...item} />
                        )
                    })
                }
            </MotionHighlight>
        </div>
    )
}

export default ContactContainer;
