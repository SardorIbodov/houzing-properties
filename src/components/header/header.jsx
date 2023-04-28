import React, { useState } from "react";
import {
  HeaderIcons,
  HeaderBlock,
  HeaderLink,
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
  );
};
