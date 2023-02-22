import { cva, type VariantProps } from 'class-variance-authority';
import React, { ComponentProps } from 'react';

const buttonStyles = cva('text-sm lg:text-base font-medium', {
  variants: {
    variant: {
      primary:
        'bg-marine-blue text-alabaster h-10 w-24 rounded hover:brightness-150',
      accent:
        'bg-purplish-blue text-alabaster h-10 w-24 rounded hover:brightness-125',
      text: 'text-cool-gray h-10 hover:text-marine-blue',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = ComponentProps<'button'>;

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

function Button({
  variant,
  type = 'button',
  children,
  ...props
}: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={buttonStyles({ variant })} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
