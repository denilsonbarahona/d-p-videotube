import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Playing from '../pages/Playing';
import Search from '../pages/Search';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App =()=>{
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} ></Route>
                    <Route path="/search/:query" element={<Search/>} ></Route>
                    <Route path="/play" element={<Playing/>} ></Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;