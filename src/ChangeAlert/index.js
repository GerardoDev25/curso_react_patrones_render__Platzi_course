import React from 'react';
import { withStorageListener } from './withStorageListener';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return <p>Uvo cambios</p>;
  }
  return <></>
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
