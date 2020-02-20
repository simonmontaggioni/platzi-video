import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';

const Home = ({ myList, trends, originals}) => {

    return (
        <React.Fragment>

            <Search></Search>

            {
                myList &&
                myList.length > 0 &&
                <Category title = 'Mi lista'>
                    <Carousel>
                    { 
                        myList &&
                        myList.map ( item => <CarouselItem 
                                                key={item.id} 
                                                {...item}
                                                isList
                                             /> )
                    }
                    </Carousel>
                </Category>
            }

            <Category title = 'Tendencia'>
                <Carousel>
                    { 
                        trends &&
                        trends.map ( item => <CarouselItem key={item.id} {...item} /> )
                    }
                </Carousel>
            </Category>

            <Category title = 'Originals'>
                <Carousel>
                    { 
                        originals &&
                        originals.map ( item => <CarouselItem key={item.id} {...item} /> )
                    }
                </Carousel>
            </Category>

        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect( mapStateToProps, null)( Home );