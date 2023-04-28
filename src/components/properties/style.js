import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 54px 0 96px 0;
`;

export const Container = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

export const Subtitle = styled.h3`
  margin-top: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 70px;
`;

export const CardsNumber = styled.span`
  color: #696969;
`;

export const Number = styled.span`
  color: #0d263b;
`;

export const CardsWrapper = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
