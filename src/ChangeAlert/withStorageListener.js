import { useState } from 'react';

export const withStorageListener = (WrapperComponent) => {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    return( 
    <WrapperComponent 
      show={storageChange} 
      toggleShow={setStorageChange}
    />
    );
  };
};
