import { Cards } from "../context/CardsContext/CardsContext";
import { Card } from "../card/card";

export const Properties = () => {
  const [data, dispatch] = Cards();
  return (
    <div
      style={{
        maxWidth: "1180px",
        margin: "5px auto 5px",
        rowGap: "20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {data.map((card) => {
        return <Card data={card} key={card.id}></Card>;
      })}
    </div>
  );
};
