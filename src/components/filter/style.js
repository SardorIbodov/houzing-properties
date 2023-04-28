import styled from "styled-components";
import { ReactComponent as InputLogo } from "../../assets/icons/input-icon.svg";
import { ReactComponent as StatusLogo } from "../../assets/icons/status.svg";
import { ReactComponent as PriceLogo } from "../../assets/icons/price.svg";
import { ReactComponent as AdvancedLogo } from "../../assets/icons/advanced.svg";
import { ReactComponent as SearchLogo } from "../../assets/icons/search.svg";
import { ReactComponent as ToBottom } from "../../assets/icons/toBottom.svg";

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

export const HeaderIcons = styled.div``;
HeaderIcons.InputLogo = styled(InputLogo)``;
HeaderIcons.StatusLogo = styled(StatusLogo)``;
HeaderIcons.PriceLogo = styled(PriceLogo)``;
HeaderIcons.AdvancedLogo = styled(AdvancedLogo)``;
HeaderIcons.SearchLogo = styled(SearchLogo)``;
HeaderIcons.ToBottom = styled(ToBottom)`
  display: none;
  @media screen and (max-width: 900px) {
    display: inline-block;
  }
`;

export const HeaderFilter = styled.div`
  padding: 10px 0;
  background-color: #ffffff;
  column-gap: 20px;

  @media screen and (max-width: 900px) {
    padding: 24px 16px;
  }
`;

export const HeaderInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: 8px;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  padding: 15px;
  @media screen and (max-width: 900px) {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e6e9ec;
  }
`;

export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
}))`
  flex: 1;
  border: none;
  outline: none;
  height: 100%;
  &::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
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
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    switch (props.type) {
      case "search":
        return `
			width: 180px;
			height: 44px;
			color: white;
			background: #0061DF;
			border: 1px solid #0061DF;
			`;
      default:
        return `
			width: 131px;
			height: 44px;
			color: #0D263B;
			border: 1px solid #E6E9EC;
			`;
    }
  }}

  @media screen and (max-width: 900px) {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e6e9ec;
    justify-content: space-between;
    padding: 12px 15px;
    ${(props) => {
      switch (props.type) {
        case "search":
          return `
					padding: 0;
					width: 47%;
					justify-content: center;
				`;
        case "advanced":
          return `
					padding: 0;
					width: 47%;
					justify-content: center;
				`;
      }
    }};
  }
`;

export const ButtonText = styled.span`
  @media screen and (max-width: 900px) {
    ${(props) => {
      return props.type === "advanced" || props.type === "search"
        ? `flex-grow: 0`
        : ` flex-grow: 1;
  			text-align: left;`;
    }}
  }
`;
