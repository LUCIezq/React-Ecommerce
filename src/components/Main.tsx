import type { MainProps } from "@/types/MainProps"

export default function Main({ children }: MainProps) {
    return (
        <main className="bg-[#09090b] pt-30 px-1 min-h-[calc(100dvh)] flex flex-col gap-7 w-full">
            {children}
        </main>
    )
}

