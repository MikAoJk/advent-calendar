import styles from "./ShowPriceModal.module.css";

interface ShowPriceModalProps {
    text?: string
    onClose: () => void;
}

const ShowPriceModal = (showPriceModalProps: ShowPriceModalProps) => {

    const closeHandler = () => {
        showPriceModalProps.onClose()
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>Today's price is:</h4>
                </div>
                <div className={styles.modal_body}>
                    {showPriceModalProps.text}
                </div>
                <div className={styles.modal_footer}></div>
                <button className={styles.button} onClick={closeHandler}>Close</button>
            </div>

        </div>
    )
}

export default ShowPriceModal;