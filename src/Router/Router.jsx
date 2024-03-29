// external
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

//internal
import "../../src/App.css";
import Spinner from "../Components/Spinner";
import Home from "../Pages/Home"
import Error from "../Pages/Error";

// const Home = lazy(() => import("../Pages/Home"));
const Portfolio = lazy(() => import("../Pages/Portfolio"));
const Experience = lazy(() => import("../Pages/Experience"));
const Contact = lazy(() => import("../Pages/Contact"));
const StickyNote = lazy(() => import("../Pages/StickyNote"));
const Router =() => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Home />
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
          path='/sticky-note'
          element={
            <Suspense fallback={<Spinner />}>
             <StickyNote />
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

export default Router;
