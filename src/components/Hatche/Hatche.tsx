import styles from "./Hatche.module.css";

interface HatcheProps {
    hatcheData: HatcheData
}

const Hatche = (hatcheProps: HatcheProps) => {
    return (
            <button className={styles.hatche__front}>
                {hatcheProps.hatcheData.day}
            </button>
    )
}

export type HatcheData = {
    day: number
    price: string
}

export default Hatche;