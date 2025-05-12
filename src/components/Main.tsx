interface MainProps {
    children: React.ReactNode;
}


export default function Main({ children }: MainProps) {

    return (
        <main className="bg-black p-10 min-h-[calc(100dvh-76.5px)] flex gap-7 w-full flex-wrap">
            {children}
        </main>
    )
}

