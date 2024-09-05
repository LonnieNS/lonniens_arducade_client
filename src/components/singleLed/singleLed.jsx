import styles from "./singleled.module.css";
import { useEffect } from "react";
import { useState } from "react";
import socket from "../../services/socket";
const SingleLed = () => {

    
    const [isConnected, setIsConnected] = useState(false);
    useEffect( () => {
        
        const onConnect = () => {
            setIsConnected(true);
        }

        const onDisconnect = () => {
            setIsConnected(false);
        }    
        
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {

          socket.off('connect', onConnect);
          socket.off('disconnect', onDisconnect);
        };
        
    }, [])  


    const turnOn = () => {

        socket.emit('turnOn');

    }

    const turnOff = () => {

        socket.emit('turnOff');

    }

    const testRGB = () => {
        socket.emit('rgbOn');
    }

    const testRGBOff = () => {
        socket.emit('rgbOff');
    }

    const testRGBChange = () => {
        socket.emit('rgbChange');
    }
    return (
        <div className={styles.ledBtnWrapper}>
            <h1 className={styles.h1}>Device is {isConnected ? 'connected' : 'disconnected'}</h1>


            <button onClick={turnOn}>ON</button>
            <button onClick={turnOff}>OFF</button>


            <button onClick={testRGB}>RGB on</button>
            <button onClick={testRGBOff}>RGB off</button>
            <button onClick={testRGBChange}>RGB</button>
        </div>
    );
};

export default SingleLed;