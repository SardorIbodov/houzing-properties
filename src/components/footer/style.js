import styled from "styled-components";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as TopIcon } from "../../assets/icons/top.svg";

export const FOOTER = styled.section`
  background: #0d263b;
`;

export const Container = styled.div`
  max-width: 1210px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Top = styled.div`
  padding: 48px 0 24px 0;
  display: flex;
  column-gap: 172px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  @media screen and (max-width: 900px) {
    flex-direction: column;
    row-gap: 48px;
  }
`;

export const Contacts = styled.div`
  max-width: 300px;
`;

export const Title = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

export const Subtitle = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  ${(props) => (props.contact ? "margin-bottom: 0" : "margin-bottom: 20px")}
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  column-gap: 13px;
  ${(props) => (props.last ? "margin-bottom: 0" : "margin-bottom: 20px")}
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

export const Social = styled.div`
  width: 36px;
  height: 36px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: 0.25s all linear;
  border-radius: 3px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Icons = styled.div``;
Icons.Location = styled(Location)``;
Icons.Phone = styled(Phone)``;
Icons.Email = styled(Email)``;
Icons.Facebook = styled(Facebook)``;
Icons.Twitter = styled(Twitter)``;
Icons.Instagram = styled(Instagram)``;
Icons.Linkedin = styled(Linkedin)``;
Icons.Logo = styled(Logo)``;
Icons.TopIcon = styled(TopIcon)``;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    row-gap: 48px;
  }
`;

export const Column = styled.div``;

export const Bottom = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    row-gap: 24px;
  }
`;

export const ToTop = styled.div`
  cursor: pointer;
  position: fixed;
  right: 50px;
  bottom: 11px;
  width: 45px;
  height: 45px;
  background: #0061df;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;
