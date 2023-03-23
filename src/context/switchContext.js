import React, { createContext, useReducer, useEffect } from 'react';

// Define the initial state of the switches
const initialState = [
  { status: "ON", logoName: "logo1.png", name: "Switch 1", mcuName: "mcu1" },
  { status: "OFF", logoName: "logo2.png", name: "Switch 2", mcuName: "mcu2" },
  { status: "ON", logoName: "logo3.png", name: "Switch 3", mcuName: "mcu3" },
];

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      // Remove the switch with the given name
      return state.filter(sw => sw.name !== action.payload.name);
    
    case "UPDATE":
      let updatedState = state.map(sw => {
        if (sw.name === action.payload.name) {
          return { ...sw, status: action.payload.status };
        } else {
          return sw;
        }
      });
      localStorage.setItem("switches", JSON.stringify(updatedState))
      return updatedState
      case "LOAD":
       
        return action.payload;

    default:
      return state;
  }
};

// Create the context object
export const SwitchesContext = createContext();

// Create the provider component
export const SwitchesProvider = ({ children }) => {
  const [switches, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedSwitches = localStorage.getItem("switches");
    if (savedSwitches) {
      dispatch({ type: "LOAD", payload: JSON.parse(savedSwitches) });
    }
  }, []); 

  return (
    <SwitchesContext.Provider value={{ switches, dispatch }}>
      {children}
    </SwitchesContext.Provider>
  );
};