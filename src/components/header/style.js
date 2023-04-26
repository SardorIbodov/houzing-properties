import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as InputLogo } from "../../assets/icons/input-icon.svg";
import { ReactComponent as StatusLogo } from "../../assets/icons/status.svg";
import { ReactComponent as PriceLogo } from "../../assets/icons/price.svg";
import { ReactComponent as AdvancedLogo } from "../../assets/icons/advanced.svg";
import { ReactComponent as SearchLogo } from "../../assets/icons/search.svg";
import { ReactComponent as Burger } from "../../assets/icons/burger.svg";
import { ReactComponent as FacebookB } from "../../assets/icons/facebookB.svg";
import { ReactComponent as TwitterB } from "../../assets/icons/twitterB.svg";
import { ReactComponent as InstagramB } from "../../assets/icons/instagramB.svg";
import { ReactComponent as LinkedinB } from "../../assets/icons/linkedinB.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

export const HEADER = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  ${(props) =>
    props.y > 50 ? "box-shadow: 0 0 100px 0 #0D263B" : "box-shadow: none"};
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
`;

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background: #0d263b;
  overflow: hidden;
`;

export const HeaderLogo = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const HeaderNav = styled.nav`
  position: relative;
  @media screen and (max-width: 500px) {
    position: absolute;
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
HeaderIcons.InputLogo = styled(InputLogo)``;
HeaderIcons.StatusLogo = styled(StatusLogo)``;
HeaderIcons.PriceLogo = styled(PriceLogo)``;
HeaderIcons.AdvancedLogo = styled(AdvancedLogo)``;
HeaderIcons.SearchLogo = styled(SearchLogo)``;
HeaderIcons.Burger = styled(Burger)``;
HeaderIcons.FacebookB = styled(FacebookB)``;
HeaderIcons.InstagramB = styled(InstagramB)``;
HeaderIcons.TwitterB = styled(TwitterB)``;
HeaderIcons.LinkedinB = styled(LinkedinB)``;
HeaderIcons.CloseIcon = styled(CloseIcon)``;

export const HeaderFilter = styled.div`
  padding: 10px 0;
  background-color: #ffffff;
  column-gap: 20px;

  .header_input {
    flex: 1;
    display: flex;
    align-items: center;
    column-gap: 8px;
    border: 1px solid #e6e9ec;
    border-radius: 2px;
    padding: 15px;

    input {
      flex: 1;
      border: none;
      outline: none;
      height: 100%;
    }

    input::placeholder {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #0d263b;
    }
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  column-gap: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  border-radius: 2px;
  ${(prop) =>
    prop.search
      ? `	
			padding: 12px 54px;
			color: white;
			background: #0061DF;
			border: 1px solid #0061DF;
			`
      : `	
			padding: 12px 30px;
			color: #0D263B;
			border: 1px solid #E6E9EC;
		`}
`;
