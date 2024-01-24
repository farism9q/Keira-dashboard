import { createContext, useContext } from "react";
import { useCar } from "../features/cars/useCar";

const CarContext = createContext();

function CarProvider({ children }) {
  const { car, isLoading } = useCar();

  return (
    <CarContext.Provider
      value={{
        car,
        isLoading,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}
function useCarContext() {
  const context = useContext(CarContext);

  if (!context) throw new Error("Car context was used outside the Provider");

  return context;
}

export { CarProvider, useCarContext };
