import styles from "./simonsays.module.css";
import socket from "../../services/socket";

const SimonSays = () => {

    const greenClick = () => {
        socket.emit('greenTile');
    }
    const redClick = () => {
        socket.emit('redTile');
    }
    const yellowClick = () => {
        socket.emit('yellowTile');
    }
    const blueClick = () => {
        socket.emit('blueTile');
    }

    const clickStart = () => {
        socket.emit('runGame')
    }

    return (
        <div className={styles.container}>
            <div className={styles.startBtn} onClick={clickStart}>Start Game</div>

            <div className={styles.gameContainer}>
                <div className={styles.top}> 
                    <div className={styles.greenBorder}>
                        <div className={styles.greenBtn} onClick={greenClick}></div>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.redBorder}>
                        <div className={styles.redBtn} onClick={redClick}></div>
                    </div>
                    <div className={styles.blueBorder}>
                        <div className={styles.blueBtn} onClick={blueClick}></div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.yellowBorder}>
                        <div className={styles.yellowBtn} onClick={yellowClick}></div>  
                    </div>
                     
                </div>
           
            
           
            

            </div>
        </div>
    )


}

export default SimonSays