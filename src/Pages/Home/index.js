import React, { useContext, useState, useRef, useEffect } from "react";
import { Navbar } from "../../Components/Navbar";
import Modal from "../../Components/Modal";
import CreateForm from "../../Components/Home/CreateForm";
import SmartSwitch from "../../Components/SmartSwitch";
import { SwitchesContext } from "../../context/switchContext";
import Sensor from "../../Components/Sensor";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

let svgIcons = {
  "light":{
    "microphone":<svg fill="#ffffff" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>microphone</title>
    <path d="M4 20q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408q0 3.328-2.336 5.664t-5.664 2.336-5.664-2.336-2.336-5.664q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408zM10.016 20q0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h2.624q-0.608-1.76-2.144-2.88t-3.488-1.12q-1.92 0-3.456 1.12t-2.176 2.88h2.624q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984z"></path>
    </svg>
  },
  "dark":{
    "microphone":<svg fill="gray" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>microphone</title>
    <path d="M4 20q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408q0 3.328-2.336 5.664t-5.664 2.336-5.664-2.336-2.336-5.664q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408zM10.016 20q0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h3.008v-1.984h-3.008q-0.416 0-0.704-0.288t-0.288-0.704 0.288-0.704 0.704-0.32h2.624q-0.608-1.76-2.144-2.88t-3.488-1.12q-1.92 0-3.456 1.12t-2.176 2.88h2.624q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984h2.976q0.416 0 0.704 0.32t0.32 0.704-0.32 0.704-0.704 0.288h-2.976v1.984z"></path>
    </svg>
  }
}

const Home = () => {
  const commands = [
    {
      command: "turn *",
      callback: (sw) => {
        
        if(sw.toLowerCase().trim().startsWith("on")||sw.toLowerCase().trim().startsWith("off")){
          dispatch({
            type: "UPDATE",
            payload: {
              name: switches[0]?.name,
              status: sw.toLowerCase().trim().startsWith("on") ? 1 : 0,
            },
          });
        }else{
          console.log("Say turn on")
        }
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isOpen, setOpen] = useState(false);
  const { switches, dispatch } = useContext(SwitchesContext);
  const [ isListening ,setIsListening] = useState(false)
  const handleSwitchClick = (name, prevStatus) => {
    dispatch({
      type: "UPDATE",
      payload: {
        name: name,
        status: prevStatus ? 0 : 1,
      },
    });
  };

  const handleListing = () => {
    localStorage.setItem("voice","on")
    SpeechRecognition.startListening({
      continuous: true
    });
    setIsListening(true);
  };

  const stopHandle = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    localStorage.setItem("voice","off")
    stopHandle();
    resetTranscript();
  };

  useEffect(()=>{
    if(localStorage.getItem('voice')=="on"){
      handleListing()
      setIsListening(true)
    }
  },[])

 
  return (
    <div className="flex flex-col">
      {/* <Navbar
          handleAdd={()=>setOpen(!isOpen)}
        /> */}
      <CreateForm isOpen={isOpen} handleClose={() => setOpen(!isOpen)} />
      <div className="flex flex-row p-4">
        {switches.map((obj) => (
          <SmartSwitch
            logoName={"fan"}
            name={obj.name}
            mcuName={"N1"}
            status={obj.status}
            handleClick={handleSwitchClick}
          />
        ))}
      </div>
      <Sensor />
      <div className="fixed bottom-4 right-4 flex flex-col justify-center items-center">
        <div
          className={`w-12 h-12 ${isListening?"bg-blue-500":"bg-gray-200"} rounded-full p-2 shadow-xl flex flex-col flex justify-center items-center `}
          onClick={()=>{
            if(isListening)
              handleReset()
            else
              handleListing()
          }}
        >
          {svgIcons[isListening?'light':'dark']['microphone']}
        </div>
        <p className={`${isListening?"visible":"invisible"}`}>Try Saying <b>"Turn on"</b> or <b>"Turn off"!</b></p>
      </div>
    </div>
  );
};

export default Home;
