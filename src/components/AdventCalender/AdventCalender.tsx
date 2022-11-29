import styles from "./AdventCalender.module.css";
import Hatche, {HatcheData} from "../Hatche/Hatche";
import ShowPriceModal from "../Modal/ShowPriceModal/ShowPriceModal";
import {useState} from "react";
import ShowNotTodayModal from "../Modal/ShowNotTodayModal/ShowNotTodayModal";

const AdventCalender = () => {

    const [clickedHatch, setClickedHatch] = useState<HatcheData>()
    const [modalClosed, setModalClosed] = useState(true)

    const hatchesData: HatcheData[] =
        [{
            day: 1,
            price: 'candy 1'
        },
            {
                day: 2,
                price: 'candy 2'
            },
            {
                day: 3,
                price: 'candy 3'
            },
            {
                day: 4,
                price: 'candy 4'
            },
            {
                day: 5,
                price: 'candy 5'
            },
            {
                day: 6,
                price: 'candy 6'
            },
            {
                day: 7,
                price: 'candy 7'
            },
            {
                day: 8,
                price: 'candy 8'
            },
            {
                day: 9,
                price: 'candy 9'
            },
            {
                day: 10,
                price: 'candy 10'
            },
            {
                day: 11,
                price: 'candy 11'
            },
            {
                day: 12,
                price: 'candy 12'
            },
            {
                day: 13,
                price: 'candy 13'
            },
            {
                day: 14,
                price: 'candy 14'
            },
            {
                day: 15,
                price: 'candy 15'
            },
            {
                day: 16,
                price: 'candy 16'
            },
            {
                day: 17,
                price: 'candy 17'
            },
            {
                day: 18,
                price: 'candy 18'
            },
            {
                day: 19,
                price: 'candy 19'
            },
            {
                day: 20,
                price: 'candy 20'
            },
            {
                day: 21,
                price: 'candy 21'
            },
            {
                day: 22,
                price: 'candy 22'
            },
            {
                day: 23,
                price: 'candy 23'
            },
            {
                day: 24,
                price: 'candy 24'
            }
        ]

    const todaysDay = new Date().getDate();
    const isTodaysHach = todaysDay === clickedHatch?.day

    const onOpenHandler = (hatcheData: HatcheData) => {
        setClickedHatch(hatcheData)
        setModalClosed(false)
    };

    const onCloseModalHandler = () => {
        setModalClosed(true)
    };

    return (
        <div className={styles.main}>
            <h2>Advent calendar</h2>
            {(!isTodaysHach && !modalClosed) &&
                <ShowNotTodayModal onClose={onCloseModalHandler}></ShowNotTodayModal>}
            {(isTodaysHach && !modalClosed) &&
                <ShowPriceModal text={clickedHatch?.price} onClose={onCloseModalHandler}></ShowPriceModal>}
            {hatchesData.map(hatcheData =>
                <Hatche key={hatcheData.day} hatcheData={hatcheData} onOpen={onOpenHandler}/>
            )}
        </div>
    )
}

export default AdventCalender;