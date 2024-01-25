// external
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

//internal
import './App.css';
import Spinner from './Components/Spinner';

import Error from './Pages/Error';
import Nav from './Components/Nav/Nav';

const Home = lazy(() => import('./Pages/Home'))
const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Experience = lazy(() => import("./Pages/Experience"));
const Contact = lazy(() => import("./Pages/Contact"));


function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Nav />
      </Suspense>
      <Routes>
        <Route
          path=''
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/portfolio'
          element={
            <Suspense fallback={<Spinner />}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path='/experience'
          element={
            <Suspense fallback={<Spinner />}>
              <Experience />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Spinner />}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
