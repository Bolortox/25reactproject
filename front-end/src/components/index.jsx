"use client";

import { useState } from "react";
import data from "./data";

export const Accordion = () => {
  const [liked, setLiked] = useState(null);

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div> NO data</div>
        )}
      </div>
    </div>
  );
};
