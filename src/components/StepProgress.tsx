import { StepsContext } from "@/contexts/StepsCart/StepsContext"
import { Check } from "lucide-react"
import { useContext } from "react"

interface Props {
    currentStep: number;
}

export const StepProgress = ({ currentStep }: Props) => {

    const { steps } = useContext(StepsContext);

    return (
        <div className="w-full max-w-6xl">
            <ul aria-label="Steps" className="items-center text-gray-600 font-medium md:flex">
                {steps.map((item, idx) => (
                    <li key={idx} aria-current={currentStep == idx + 1 ? "step" : false} className="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0">
                        <div className="flex flex-col items-center md:flex-row md:flex-1">
                            <hr className={`w-full border hidden md:block ${idx == 0 ? "border-none" : ""}`} />
                            <div className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${currentStep > idx + 1 ? "bg-white" : ""}`}>
                                <span className={`w-2.5 h-2.5 rounded-full bg-white ${currentStep != idx + 1 ? "hidden" : ""}`}></span>
                                {
                                    currentStep > idx + 1 ? (
                                        <Check color="black" strokeWidth={2} size={20} />
                                    ) : ""
                                }
                            </div>
                            <hr className={`h-12 border md:w-full md:h-auto ${idx + 1 == steps.length ? "border-none" : ""}`} />
                        </div>
                        <div className="h-8 flex justify-center items-center md:mt-3 md:h-auto">
                            <h3 className={`text-sm ${currentStep == idx + 1 ? "text-white" : ""}`}>
                                {item}
                            </h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}