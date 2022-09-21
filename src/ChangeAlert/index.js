import { withStorageListener } from './withStorageListener';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show)
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={() => toggleShow()}>Refrescar la info</button>
      </div>
    );

  return null;
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
