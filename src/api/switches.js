import { ref, get, child, onValue } from "firebase/database";
import { database } from "../firebase";



export const getSwitches = async (userId) => {
    const userRef = ref(database)
    const switches = await get(userRef).catch(err=>{
        console.log(err)
    })
    console.log(switches.val())
}

export const getImage = async () => {
    const userRef = ref(database)
    const switches = await get(userRef).catch(err=>{
        console.log(err)
    })
   return switches.val().UIbvsbv234sbbvu_ESP32_CAM.Sensor.Img
}


export const updateStatus = async (switchNo) => {
    
}