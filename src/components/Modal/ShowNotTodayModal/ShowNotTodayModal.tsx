import styles from "./ShowNotTodayModal.module.css";

interface ShowNotTodayModalProps {
    onClose: () => void;
}

const ShowNotTodayModal = (showNotTodayModalProps: ShowNotTodayModalProps) => {

    const closeHandler = () => {
        showNotTodayModalProps.onClose()
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>You cannot open this hatche today!</h4>
                </div>
                <div className={styles.modal_footer}></div>
                <button className={styles.button} onClick={closeHandler}>Close</button>
            </div>

        </div>
    )
}

export default ShowNotTodayModal;