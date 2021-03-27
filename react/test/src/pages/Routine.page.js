import React from 'react'
import Navigation from "../components/Navigation";
import Routine from "../components/createRoutine/Routine";
import Footer from "../components/Footer";


export const RoutinePage = () => {
    return <>
        <Navigation/>
        <Routine/>
        <Footer/>
        {/*                                <SignUp/>*/}
    </>
}
