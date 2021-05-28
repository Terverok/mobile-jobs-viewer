import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Login } from './pages/login';
import { MyJobs } from './pages/myjobs';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onLoggedIn = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    return (
        <AppContent>
            <Header onlyLogo={!isLoggedIn} />
            {!isLoggedIn && <Login onLoggedIn={onLoggedIn} />}
            {isLoggedIn && <MyJobs />}
        </AppContent>
    );
}

const AppContent = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
`;

export default App;
