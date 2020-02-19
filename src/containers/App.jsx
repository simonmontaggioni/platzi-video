import React, {useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {

    const APIURL = 'http://192.168.0.110:3000/initialState';

    const [ videos, setVideos ] = useState([]);

    useEffect(()=>{
        fetch( APIURL )
            .then( response => response.json() )
            .then( data => setVideos(data) );
    }, []);

    console.log( videos );

    return (
        <div className="App">

            <Header></Header>

            <Search></Search>

            {
                videos.mylist &&
                videos.mylist.length > 0 &&
                <Category title = 'Mi lista'>
                    <Carousel>
                        <CarouselItem></CarouselItem>
                    </Carousel>
                </Category>
            }

            <Category title = 'Tendencia'>
                <Carousel>
                    { 
                        videos.trends &&
                        videos.trends.map ( item => <CarouselItem key={item.id} {...item} /> )
                    }
                </Carousel>
            </Category>

            <Category title = 'Originals'>
                <Carousel>
                    { 
                        videos.originals &&
                        videos.originals.map ( item => <CarouselItem key={item.id} {...item} /> )
                    }
                </Carousel>
            </Category>

            <Footer></Footer>

        </div>
    )
};

export default App;