import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
const RoomPage = () => {
    const { roomId } = useParams()

    const myMeeting = async(el) =>{
        const appID = 851189778;
        const serverSecret = "8daed6fbb98558149ce5af09f1c6a6fe";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),  "anurag");

        const token = ZegoUIKitPrebuilt.create(kitToken)
       
        token.joinRoom({
            container : el,
            sharedLinks : [
             {
                name : "Copy Link",
                url : `http://localhost:3000/room/${roomId}`
             }
            ],
            scenario : {
                mode :ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true
        })
    }
  return (
    <div>
        <div ref={myMeeting} />
         </div>
  )
}

export default RoomPage