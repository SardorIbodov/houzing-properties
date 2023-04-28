import React, { useState } from "react";
import {
  HeaderIcons,
  HeaderFilter,
  HeaderButton,
  Container,
  HeaderInput,
  Input,
  ButtonText,
} from "./style";

const Filter = () => {
  return (
    <HeaderFilter>
      <Container type="headerFilter">
        <HeaderInput>
          <HeaderIcons.InputLogo></HeaderIcons.InputLogo>
          <Input placeholder={"Enter an address, city, ZIP code"}></Input>
        </HeaderInput>
        <HeaderButton>
          <HeaderIcons.StatusLogo></HeaderIcons.StatusLogo>
          <ButtonText>Status</ButtonText>
          <HeaderIcons.ToBottom></HeaderIcons.ToBottom>
        </HeaderButton>
        <HeaderButton>
          <HeaderIcons.PriceLogo></HeaderIcons.PriceLogo>
          <ButtonText>Price</ButtonText>
          <HeaderIcons.ToBottom></HeaderIcons.ToBottom>
        </HeaderButton>
        <HeaderButton type="advanced">
          <HeaderIcons.AdvancedLogo></HeaderIcons.AdvancedLogo>
          <ButtonText type="advanced">Advanced</ButtonText>
        </HeaderButton>
        <HeaderButton type="search">
          <HeaderIcons.SearchLogo></HeaderIcons.SearchLogo>
          <ButtonText type="search">Search</ButtonText>
        </HeaderButton>
      </Container>
    </HeaderFilter>
  );
};

export default Filter;