/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { cva, type VariantProps } from 'class-variance-authority';
import React, { ComponentProps } from 'react';

const buttonStyles = cva('text-sm lg:text-base font-medium', {
  variants: {
    variant: {
      primary: 'bg-marine-blue text-alabaster h-10 w-24 rounded',
      accent: 'bg-purplish-blue text-alabaster h-10 w-24 rounded',
      text: 'text-cool-gray h-10',
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
    <button className={buttonStyles({ variant })} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
