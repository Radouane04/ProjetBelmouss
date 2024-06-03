import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "block w-full rounded-md shadow-sm focus:ring focus:ring-primary focus:ring-opacity-50 transition",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:border-primary",
        error: "border-red-500 focus:border-red-500",
        success: "border-green-500 focus:border-green-500",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Input = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input, inputVariants };
