import React, { useState } from "react";
import OfferCard from "./OfferCard";

function App() {
  const [data, setData] = useState(false);

  const toggleOffer = () => {
    setData(!data);
  };

  return (
    <div>
      <button type="button" onClick={toggleOffer}>
        Offer Entry
      </button>
      {data && <OfferCard />}
    </div>
  );
}

export default App;
