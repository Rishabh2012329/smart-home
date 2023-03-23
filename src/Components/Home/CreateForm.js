import React, { useState } from "react";
import Modal from "../Modal";
const fixedInputClass="rounded-md mt-2 mb-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"


export default function CreateForm({isOpen, handleClose}) {
  const [formOpen, setForm] = useState("switch");
  const [state, setState] = useState({
    "name":"",
    "logoName":"",
    "nodeMCU":""
  })

  const handleChange = (e) => {
    setState({...state, [e.target.name]:e.target.value})
  }

  const onSubmitSwitch = (e) => {
    e.stopPropagation()
    
  }

  return (
    <Modal isOpen={isOpen}>
      {formOpen !== "" ? (
        formOpen === "switch" ? (
          <>
           <span className="cursor-pointer" onClick={()=> setForm("")}>back</span>
            <form onSubmit={onSubmitSwitch}>
              <select name="nodeMCU" value={state.nodeMCU} onChange={handleChange} className={fixedInputClass} required>
                <option>Please Select NodeMCU</option>
                <option value={"N1"}>N1</option>
                <option value={"N2"}>N2</option>
              </select>

            
              <input name="name" placeholder="Name" value={state.name} onChange={handleChange} className={fixedInputClass} required />
              
              <select name="logoName" value={state.logoName} onChange={handleChange} className={fixedInputClass} required>
                <option>Please Select Logo</option>
                <option value={"N1"}>N1</option>
                <option value={"N2"}>N2</option>
              </select>

              <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
            </form>
          </>
        ) : (
          <>
            <span className="cursor-pointer" onClick={()=> setForm("")}>back</span>
            <form onSubmit={onSubmitSwitch}>
              
            
              <input name="name" placeholder="Name" value={state.name} onChange={handleChange} className={fixedInputClass} required />
              <input name="serialNo" placeholder="SerialNo" value={state.serialNo} onChange={handleChange} className={fixedInputClass} required />
              <input name="switchNo" type={"number"} placeholder="Number of Switches" value={state.switchNo} onChange={handleChange} className={fixedInputClass} required />
              

              <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
            </form>
          </>
        )
      ) : (
        <div className="flex flex-col bg-white relative">
          <div onClick={handleClose} className="absolute -right-3 -top-5 flex justify-end text-xl cursor-pointer">
            x
          </div>
          <div onClick={()=>setForm("switch")} className="p-3 hover:bg-gray-200 rounded-md">
            Add Smart Switch
          </div>
          <div onClick={()=>setForm("mcu")} className="p-3 hover:bg-gray-200 rounded-md">Add NodeMCU</div>
        </div>
      )}
    </Modal>
  );
}
