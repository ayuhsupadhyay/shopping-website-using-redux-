import React from 'react';
import { PulseLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PulseLoader color="#36d7b7" size={15} />
    </div>
  );
};

export default Spinner;
