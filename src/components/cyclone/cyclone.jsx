import styles from "./cyclone.module.css";
import socket from "../../services/socket";

const Cyclone = () => {

    
    const cyclone = () => {
        socket.emit('startCyclone')
    }

    const cycloneStop = () => {
        socket.emit('stop')
    }

    const cycloneReset = () => {
        socket.emit('reset')
    }

    return(
        <div className={styles.container}>
            <div className={styles.startReset}>
            <div className={styles.startBtn} onClick={cyclone}>Start</div>
            <div className={styles.resetBtn} onClick={cycloneReset}>Reset</div>
            </div>
           
            <div className={styles.stopBtn} onClick={cycloneStop}>Stop</div>
        </div>
    )
}

export default Cyclone