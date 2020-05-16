import React, { ButtonHTMLAttributes } from 'react';
import './CustomButton.style.scss';

interface ICustomButton extends ButtonHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  inverted?: boolean;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  inverted,
  ...restProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
