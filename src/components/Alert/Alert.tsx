import React, {MouseEventHandler} from "react";
import {Modal} from "react-bootstrap";

type Props = {
    handleClose: MouseEventHandler
    show: boolean
    message: string
};

const Alert = ({handleClose, show, message}:Props) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Alert;
