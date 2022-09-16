import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import socket from "./socket";
import {useEffect} from "react";
import {updateChannels, updateUsers} from "./utils";

function App() {

  useEffect(() => {
    socket.on('channels', channels => {
      console.log('katıldığı kanallar', channels)
      updateChannels(channels)
    })
    socket.on('userList', users => {
      updateUsers(users)
    })
  }, [])

  return <>
    <Toaster position="top-right" />
    {useRoutes(routes)}
  </>
}

export default App;
