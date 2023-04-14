import { ref, get, child, onValue, set } from "firebase/database";
import { database } from "../firebase";



export const getSwitches = async (userId) => {
    const userRef = ref(database)
    const switches = await get(child(userRef,'UIbvsbv234sbbvu_ESP32_CAM/')).catch(err=>{
        //console.log(err)
    })
    //console.log(switches.val())
   
    return switches.val()
}

export const updateSwitch = async (key,value) => {
    //console.log(key, value)
    const userRef = ref(database)
    await set(child(userRef,'UIbvsbv234sbbvu_ESP32_CAM/sw1'),{
        name: "Switch 1",
        logoType: "fan",
        "status": value
    }).catch(err=>{
        //console.log(err)
    })
   

}

export const getImage = async () => {
    const userRef = ref(database)
    const switches = await get(userRef).catch(err=>{
        //console.log(err)
    })
   return switches.val().UIbvsbv234sbbvu_ESP32_CAM.Sensor.Img
}


export const updateStatus = async (switchNo) => {
    
}