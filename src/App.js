import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import request from './request';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchTrending} isLargeRow />
    <Row title="Trending Now" fetchUrl={request.fetchNetflixOriginals} />
    <Row title="Top Rated" fetchUrl={request.fetchTvSeries} />
    <Row title="Action Movies" fetchUrl={request.fetchNetflixOriginals} />
    <Row title="Comedy Movies" fetchUrl={request.fetchTrending} />
    <Row title="Horror Movies" fetchUrl={request.fetchTvSeries} />
    <Row title="Romance Movies" fetchUrl={request.fetchTrending} />
    <Row title="Tv Series" fetchUrl={request.fetchTvSeries} />
    </div>
  );
}

export default App;