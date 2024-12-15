import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.jsx';

import Footer from '../components/Footer.jsx';

function RootLayout() { 
    // const navigation = useNavigation();
    return (
        <>
            <MainNavigation />
            <main>
                 
                <Outlet />
            </main>
            <Footer />
        </>
        )
}
export default RootLayout;