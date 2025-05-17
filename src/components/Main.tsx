import type { MainProps } from "@/types/MainProps"

export default function Main({ children }: MainProps) {
    return (
        <main className="bg-[#09090b] pt-25 px-5 min-h-[calc(100dvh)] flex flex-col gap-7 w-full lg:flex-row">
            {children}
        </main>
    )
}

