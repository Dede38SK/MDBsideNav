import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBInputGroup,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBTooltip
} from "mdb-react-ui-kit";
import GT2Messages from './GT2Messages';
import { cutText } from '../utilities/GT2Uformat';

export default function GT2NavBarTop({ updateSidenav, sidenavState, addMsg, messages, setMessages }) {
    const [search, setSearch] = useState();
    const [list, setList] = useState([]);

    const getTooltip = (json) => {
        var tooltip = [];
        if (typeof json !== 'undefined') {
            for (const [key, value] of Object.entries(JSON.parse(json))) {
                if (value) tooltip.push(<><b>{key}</b>: {value}<br/></>);
            }
        }
        return <div className="text-start">{tooltip.map(value => value)}</div>;
    };

    const actSearch = () => {
        setList([]);
    };

    process.env.REACT_APP_DEBUG && console.log("Render GT2NavBarTop");
    return (
        <MDBNavbar id="main-navbar" expand="lg" light fixed="top" bgColor="light">
            <MDBContainer fluid>
                <MDBBtn
                    onClick={() => updateSidenav(!sidenavState)}
                    className="shadow-0 p-0 me-3 d-block d-xxl-none"
                    color="light"
                >
                    <MDBIcon icon="bars" size="lg" fas className="p-1"/>
                </MDBBtn>

                <MDBInputGroup
                    className="d-none d-md-flex w-auto my-auto"
                    textAfter={
                        <MDBDropdown
                            options={{
                                modifiers: [{
                                    name: 'offset',
                                    options: { offset: [-238, 10], }
                                }]
                            }}
                        >
                            <MDBDropdownToggle
                                style={{ cursor: "pointer" }}
                                tag="div"
                                className="me-lg-0 hidden-arrow"
                                onClick={actSearch}
                            >
                                <MDBIcon fas icon="search" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu style={{ zIndex: 1060 }}>
                                {list.map((val, i) => {
                                    let icon, link, tooltip, key;
                                    switch (val.ObjType) {
                                        case "SUBJ": icon = "user"; link = "./subj-all/" + val.ObjID; break;
                                        case "ADR": icon = "envelope"; link = "./subj-all/" + val.ObjID; break;
                                        case "DOX": icon = "file"; link = "./dox/" + val.ObjID; break;
                                        case "DEAL": icon = "money-bill-alt"; link = "./deal-all/" + val.ObjID; break;
                                        default: icon = "question-circle"; break;
                                    }
                                    tooltip = getTooltip(val.Pattern);
                                    key = "SearchTip" + i;
                                    return (
                                        <MDBDropdownItem key={key} link>
                                            <MDBTooltip tag="div" placement="bottom" title={tooltip}>
                                                <Link to={link}>
                                                        <MDBIcon far icon={icon} className="me-1" />
                                                        {cutText(val.Result, 50).text}
                                                </Link>
                                            </MDBTooltip>
                                        </MDBDropdownItem>
                                    )
                                })}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    }
                >
                    <input
                        type="search"
                        className="form-control"
                        placeholder='Vyhledat...'
                        style={{ minWidth: "225px" }}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </MDBInputGroup>

                <MDBNavbarNav className="ms-auto d-flex flex-row">
                    <MDBNavbarItem>
                        <MDBNavbarLink className="me-3 me-lg-0" href="#">
                            <MDBIcon fab icon="github" />
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <GT2Messages messages={messages} setMessages={setMessages} />
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle
                                style={{ cursor: "pointer" }}
                                tag="a"
                                className="nav-link  me-3 me-lg-0 hidden-arrow"
                            >
                                <MDBIcon fas icon="user-circle" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu style={{ zIndex: 1060 }}>
                                <MDBDropdownItem link>My profile</MDBDropdownItem>
                                <MDBDropdownItem link>Settings</MDBDropdownItem>
                                <MDBDropdownItem link>Logout</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
}
