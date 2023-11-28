import React from "react";
import { Card, Rate } from "antd";
const { Meta } = Card;

const MovieCard = ({ title, Description, posterUrl, rating }) => (
  <Card
    hoverable
    cover={
      <img
        height={300}
        width={300}
        className="object-cover space-y-3"
        alt="example"
        src={posterUrl}
      />
    }
  >
    <Meta title={title} description={Description} />
    <Rate disabled defaultValue={rating} />
  </Card>
);

export default MovieCard;
