/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

export const DataAppointmentContext = createContext();

export const useDataAppoinment = () => {
  return useContext(DataAppointmentContext);
};

export const DataAppoinmentProvider = ({ children }) => {
  const [dataAppoinment, setDataAppoinment] = useState([]);

  const initialValue = useMemo(() => {
    return {
      dataAppoinment,
      setDataAppoinment,
    };
  }, [dataAppoinment]);
  return (
    <DataAppointmentContext.Provider value={initialValue}>
      {children}
    </DataAppointmentContext.Provider>
  );
};
