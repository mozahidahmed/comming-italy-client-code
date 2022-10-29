import React from 'react';
import Header from './Header';
import Hotels from './Hotel/Hotels';
import Places from './Place/Places';
import Restaurants from './Restaurant/Restaurants';

const Home = () => {
    return (
        <div>
            <Header></Header>

            <Places></Places>
           <Hotels></Hotels>
           <Restaurants></Restaurants>
        
        </div>
    );
};

export default Home;