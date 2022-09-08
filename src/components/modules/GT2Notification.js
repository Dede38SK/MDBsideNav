import React from "react";
import {
    MDBBtn,
    MDBIcon,
    MDBToast
} from "mdb-react-ui-kit";

export default function GT2Notification({ notification, notificationRef }) {
    let icon, title;
    switch (notification.type) {
        case "success": icon = "check-circle"; title = "Provedeno"; break;
        case "warning": icon = "exclamation-circle"; title = "Varování"; break;
        case "danger": icon = "times-circle"; title = "Chyba"; break;
        default: icon = "info-circle"; title = "Informace"; break;
    };

    process.env.REACT_APP_DEBUG && console.log("Render GT2Notification");
    return (
        <>
            <MDBBtn ref={notificationRef} className='d-none' />
            <MDBToast
                triggerRef={notificationRef}
                color={notification.type}
                position='top-right'
                appendToBody
                autohide
                delay={2000}
                headerContent={
                    <>
                        <MDBIcon fas icon={icon} />
                        <strong className='ms-1 me-auto'>{title}</strong>
                    </>
                }
                bodyContent={notification.msg}
            />
        </>
    );
}
