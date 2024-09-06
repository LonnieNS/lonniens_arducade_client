import styles from "./instructioncomp.module.css";

const InstructionComp = () => {
    return(
        <div className={styles.container}>
            
       <div className={styles.simonSays}>
        <h1>Setting up Simon Says</h1>
        <div className={styles.simonSaysImageDiv}>
            <img src="simonbread.png" width="600px"></img>
        </div>
        <div className={styles.simonInfo}>
            <div className={styles.infoRow}>
            <div className={styles.resistor}>
                <div className={styles.bandOne}></div>
                <div className={styles.bandTwo}></div>
                <div className={styles.bandThree}></div>
                <div className={styles.bandFour}></div>
            </div>
            <div className={styles.resistorText}> <h2>220Ω</h2> </div>
            </div>

            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 10</h2> </div>
            </div>

            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.yellowLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 11</h2> </div>
            </div>

            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.redLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 12</h2> </div>
            </div>

            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.greenLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 13</h2> </div>
            </div>

           
            
        </div>
       </div>
       <div className={styles.cyclone}>
        <h1>Setting up Cyclone</h1>
        <div className={styles.cycloneImageDiv}>
        <img src="cyclonebread.png" width="600px"></img>
        </div>

        <div className={styles.simonInfo}>
            <div className={styles.infoRow}>
            <div className={styles.resistor}>
                <div className={styles.bandOne}></div>
                <div className={styles.bandTwo}></div>
                <div className={styles.bandThree}></div>
                <div className={styles.bandFour}></div>
            </div>
            <div className={styles.resistorText}> <h2>220Ω</h2> </div>
            </div>

            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.greenLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 2</h2> </div>
            </div>
            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 3</h2> </div>
            </div>
            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 4</h2> </div>
            </div>
            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 5</h2> </div>
            </div>
            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 6</h2> </div>
            </div>
            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 7</h2> </div>
            </div>
            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 8</h2> </div>
            </div>
            <div className={styles.infoRow}>
            <div className={styles.leds}>
                <div className={styles.blueLed}></div>
            </div>
            <div className={styles.resistorText}> <h2> 9</h2> </div>
            </div> 
            
        </div>

       </div>
        </div>
    )
}

export default InstructionComp