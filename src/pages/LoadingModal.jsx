import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const LoadingModal = () => (
  <div className="loading-modal">
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="blue"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
    />
  </div>
);

export default LoadingModal;
