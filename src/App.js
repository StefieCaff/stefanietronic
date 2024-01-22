// external
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

//internal
import './App.css';
import Spinner from './Components/Spinner';
import Home from './Pages/Home';
import Error from './Pages/Error';

const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Experience = lazy(() => import("./Pages/Experience"));
const Contact = lazy(() => import("./Pages/Contact"));


function App() {
  return (
    <>
      
      <Suspense fallback={<Spinner/>}>
        <Home />
      </Suspense>
      
      
    </>
  )
}

export default App;
