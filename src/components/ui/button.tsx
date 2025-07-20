import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-warm transform hover:-translate-y-0.5 font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-secondary text-secondary bg-background hover:bg-secondary hover:text-secondary-foreground hover:shadow-feature transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-gradient-trust hover:shadow-feature transform hover:-translate-y-0.5 font-semibold",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-secondary underline-offset-4 hover:underline font-medium",
        hero: "bg-gradient-hero text-primary-foreground hover:shadow-feature transform hover:-translate-y-1 font-bold text-lg shadow-warm",
        track: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover:shadow-lg transform hover:-translate-y-0.5",
        service: "bg-background border-2 border-border text-foreground hover:border-secondary hover:shadow-card transform hover:-translate-y-0.5 hover:bg-muted",
        indian: "bg-gradient-trust text-secondary-foreground hover:shadow-warm transform hover:-translate-y-1 font-bold border-2 border-secondary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
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
