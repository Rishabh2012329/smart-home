import React, { useContext, useState } from 'react';
import { Navbar } from '../../Components/Navbar';
import Modal from '../../Components/Modal';
import CreateForm from '../../Components/Home/CreateForm';
import SmartSwitch from '../../Components/SmartSwitch';
import { SwitchesContext } from '../../context/switchContext';

const Home = () => {
  const [isOpen, setOpen] = useState(false)
   const {switches, dispatch} = useContext(SwitchesContext)

   const handleSwitchClick = (name, prevStatus) => {
    
    dispatch({
      type:"UPDATE",
      payload:{
        name: name,
        status: prevStatus=="ON"?"OFF":"ON"
      }
    })
   }
   
  return (
    <div className='flex flex-col'>
        <Navbar
          handleAdd={()=>setOpen(!isOpen)}
        />
        <CreateForm
          isOpen={isOpen}
          handleClose={()=>setOpen(!isOpen)}
        />
      <div className='flex flex-row p-4'>
       { switches.map((obj)=><SmartSwitch 
          logoName={"fan"}
          name={obj.name}
          mcuName={"N1"}
          status={obj.status}
          handleClick={handleSwitchClick}
        />)}
      </div>
    </div>
  );
};

export default Home;