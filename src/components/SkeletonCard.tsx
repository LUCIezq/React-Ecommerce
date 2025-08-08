import { Skeleton } from "@/components/ui/skeleton"

interface propsSkeleton {
    grid: number;
}

export function SkeletonCard({ grid }: propsSkeleton) {
    return (
        Array.from({ length: grid }).map((_, index) => (
            <div key={index} className="flex w-full flex-col space-y-3">
                <Skeleton className="min-h-[200px] rounded-xl bg-[#24222234] dark:bg-[#ffffff4b]" />
            </div>
        ))
    )
}
