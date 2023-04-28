import { Cards } from "../context/CardsContext/CardsContext";
import { Card } from "../card/card";
import {
  Container,
  Title,
  Wrapper,
  Subtitle,
  Content,
  CardsNumber,
  Number,
  CardsWrapper,
} from "./style";

export const Properties = () => {
  const [data, dispatch] = Cards();
  return (
    <Wrapper>
      <Container>
        <Title>Properties</Title>
        <Subtitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Subtitle>
        <Content>
          <CardsNumber>
            <Number>{data.length}</Number> results
          </CardsNumber>
          <CardsWrapper>
            {data.map((item) => {
              return <Card data={item} dispatch={dispatch} key={item.id} />;
            })}
          </CardsWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
};
