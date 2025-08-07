import type { MainProps } from "@/types/MainProps"

export default function Main({ children }: MainProps) {
    return (
        <main className="bg-[#09090b] pt-25 px-5 min-h-[calc(100dvh)] w-full flex flex-col gap-7 h-full bg-[radial-gradient(#ffffffde_1px,#fff_1px)] dark:bg-[radial-gradient(#ffffff40_1px,#000_1px)] bg-[size:20px_20px]">
            {children}
        </main>
    )
}