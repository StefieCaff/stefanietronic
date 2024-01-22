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
      
      <Suspense fallback={<Spinner/>}>
        <Nav/>
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={<Suspense fallback={<Spinner />}><Home /></Suspense>
        }
        />
          
        
      </Routes>
      
      
    </>
  )
}

export default App;
