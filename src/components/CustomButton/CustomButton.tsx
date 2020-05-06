import React, { ButtonHTMLAttributes } from 'react';
import './CustomButton.style.scss';

interface ICustomButton extends ButtonHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<ICustomButton> = ({ children, ...restProps }) => {
  return (
    <button className="custom-button" {...restProps}>
      {children}
    </button>
  );
};

export default CustomButton;
