import { useState } from 'react';

export const withStorageListener = (WrapperComponent) => {
  return function WrapperComponentWithStorageListener({ sincronizeTodos }) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      setStorageChange(false);
      sincronizeTodos();
    };

    return <WrapperComponent show={storageChange} toggleShow={toggleShow} />;
  };
};
