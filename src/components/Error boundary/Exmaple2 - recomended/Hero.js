import React from "react";

function Hero({ heroName }) {
  if (heroName === "joker" || heroName === "Joker") {
    throw new Error("Not a hero");
  }

  return <div>Hero - {heroName}</div>;
}

export default Hero;
