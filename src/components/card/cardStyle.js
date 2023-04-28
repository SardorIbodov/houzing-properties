import styled from "styled-components";
import { ReactComponent as BedG } from "../../assets/icons/bedG.svg";
import { ReactComponent as BathG } from "../../assets/icons/bathG.svg";
import { ReactComponent as CarG } from "../../assets/icons/carG.svg";
import { ReactComponent as RulerG } from "../../assets/icons/rulerG.svg";
import { ReactComponent as ExpandG } from "../../assets/icons/expandG.svg";
import { ReactComponent as LoveG } from "../../assets/icons/loveG.svg";
import { ReactComponent as X } from "../../assets/icons/x.svg";

export const CARD = styled.div`
  position: relative;
  border: 1px solid #e6e9ec;
  box-sizing: border-box;
  .card_image {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      vertical-align: top;
    }
  }
  .card_bottom {
    position: relative;
    padding: 20px 20px 16px 20px;
    border-bottom: 1px solid #e6e9ec;

    .card_boxes {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .card_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .card_price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;

    .price_right {
      display: flex;
      column-gap: 10px;
      .price_icon {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: 0.25s all linear;
      }
      .price_icon:hover {
        background-color: #f6f8f9;
      }
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  z-index: 2;
  top: 20px;
  display: inline-block;
  padding: 5px 12px;
  color: white;
  text-transform: uppercase;
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  border-radius: 2px;
  ${(props) => {
    return props.featured
      ? `
			left: 20px;
			background-color: #0061DF;
		`
      : `
			right: 20px;
			background-color: #0D263B;
		`;
  }};
`;

export const Profile = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -21px;
  right: 20px;
  background-color: white;
  border-radius: 50%;
  padding: 1px;
  cursor: pointer;
`;

export const CardTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

export const CardSubtitle = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  padding: 4px 0 16px 0;
  ${(props) =>
    props.price
      ? `
			text-decoration: line-through;
			font-size: 12px;
			line-height: 20px;
			padding: 0;
		`
      : null};
`;

export const Delete = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
`;

export const RecommendedIcons = styled.div``;
RecommendedIcons.BedG = styled(BedG)``;
RecommendedIcons.BathG = styled(BathG)``;
RecommendedIcons.CarG = styled(CarG)``;
RecommendedIcons.RulerG = styled(RulerG)``;
RecommendedIcons.ExpandG = styled(ExpandG)``;
RecommendedIcons.LoveG = styled(LoveG)``;
RecommendedIcons.X = styled(X)`
  width: 20px;
  height: 20px;
`;
