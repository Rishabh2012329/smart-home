import React, { useEffect, useState } from "react";
import { getSensors } from "../../api/sensor";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebase";

export default function Sensor() {
  const [state, setState] = useState({});
  async function load() {
    onValue(
      ref(database, "UIbvsbv234sbbvu_ESP32_CAM/Sensor/DTH11"),
      (snapshot) => {
        setState(snapshot.val());
      }
    );
  }
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="fixed left-4 bottom-12 bg-blue-500 rounded-md p-4 text-white w-36 flex justify-around">
      <span>{state?.Temp}°C</span>
      <div className="flex row items-center justify-center w-8">
        {state?.Humid}
        <svg
          version="1.1"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          space="preserve"
        >
          <g>
            <path d="M767.2,445.3l0.7,0.4L500,10L232.1,445.7l0.7-0.5c-44.3,57.2-70.9,128.8-70.9,206.7C161.9,838.6,313.3,990,500,990c186.7,0,338.1-151.4,338.1-338.1C838.1,574,811.5,502.4,767.2,445.3z M500,910.7c-142.9,0-258.8-115.9-258.8-258.8c0-71,28.6-135.4,75-182.1h-0.1l163.2-251.9l20.7-33.5l36.3,64.1l137.2,211.8c52.3,47.4,85.4,115.6,85.4,191.7C758.8,794.8,643,910.7,500,910.7z" />
            <path d="M458.3,623.9c11-12.3,16.5-28.4,16.5-48.1c0-19.9-5-35.4-15-46.5c-10-11.1-23.9-16.7-41.7-16.7c-18.6,0-33.3,6-44.3,18.1c-11,12.1-16.4,28.4-16.4,48.9c0,18.9,5.2,34.1,15.6,45.5c10.4,11.5,24.2,17.2,41.5,17.2C432.7,642.3,447.3,636.2,458.3,623.9z M391.4,610.2c-6-7.6-9.1-18.3-9.1-32.2c0-14.1,3.1-25.2,9.3-33.1c6.2-7.9,14.7-11.9,25.4-11.9c10.5,0,18.6,3.8,24.4,11.4c5.8,7.6,8.7,18.4,8.7,32.3c0,14.3-2.9,25.3-8.8,33.1c-5.9,7.8-14.2,11.7-25,11.7C405.7,621.6,397.5,617.8,391.4,610.2z" />
            <path d="M568.3,640.9c-18.5,0-33.2,6.1-44.2,18.4c-11,12.3-16.4,28.6-16.4,49.2c0,18.6,5.2,33.7,15.5,45.3c10.3,11.6,24.2,17.4,41.6,17.4c17.9,0,32.5-6.1,43.6-18.4c11.1-12.3,16.7-28.2,16.7-47.9c0-20.3-5-36-15.1-47.2C599.9,646.5,586,640.9,568.3,640.9z M591.4,738.4c-5.9,7.9-14.2,11.8-25,11.8c-10.5,0-18.7-3.8-24.8-11.4c-6-7.6-9.1-18.2-9.1-31.8c0-14.1,3-25.2,9.1-33.1c6-7.9,14.6-11.9,25.6-11.9c10.3,0,18.3,3.7,24.2,11.2c5.9,7.5,8.8,18.2,8.8,32.2C600.2,719.5,597.3,730.5,591.4,738.4z" />
            <path d="M557.2,516.3L395.9,768.9H423l161.2-252.6H557.2z" />
          </g>
        </svg>
      </div>
    </div>
  );
}
