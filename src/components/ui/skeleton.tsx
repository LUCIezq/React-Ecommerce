import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent h-fit animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
