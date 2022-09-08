import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GT2NavBarTop from './components/modules/GT2NavBarTop';
import GT2NavBarLeft from './components/modules/GT2NavBarLeft';
import GT2Notification from './components/modules/GT2Notification';
import AppRoutes from './AppRoutes';

function App() {
    const [basicOpen, setBasicOpen] = useState(true);

    const notificationRef = useRef(null);
    const [notification, setNotification] = useState({ type: "info", msg: "" });

    const [messages, setMessages] = useState([]);
    const addMsg = useCallback((t, m) => {
        setMessages((prev) => [...prev, { time: new Date(), type: t, msg: m }]);
        notificationRef.current.click();
    },[messages]);

    useEffect(() => {
        setNotification(messages.length > 0 ? messages[messages.length - 1] : { type: "info", msg: "" });
    }, [messages]);

    process.env.REACT_APP_DEBUG && console.log("Render App");
    return (
        <div>
            <header>
                <GT2NavBarTop updateSidenav={setBasicOpen} sidenavState={basicOpen} addMsg={addMsg} messages={messages} setMessages={setMessages} />
                <GT2NavBarLeft basicOpen={basicOpen} setBasicOpen={setBasicOpen} addMsg={addMsg} />
            </header>
            <main>
                <Routes>
                  {AppRoutes.map((route, index) => {
                      const { element, ...rest } = route;
                      return <Route key={index} {...rest} element={React.cloneElement(element, {addMsg: addMsg})}/>;
                  })}
                </Routes>
                <GT2Notification notification={notification} notificationRef={notificationRef} />
            </main>
      </div>
  );
}

export default App;