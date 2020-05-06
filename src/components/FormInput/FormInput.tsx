import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import './FormInput.style.scss';

interface IFormInputProps extends InputHTMLAttributes<HTMLElement> {
  label?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<IFormInputProps> = ({
  label,
  handleChange,
  ...restProps
}) => {
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  };

  const value = fixControlledValue(restProps.value) as string;

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...restProps} />
      {!!label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
