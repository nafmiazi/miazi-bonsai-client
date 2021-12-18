import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Header/Navigation';
import Banner from '../Banner/Banner';
import Trees from '../Trees/Trees';
import Info from '../Info/Info';
import LatestOffers from '../LatestOffers/LatestOffers';
import UsersReview from '../UsersReview/UsersReview';
import SpecialOffers from '../SpecialOffers/SpecialOffers';

const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }
    return (
        <div>
            <Info></Info>
            <Navigation></Navigation>
            <Banner></Banner>
            <Trees></Trees>
            <LatestOffers></LatestOffers>
            <UsersReview></UsersReview>
            <SpecialOffers></SpecialOffers>
            <Footer></Footer>
        </div>
    );
};

export default Home;