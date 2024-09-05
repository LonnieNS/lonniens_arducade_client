import Cyclone from "../../cyclone/cyclone";
import SimonSays from "../../simonsays/simonsays";
import styles from "./arcademachine.module.css";
import simonStyles from "./simonsaysstyle.module.css";
import cycloneStyles from "./cycloneStyle.module.css";
import SimonMonitor from "../../simonsays/simonmonitor/simonmonitor";
import CycloneMonitor from "../../cyclone/cyclonemonitor/cyclonemonitor";

const ArcadeMachine = ({game}) => {

    let GameContent ='';

    let monitorContent = '';

    let stylePrefix = simonStyles;

    {game == 'SimonSays' ? GameContent = <SimonSays></SimonSays> : GameContent= <Cyclone></Cyclone>}
    {game == 'SimonSays' ? stylePrefix = simonStyles : stylePrefix = cycloneStyles}
    {game == 'Cyclone' ? monitorContent = <CycloneMonitor></CycloneMonitor> : monitorContent = <SimonMonitor></SimonMonitor>}

    return (
        <div className={styles.container}>
            <div className={`${stylePrefix.arcadeHeader}`}>
                <div className={`${stylePrefix.arcadeHeaderInnerBorder}`}>
                    <h1 className={`${stylePrefix.arcadeHeading}`}>{game}</h1>
                </div>
            </div>
            <div className={`${stylePrefix.arcadeSpace}`}></div>
            <div className={`${stylePrefix.arcadeBody}`}>
                <div className={`${stylePrefix.arcadeBodyInnerBorder}`}>
                    <div className={`${stylePrefix.arcadeMonitor}`}>

                    {monitorContent}

                    </div>
                </div>

            </div>
            <div className={`${stylePrefix.arcadeControlsBorder}`}>
                <div className={`${stylePrefix.arcadeControls}`}>
                    <div className={`${stylePrefix.arcadeControlsInner}`}>
                        <div className={`${stylePrefix.arcadeControlsFlex}`}>
                            {GameContent}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArcadeMachine