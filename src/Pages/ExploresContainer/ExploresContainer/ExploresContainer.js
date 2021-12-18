import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Header/Navigation';
import Explores from '../Explores/Explores';

const ExploresContainer = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Explores></Explores>
            <Footer></Footer>
        </div>
    );
};

export default ExploresContainer;