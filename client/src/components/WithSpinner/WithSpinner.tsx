import React, { ComponentType, FC } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.style';

interface WithLoadingProps {
  isLoading: boolean;
}

const WithSpinner = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Spinner: FC<P & WithLoadingProps> = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };
  return Spinner;
};

export default WithSpinner;
