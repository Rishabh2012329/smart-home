import React, { createContext, useReducer, useEffect } from 'react';
import { getSwitches, updateSwitch } from '../api/switches';
import { onValue, ref } from 'firebase/database';
import { database } from '../firebase';

function convertToArray(obj){
  //console.log(obj)
  let arr = []
  for(let x in obj){
    
    if(x.startsWith("sw1")){
      arr.push({...obj[x], key:x})
    }
  }
  return arr
}

// Define the initial state of the switches
const initialState = [
  // { status: "ON", logoName: "logo1.png", name: "Switch 1", mcuName: "mcu1" },

];

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      // Remove the switch with the given name
      return state.filter(sw => sw.name !== action.payload.name);
    case "CREATE":
      state.push(action.payload);
      localStorage.setItem("switches", JSON.stringify(state))
      return state
    case "UPDATE":
      updateSwitch("status", action.payload.status)
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

  const load = async ()=> {
    const dbRef = ref(database,'UIbvsbv234sbbvu_ESP32_CAM/')
    onValue(dbRef,(snapshot)=>{
      const savedSwitches = convertToArray(snapshot.val())
     
      if (savedSwitches) {
        dispatch({ type: "LOAD", payload: savedSwitches });
      }

    })
    
  }

  useEffect(() => {
    load()
  }, []); 

  return (
    <SwitchesContext.Provider value={{ switches, dispatch }}>
      {children}
    </SwitchesContext.Provider>
  );
};