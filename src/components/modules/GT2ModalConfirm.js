import React from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
} from "mdb-react-ui-kit";

const GT2ModalConfirm = ({ modal, modalConfirm, modalClose }) => {
    process.env.REACT_APP_DEBUG && console.log("Render GT2ModalConfirm");
    return (
        <MDBModal show={modal.show} staticBackdrop tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>{modal.title}</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={modalClose}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className='text-start'>{modal.message}</MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn key='mbyes' color='success' onClick={modalConfirm}>Ano</MDBBtn>
                        <MDBBtn key='mbno' color='danger' onClick={modalClose}>Ne</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
};

export default GT2ModalConfirm;