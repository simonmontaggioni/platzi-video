import React, {useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';


const App = () => {

    const APIURL = 'http://192.168.0.110:3000/initialState';

    
    const initialState = useInitialState( APIURL );
    console.log( initialState );

    return (
        <div className="App">

            <Header></Header>

            <Search></Search>

            {
                initialState.mylist &&
                initialState.mylist.length > 0 &&
                <Category title = 'Mi lista'>
                    <Carousel>
                    { 
                        initialState.mylist &&
                        initialState.mylist.map ( item => <CarouselItem key={item.id} {...item} /> )
                    }
                    </Carousel>
                </Category>
            }

            <Category title = 'Tendencia'>
                <Carousel>
                    { 
                        initialState.trends &&
                        initialState.trends.map ( item => <CarouselItem key={item.id} {...item} /> )
                    }
                </Carousel>
            </Category>

            <Category title = 'Originals'>
                <Carousel>
                    { 
                        initialState.originals &&
                        initialState.originals.map ( item => <CarouselItem key={item.id} {...item} /> )
                    }
                </Carousel>
            </Category>

            <Footer></Footer>

        </div>
    )
};

export default App;