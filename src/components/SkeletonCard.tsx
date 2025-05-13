import { Skeleton } from "@/components/ui/skeleton"

interface propsSkeleton {
    grid: number;
}

export function SkeletonCard({ grid }: propsSkeleton) {
    return (
        Array.from({ length: grid }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="min-h-[446px]  rounded-xl bg-[#ffffff27]" />
            </div>
        ))
    )
}
