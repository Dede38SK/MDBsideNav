import React, { memo, useRef } from "react";
import {
    MDBBadge,
    MDBIcon,
    MDBNavbarLink,
    MDBTooltip,
    MDBToast
} from "mdb-react-ui-kit";
import GT2Uformat from '../utilities/GT2Uformat'

function GT2Messages({ messages, setMessages }) {
    const messagesRef = useRef(null);
    const delMsg = (i) => {
        var n;
        if (i > -1) {
            n = [...messages];
            n.splice(i, 1);
        } else {
            n = [];
        }
        setMessages(n);
    };

    const body = (
        <div className="overflow-auto" style={{ maxHeight: 800 }}>
            {messages.map((m, i) => {
                let icon;
                let color = ' text-' + m.type;
                let time = GT2Uformat.time(m.time);
                switch (m.type) {
                    case "info": icon = "info-circle"; break;
                    case "success": icon = "check-circle"; break;
                    case "warning": icon = "exclamation-circle"; break;
                    case "danger": icon = "times-circle"; break;
                    default: icon = "info"; break;
                };
                return (
                    <div key={i} className="gt2messages" style={{ maxWidth: 600 }}>
                        {i > 0 && <hr className="my-2" />}
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <MDBIcon fas icon={icon} className={color} />
                                <small className="px-1">{time}</small>
                            </div>
                            <MDBTooltip tag="div" placement="bottom" title="Smazat">
                                <MDBIcon fas icon="trash-alt" className="gt2delete" style={{ cursor: "pointer" }} onClick={() => delMsg(i)} />
                            </MDBTooltip>
                        </div>
                        <div>{m.msg}</div>
                    </div>
                );
            })}
        </div>
    )

    process.env.REACT_APP_DEBUG && console.log("Render GT2Messages");
    return (
        <MDBNavbarLink className="me-3 me-lg-0" ref={messagesRef} style={{ cursor: "pointer" }} disabled={messages.length === 0}>
            <MDBIcon fas icon="bell" />
            {messages.length > 0 && (
                <>
                    <MDBBadge pill notification color="danger">{messages.length}</MDBBadge>
                    <MDBToast
                        color='light'
                        position='top-right'
                        appendToBody
                        triggerRef={messagesRef}
                        headerContent={
                            <strong className="fs-6 me-auto">
                                <MDBTooltip tag="span" placement="bottom"  title="Smazat všechno">
                                    <MDBIcon fas icon="trash-alt" className="gt2deleteAll me-1" style={{ cursor: "pointer" }} onClick={() => delMsg()} />
                                </MDBTooltip>
                                Seznam zpráv
                            </strong>
                        }
                        bodyContent={body}
                    />
                </>
            )}
        </MDBNavbarLink>
    );
}

export default memo(GT2Messages);