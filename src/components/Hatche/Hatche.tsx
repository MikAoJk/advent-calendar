import styles from "./Hatche.module.css";

interface HatcheProps {
    hatcheData: HatcheData
    onOpen: (hatcheData: HatcheData) => void;
}

const Hatche = (hatcheProps: HatcheProps) => {

    const showHatchPriceHandler = () => {
        hatcheProps.onOpen(hatcheProps.hatcheData)
    }

    return (
            <button className={styles.hatche__front} onClick={showHatchPriceHandler}>
                {hatcheProps.hatcheData.day}
            </button>
    )
}

export type HatcheData = {
    day: number
    price: string
}

export default Hatche;