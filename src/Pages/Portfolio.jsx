import React from 'react';
import Heading from '../Components/Heading/Heading';
import { Container, Section } from '../Components/Containers/Containers';
import Footer from '../Components/Footer/Footer';
import Grass from '../Components/Grass/Grass';
import InfoCard from '../Components/InfoCard/InfoCard.jsx'
import InfoCardList from '../Components/InfoCard/InfoCardList.jsx';

import fold1 from '../Images/fold1.jpg';
import fold2 from '../Images/fold2.jpg';
import fold3 from '../Images/fold3.jpg';

const Portfolio = () => {
    const portfolioHeading = 'Recent Coding Projects!'
    const portfolioSubHeading= "Explore some works I've created and co-created during my dive into Full-Stack Web Dev! Click the links to check them out."

  // Test data for InfoCardList
  const cardData = [
    {
      imageSrc: fold1,
      altText: 'Paper Airplane Fold 1',
      infoContent: 'fold the paper in half.',
    },
    {
      imageSrc: fold2,
      altText: 'Paper Airplane Fold 2',
      infoContent: 'open the paper and fold the top corners to the center line.',
    },
    {
      imageSrc: fold3,
      altText: 'Paper Airplane Fold 3',
      infoContent: 'repeat step 2 folding to the middle from the corner, making a steeper angle for the nose of the plane .',
      },
    {
      imageSrc: fold1,
      altText: 'Paper Airplane Fold 1',
      infoContent: 'fold the paper in half.',
    },
    {
      imageSrc: fold2,
      altText: 'Paper Airplane Fold 2',
      infoContent: 'open the paper and fold the top corners to the center line.',
    },
    {
      imageSrc: fold3,
      altText: 'Paper Airplane Fold 3',
      infoContent: 'repeat step 2 folding to the middle from the corner, making a steeper angle for the nose of the plane .',
      },
    {
      imageSrc: fold1,
      altText: 'Paper Airplane Fold 1',
      infoContent: 'fold the paper in half.',
    },
    {
      imageSrc: fold2,
      altText: 'Paper Airplane Fold 2',
      infoContent: 'open the paper and fold the top corners to the center line.',
    },
    {
      imageSrc: fold3,
      altText: 'Paper Airplane Fold 3',
      infoContent: 'repeat step 2 folding to the middle from the corner, making a steeper angle for the nose of the plane .',
    },
  ];

    return (
        <>
        <Section>
            <Container>
        <div>
            <Heading
               heading={portfolioHeading}
                subHeading={portfolioSubHeading}                />
            
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
            </ul>
                </div>
            </Container>
            </Section>

<InfoCardList cards={cardData} />


            <Section>
                <Container>
                    <InfoCardList cards={cardData} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <InfoCard
                        imageSrc={fold1}
                        altText="Paper Airplane Fold 1"
                        infoContent="Fold the paper in half."
                    />
                </Container>
            </Section>

                    <InfoCard
                        imageSrc={fold1}
                        altText="Paper Airplane Fold 1"
                        infoContent="Fold the paper in half."
                    />

            <Footer>
                <Grass />
            </Footer>
        </>
    );
};

export default Portfolio;
