import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { UserContext } from './Hooks/UserContext';

const Wrapper = styled.section`
  align-items: center;
  background-color: rgba(235, 237, 235, 1);
  display: flex;
  flex-direction: column;
  min-height: 1000px;
  padding: 50px;
`;

const SectionTitle = styled.h1`
  margin-bottom: 50px;
`;

const Deck = styled(CardDeck)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  max-width: 400px;
  margin-bottom: 20px;
`;

const IndividualCard = styled(Card)`
  margin-bottom: 20px;
`;

const Team = () => {
  const employees = useContext(UserContext);

  return (
    <Wrapper id="Team">
      <SectionTitle>About Us</SectionTitle>
      <Deck>
        {employees.map((employee) => {
          return (
            <CardWrapper key={employee.login.uuid}>
              <IndividualCard>
                <Card.Img variant="top" src={employee.picture.large} />
                <Card.Body>
                  <Card.Title>
                    {employee.name.first
                      ? `${employee.name.first} ${employee.name.last}`
                      : 'Employee'}
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit, saepe. Omnis ipsum, alias atque aliquam corporis,
                    consequuntur ratione odit in, eum fugit delectus.
                  </Card.Text>
                </Card.Body>
              </IndividualCard>
            </CardWrapper>
          );
        })}
      </Deck>
    </Wrapper>
  );
};

export default Team;
