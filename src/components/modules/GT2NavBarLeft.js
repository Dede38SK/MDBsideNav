import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBSideNav,
    MDBSideNavMenu,
    MDBSideNavItem,
    MDBSideNavLink,
    MDBSideNavCollapse,
    MDBIcon,
    MDBRipple,
    MDBSpinner
} from 'mdb-react-ui-kit';
import AppRoutes from '../../AppRoutes';

export default function GT2NavBarLeft({ basicOpen, setBasicOpen, addMsg }) {
    const [mode, setMode] = useState('side');
    const [backdrop, setBackdrop] = useState(false);
    const innerWidth = useRef(null);

    const checkResize = () => {
        if (window.innerWidth === innerWidth.current) {
            return;
        }
        innerWidth.current = window.innerWidth;
        if (window.innerWidth < 1400) {
            setMode('over');
            setBasicOpen(false);
            setBackdrop(true);
        } else {
            setMode('side');
            setBasicOpen(true);
            setBackdrop(false);
        }
    };

    useEffect(() => {
        checkResize();
        window.addEventListener('resize', checkResize);
        return () => {
            window.removeEventListener('resize', checkResize);
        };
    }, []);

    const [openedNodes, setOpenedNodes] = useState([0]);
    const collapseNode = (level, id) => {
        let nodes = [...openedNodes];
        if (nodes[level] === id)
            nodes[level] = 0;
        else
            nodes[level] = id;
        nodes.splice(level + 1);
        setOpenedNodes(nodes);
    };

    process.env.REACT_APP_DEBUG && console.log("Render GT2NavBarLeft");
    return (
        <MDBSideNav
            isOpen={basicOpen}
            backdrop={backdrop}
            getOpenState={(e) => setBasicOpen(e)}
            closeOnEsc={false}
        >
            <MDBRipple tag="a" className="d-flex justify-content-left px-2 py-1">
                <Link to="/">
                    <img
                        id="AppLogo"
                        src="logo_transparent.png"
                        alt="App Logo"
                        draggable="false"
                        className="gt2appLogo"
                    />
                </Link>
            </MDBRipple>
            <MDBSideNavMenu>
                <MDBSideNavItem>
                    <MDBSideNavLink icon="angle-down" shouldBeExpanded={openedNodes[0] === 3} onClick={() => collapseNode(0, 3)}>
                        <MDBIcon fas icon="list" className="fa-fw me-2" />
                        Demo Pages
                    </MDBSideNavLink>
                    <MDBSideNavCollapse show={openedNodes[0] === 3}>
                        <Link to="/seo-dashboard" className="sidenav-link">
                            <MDBIcon fas icon="chart-area" className="fa-fw me-2" />
                            SEO dashboard
                        </Link>
                        <Link to="/e-commerce1" className="sidenav-link">
                            <MDBIcon fas icon="chart-pie" className="fa-fw me-2" />
                            eCommerce dashboard
                        </Link>
                        <Link to="/e-commerce2" className="sidenav-link">
                            <MDBIcon fas icon="chart-line" className="fa-fw me-2" />
                            eCommerce dashboard
                        </Link>
                        <Link to="/ads-dashboard" className="sidenav-link">
                            <MDBIcon fas icon="chart-pie" className="fa-fw me-2" />
                            Ads dashboard
                        </Link>
                        <Link className="sidenav-link" to="/order-dashboard">
                            <MDBIcon fas icon="chart-bar" className="fa-fw me-2" />
                            Order dashboard
                        </Link>
                        <Link className="sidenav-link" to="/traffic-dashboard">
                            <MDBIcon fas icon="chart-area" className="fa-fw me-2" />
                            Traffic dashboard
                        </Link>
                        <Link className="sidenav-link" to="/invoice-page">
                            <MDBIcon fas icon="money-bill" className="fa-fw me-2" />
                            Invoice page
                        </Link>
                    </MDBSideNavCollapse>
                </MDBSideNavItem>
                <MDBSideNavItem>
                    <MDBSideNavLink icon="angle-down" shouldBeExpanded={openedNodes[0] === 1} onClick={() => collapseNode(0, 1)}>
                        <MDBIcon fas icon="tablet-alt" className="fa-fw me-2" />
                        Demo Apps
                    </MDBSideNavLink>
                    <MDBSideNavCollapse show={openedNodes[0] === 1}>
                        <Link to="/chat-app" className="sidenav-link">
                            Chat app
                        </Link>
                        <Link className="sidenav-link" to="/mailbox-app">
                            Mailbox app
                        </Link>
                    </MDBSideNavCollapse>
                </MDBSideNavItem>
                <MDBSideNavItem>
                    <MDBSideNavLink icon="angle-down" shouldBeExpanded={openedNodes[0] === 2} onClick={() => collapseNode(0, 2)}>
                        <MDBIcon fas icon="cogs" className="fa-fw me-2" />
                        Demo Management
                    </MDBSideNavLink>
                    <MDBSideNavCollapse show={openedNodes[0] === 2}>
                        <Link className="sidenav-link" to="/user-profile">
                            User profile
                        </Link>
                        <Link className="sidenav-link" to="/user-management">
                            User management
                        </Link>
                        <Link className="sidenav-link" to="/login-register">
                            Login / register page
                        </Link>
                        <Link className="sidenav-link" to="/forgot-password">
                            Forgot password page
                        </Link>
                        <Link className="sidenav-link" to="/change-password">
                            Change password page
                        </Link>
                        <Link className="sidenav-link" to="/not-found404">
                            404 page
                        </Link>
                    </MDBSideNavCollapse>
                </MDBSideNavItem>
            </MDBSideNavMenu>
        </MDBSideNav>
    );
}
