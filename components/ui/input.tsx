import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends Omit<React.ComponentProps<"input">, "prefix"> {
    prefix?: React.ReactNode; // Propriété personnalisée pour un préfixe (icône ou autre)
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, prefix, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex items-center w-full rounded-[12px] border border-input bg-transparent px-3 py-2 shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring focus-within:border-primary",
                    className
                )}
            >
                {prefix && (
                    <span className="mr-2 text-muted-foreground">
            {prefix}
          </span>
                )}
                <input
                    type={type}
                    className="flex-1 bg-transparent border-none outline-none placeholder:text-grey focus:ring-0"
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
