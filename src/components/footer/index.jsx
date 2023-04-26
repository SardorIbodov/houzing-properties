import React from "react";
import {
  Contacts,
  Container,
  FOOTER,
  Top,
  Title,
  Box,
  Icons,
  Subtitle,
  Socials,
  Social,
  Nav,
  Column,
  Bottom,
  ToTop,
} from "./style";

export class Footer extends React.Component {
  render() {
    return (
      <FOOTER>
        <Container>
          <Top>
            <Contacts>
              <Title>Contact Us</Title>
              <Box>
                <Icons.Location></Icons.Location>
                <Subtitle contact>
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </Subtitle>
              </Box>
              <Box>
                <Icons.Phone></Icons.Phone>
                <Subtitle contact>123 456 7890</Subtitle>
              </Box>
              <Box last>
                <Icons.Email></Icons.Email>
                <Subtitle contact>support@houzing.com</Subtitle>
              </Box>
              <Socials>
                <Social>
                  <Icons.Facebook></Icons.Facebook>
                </Social>
                <Social>
                  <Icons.Instagram></Icons.Instagram>
                </Social>
                <Social>
                  <Icons.Twitter></Icons.Twitter>
                </Social>
                <Social>
                  <Icons.Linkedin></Icons.Linkedin>
                </Social>
              </Socials>
            </Contacts>
            <Nav>
              <Column>
                <Title>Discover</Title>
                <Subtitle>Chicago</Subtitle>
                <Subtitle>Los Angeles</Subtitle>
                <Subtitle>Miami</Subtitle>
                <Subtitle contact>New York</Subtitle>
              </Column>
              <Column>
                <Title>Lists by Category</Title>
                <Subtitle>Apartments</Subtitle>
                <Subtitle>Condos</Subtitle>
                <Subtitle>Houses</Subtitle>
                <Subtitle>Offices</Subtitle>
                <Subtitle>Retail</Subtitle>
                <Subtitle contact>Villas</Subtitle>
              </Column>
              <Column>
                <Title>Lists by Category</Title>
                <Subtitle>About Us</Subtitle>
                <Subtitle>Terms & Conditions</Subtitle>
                <Subtitle>Support Center</Subtitle>
                <Subtitle contact>Contact Us</Subtitle>
              </Column>
            </Nav>
          </Top>
          <Bottom>
            <Icons.Logo></Icons.Logo>
            <Subtitle contact>
              Copyright © 2021 CreativeLayers. All Right Reserved.
            </Subtitle>
          </Bottom>
        </Container>
      </FOOTER>
    );
  }
}
