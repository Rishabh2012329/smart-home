import { ref, get, child, onValue, set } from "firebase/database";
import { database } from "../firebase";



export const getSensors = async (userId) => {
    const userRef = ref(database)
    const sensors = await get(child(userRef,'UIbvsbv234sbbvu_ESP32_CAM/Sensor/DTH11')).catch(err=>{
        console.log(err)
    })
   
    return sensors.val()
}