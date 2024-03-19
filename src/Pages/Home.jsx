import Airplane from "../Components/Airplane/Airplane"
import Clouds from "../Components/Clouds/Clouds";
import { Container, Section } from "../Components/Containers/Containers";
  
const Home = () => {
    return (
        <Section topSpacing ={0}>
            <Container>
                <Airplane />
                <Clouds/>
            </Container> 
        </Section>
  )
};

export default Home;