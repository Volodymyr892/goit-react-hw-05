
import {  Routes, Route, Router, } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Suspense, lazy } from 'react';
const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

// import HomePage from '../../pages/HomePage';
// import MoviesPage from '../../pages/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import NotFoundPage from '../../pages/NotFoundPage';
// import MovieCast from '../MovieCast/MovieCast';
// import MovieReviews from '../MovieReviews/MovieReviews';

export default function App(){
    return(
    <Router>
       <div>
            <Navigation/>
    
           <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/movies" element={<MoviesPage/>}/>
                    <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
                        <Route path="Cast" element={<MovieCast/>}/>
                        <Route path='reviews' element={<MovieReviews/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
           </Suspense>
       </div>
    </Router>
    );
}