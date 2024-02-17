// external

import { Suspense } from "react";

//internal
import "./App.css";
import Spinner from "./Components/Spinner";

import NavPad from "./Components/Nav/NavPad";
import Router from "./Router/Router";
import { Container, Section } from "./Components/Containers/Containers";

function App() {
  return (
    <>
      <Section topSpacing={0} bottomSpacing={0}>
        <Container>
          <Suspense fallback={<Spinner />}>
            <NavPad />
          </Suspense>
          <Router />
        </Container>
      </Section>
    </>
  );
}

export default App;
