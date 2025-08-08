import { ContactData } from "@/data/ContactData";
import ContactCard from "./ContactCard";

const ContactContainer = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            {
                ContactData.map((item) => {
                    return <ContactCard key={item.id} {...item} />
                })
            }
        </div>
    )
}

export default ContactContainer;
