import { Skeleton } from "@/components/ui/skeleton"

interface propsSkeleton {
    grid: number;
}

export function SkeletonCard({ grid }: propsSkeleton) {
    return (
        Array.from({ length: grid }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="min-h-[446px]  rounded-xl bg-[#ffffff27]" />
                {/* <div className="space-y-2">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-[100px] bg-[#ffffff27]" />
                        <Skeleton className="h-5 w-[400px] bg-[#ffffff27]" />
                    </div>
                    <Skeleton className="h-7 w-[80px] bg-[#ffffff27] mt-7" />
                </div> */}
            </div>
        ))
    )
}
