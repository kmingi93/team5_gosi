import React from 'react';
import Header from './header';
import Contents from './contents';
import Footer from './footer';

function Index() {
    return (
        <div className="mainContents">
            <Header></Header>
            <Contents></Contents>
            <Footer></Footer>
        </div>
    );
}

export default Index;