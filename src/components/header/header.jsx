import React, { useState } from "react";
import {
  HEADER,
  HeaderIcons,
  HeaderBlock,
  HeaderLink,
  HeaderFilter,
  HeaderButton,
  Container,
  HeaderLogo,
  HeaderNav,
  NavItem,
  HeaderProfile,
  HeaderBurger,
  Social,
  HeaderMenu,
  Close,
} from "./style";

export const Header = () => {
  const [menu, toggleMenu] = useState(false);

  return (
    <HEADER>
      <HeaderBlock>
        <Container type="headerBlock">
          <HeaderBurger onClick={() => toggleMenu(!menu)}>
            <HeaderIcons.Burger></HeaderIcons.Burger>
          </HeaderBurger>
          <HeaderLogo>
            <HeaderIcons.Logo></HeaderIcons.Logo>
          </HeaderLogo>
          <HeaderNav menu={menu}>
            <HeaderMenu>
              <NavItem>
                <HeaderLink href="#">Home</HeaderLink>
              </NavItem>
              <NavItem>
                <HeaderLink href="#">Properties</HeaderLink>
              </NavItem>
              <NavItem>
                <HeaderLink href="#">Contacts</HeaderLink>
              </NavItem>
              <NavItem type="social">
                <Close onClick={() => toggleMenu(!menu)}>
                  <HeaderIcons.CloseIcon></HeaderIcons.CloseIcon>
                </Close>
                <Social>
                  <HeaderIcons.FacebookB></HeaderIcons.FacebookB>
                </Social>
                <Social>
                  <HeaderIcons.TwitterB></HeaderIcons.TwitterB>
                </Social>
                <Social>
                  <HeaderIcons.InstagramB></HeaderIcons.InstagramB>
                </Social>
                <Social>
                  <HeaderIcons.LinkedinB></HeaderIcons.LinkedinB>
                </Social>
              </NavItem>
            </HeaderMenu>
          </HeaderNav>
          <HeaderProfile>
            <HeaderIcons.Person></HeaderIcons.Person>
          </HeaderProfile>
        </Container>
      </HeaderBlock>

      {/* <HeaderFilter>
        <Container type="headerFilter">
          <div className="header_input">
            <HeaderIcons.InputLogo></HeaderIcons.InputLogo>
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
          </div>
          <HeaderButton>
            <HeaderIcons.StatusLogo></HeaderIcons.StatusLogo>
            <span>Status</span>
          </HeaderButton>
          <HeaderButton>
            <HeaderIcons.PriceLogo></HeaderIcons.PriceLogo>
            <span>Price</span>
          </HeaderButton>
          <HeaderButton>
            <HeaderIcons.AdvancedLogo></HeaderIcons.AdvancedLogo>
            <span>Advanced</span>
          </HeaderButton>
          <HeaderButton search>
            <HeaderIcons.SearchLogo></HeaderIcons.SearchLogo>
            <span>Search</span>
          </HeaderButton>
        </Container>
      </HeaderFilter> */}
    </HEADER>
  );
};
