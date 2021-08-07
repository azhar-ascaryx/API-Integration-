import React from "react";
import Characteritem from "./Characteritem";
const Charactergrid = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((items, key) => (
        <Characteritem key={items.char_id} items={items}/>
      ))}
    </section>
  );
};

export default Charactergrid;
