import React, {useState, useEffect} from 'react'
import { ref, get, child, onValue } from "firebase/database";
import { database } from '../../firebase';


export default function Esp() {
  const [image, setImage] = useState("")
 
  const loadImage = async () => {
    const userRef = ref(database)
    onValue(userRef,(snapshot)=>{
      const data = snapshot.val();
      let base64 = data.UIbvsbv234sbbvu_ESP32_CAM.Sensor.Img
      setImage(base64)
    })
    
  }
  
  useEffect(()=>{
    loadImage()
  },[])
  
  return (
    <div className='flex items-center justify-center w-100' style={{height:"100vh"}}>
        <img src={'data:image/png;base64,'+image}/>
    </div>
  )
}
