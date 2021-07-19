import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [cardFront, setCardFront] = useState(true)

  const { name, hp, sprites } = pokemon

  function handleClick() {
    setCardFront((cardFront) => !cardFront)
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={cardFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
