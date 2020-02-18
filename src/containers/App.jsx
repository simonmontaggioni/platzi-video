import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => (
    <div className="App">

        <Header></Header>

        <Search></Search>

        <Category title = 'Movies list'>

            <Carousel>

                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>

            </Carousel>

        </Category>

        <Footer></Footer>

    </div>
);

export default App;