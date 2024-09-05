import styles from "./arcade.module.css";
import ArcadeMachine from "./arcadeMachine/arcademachine";

const Arcade = () => {
    return (
        <div className={styles.container}>
             <ArcadeMachine game={'Cyclone'}></ArcadeMachine>
            <ArcadeMachine game={'SimonSays'}></ArcadeMachine>
        </div>
    )
}

export default Arcade