import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import socket from "../../../services/socket";
import SimonSays from "../../simonsays/simonsays";
import Cyclone from "../../cyclone/cyclone";

const Dashboard = () => {

        
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
    
 
        
    
        const turnOff = () => {
    
            socket.emit('turnOff');
    
        }

        const turnOn = () => {
    
            socket.emit('turnOn');
    
        }

    
      

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardHeader}>
                <div className={styles.dashboardHeaderInnerBorder}>
                    <h1 className={styles.dashboardHeading}>ARDUCADE</h1>
                </div>
            </div>
            <div className={styles.dashboardSpace}></div>
            <div className={styles.dashboardBody}>
                <div className={styles.dashboardBodyInnerBorder}>
                    <div className={styles.dashboardMonitor}>

                    

                    </div>
                </div>

            </div>
            <div className={styles.dashboardControlsBorder}>
                <div className={styles.dashboardControls}>
                    <div className={styles.dashboardControlsInner}>
                        <div className={styles.dashboardControlsFlex}>
                            <SimonSays></SimonSays>
                            <Cyclone></Cyclone>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardBase}></div>
            {/* 

                            <button className={styles.rgbBtn} onClick={turnOff}>off</button>
                            <button className={styles.rgbBtn} onClick={turnOn}>On</button> */}
                            
                     
        </div>
    )

}

export default Dashboard