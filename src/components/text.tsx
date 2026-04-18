import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export const textVariants = cva("font-sans text-gray-200", {
    variants: {
        variant: {
            "title-lg-bold": "text-3xl leading-6 font-bold",
            "title-md-bold": "text-base leading-6 font-bold",
            "Title-sm-bold": "text-sm leading-5 font-bold",
            "Text-md": "text-base leading-6 font-normal",
            "Text-sm": "text-sm leading-5 font-normal"
        }
    },
    defaultVariants: {
       variant: "Text-md" 
    }
})

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export default function Text({
    as = "span", 
    variant,
    className, 
    children, 
    ...props
}: TextProps) {
    return React.createElement(
        as,
        {
        className: textVariants({variant, className}),
        ...props
        },
        children        
    );
}