import styles from "./ShowNotTodayModal.module.css";

interface ShowNotTodayModalProps {
    day?: number,
    toDay: Date
    onClose: () => void;
}

const ShowNotTodayModal = (showNotTodayModalProps: ShowNotTodayModalProps) => {

    const closeHandler = () => {
        showNotTodayModalProps.onClose()
    }

    const isMonthDecember = (showNotTodayModalProps.toDay.getMonth() != 11)

    const textBody =  !isMonthDecember ? `Today you can open hatche number: ${ showNotTodayModalProps.toDay.getDate() }`
        : `You need to wait until December`

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>You cannot open hatche number: {showNotTodayModalProps.day}!
                    </h4>
                </div>
                <div className={styles.modal_body}>
                    {textBody}
                </div>
                <div className={styles.modal_footer}></div>
                <button className={styles.button} onClick={closeHandler}>Close</button>
            </div>

        </div>
    )
}

export default ShowNotTodayModal;