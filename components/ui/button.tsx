import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-sora font-bold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-maroon to-maroon-light text-white shadow-lg shadow-maroon/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-maroon/30 active:translate-y-0 btn-shine",
        secondary:
          "border-2 border-border bg-card text-muted-foreground hover:border-maroon hover:text-maroon hover:bg-maroon/5 hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-maroon text-maroon bg-transparent hover:bg-maroon hover:text-white active:translate-y-0",
        link: "text-maroon underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
