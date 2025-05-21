"use client";

import { useState } from "react";
import data from "./data";
import "./style.css" ;

export const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
   
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div className="wrapper">
      <button>Enable multi selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                selected === dataItem.id ?
                <div className="content"> {dataItem.answer} </div>
                : null
              }
            </div>
          ))
        ) : (
          <div> NO data</div>
        )}
      </div>
    </div>
  );
};
