import React from "react";
import {
  Badge,
  CARD,
  CardSubtitle,
  CardTitle,
  Profile,
  RecommendedIcons,
  Delete,
} from "./cardStyle";

export const Card = ({ data, dispatch }) => {
  return (
    <CARD>
      <div className="card_image">
        <img src={data.houseImage} alt="House" />
        <Badge featured>FEATURED</Badge>
        <Badge>FOR SALE</Badge>
      </div>
      <div className="card_bottom">
        <Profile>
          <img src={data.profileImage} alt="Profile" />
        </Profile>
        <CardTitle>New Apartment Nice Wiew</CardTitle>
        <CardSubtitle>Quincy St, Brooklyn, NY, USA </CardSubtitle>
        <div className="card_boxes">
          <div className="card_box">
            <RecommendedIcons.BedG></RecommendedIcons.BedG>
            <CardSubtitle>{data.beds}</CardSubtitle>
          </div>
          <div className="card_box">
            <RecommendedIcons.BathG></RecommendedIcons.BathG>
            <CardSubtitle>{data.baths}</CardSubtitle>
          </div>
          <div className="card_box">
            <RecommendedIcons.CarG></RecommendedIcons.CarG>
            <CardSubtitle>{data.garage}</CardSubtitle>
          </div>
          <div className="card_box">
            <RecommendedIcons.RulerG></RecommendedIcons.RulerG>
            <CardSubtitle>{data.area}</CardSubtitle>
          </div>
        </div>
      </div>
      <div className="card_price">
        <div className="price_left">
          <CardSubtitle price>$2,800/mo</CardSubtitle>
          <CardTitle>$7,500/mo</CardTitle>
        </div>
        <div className="price_right">
          <div className="price_icon">
            <RecommendedIcons.ExpandG></RecommendedIcons.ExpandG>
          </div>
          <div className="price_icon">
            <RecommendedIcons.LoveG></RecommendedIcons.LoveG>
          </div>
        </div>
      </div>
      <Delete onClick={() => dispatch({ type: "delete", id: data.id })}>
        <RecommendedIcons.X></RecommendedIcons.X>
      </Delete>
    </CARD>
  );
};
