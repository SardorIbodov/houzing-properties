import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Burger } from "../../assets/icons/burger.svg";
import { ReactComponent as FacebookB } from "../../assets/icons/facebookB.svg";
import { ReactComponent as TwitterB } from "../../assets/icons/twitterB.svg";
import { ReactComponent as InstagramB } from "../../assets/icons/instagramB.svg";
import { ReactComponent as LinkedinB } from "../../assets/icons/linkedinB.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

export const HeaderBlock = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 15px 0;
  background: #0d263b;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1210px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  ${(prop) => {
    switch (prop.type) {
      case "headerBlock": {
        return `
					display: flex;
					justify-content: space-between;
					align-items: center;
				`;
      }
      case "headerFilter": {
        return `
					display: flex;
					column-gap: 20px;
					align-items: center;
				`;
      }
    }
  }}
  @media screen and (max-width: 900px) {
    ${(prop) => {
      switch (prop.type) {
        case "headerFilter": {
          return `
					padding: 24px;
					background: #FFFFFF;
					box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04), 0px 0px 14px rgba(0, 0, 0, 0.04), 0px 1px 5px rgba(0, 0, 0, 0.04);
					border-radius: 3px;
					flex-wrap: wrap;
					justify-content: space-between;
					row-gap: 24px;
					column-gap: 12px;
				`;
        }
      }
    }}
  }
`;

export const HeaderLogo = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const HeaderNav = styled.nav`
  position: relative;
  @media screen and (max-width: 500px) {
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    transition: 0.25s transform;
    ${({ menu }) => {
      return menu
        ? "transform: translateX(0%)"
        : "transform: translateX(-100%)";
    }}
  }
`;

export const Close = styled.div`
  display: none;
  position: absolute;
  width: 12.73px;
  height: 12.73px;
  top: 30px;
  left: 20px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 64px;
  row-gap: 24px;
  overflow: auto;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const HeaderBurger = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  justify-content: center;
  row-gap: 24px;
  ${({ type }) => {
    return type === "social"
      ? `
			display: none;
			margin-top: 100px;
		`
      : `
				display: flex;
				`;
  }}
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

export const Social = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  &:hover {
    transition: 0.25s all;
    background-color: rgba(13, 38, 59, 0.1);
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    color: #0d263b;
  }
`;

export const HeaderProfile = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const HeaderIcons = styled.div``;
HeaderIcons.Logo = styled(Logo)``;
HeaderIcons.Person = styled(Person)``;
HeaderIcons.Burger = styled(Burger)``;
HeaderIcons.FacebookB = styled(FacebookB)``;
HeaderIcons.InstagramB = styled(InstagramB)``;
HeaderIcons.TwitterB = styled(TwitterB)``;
HeaderIcons.LinkedinB = styled(LinkedinB)``;
HeaderIcons.CloseIcon = styled(CloseIcon)``;
