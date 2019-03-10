import React from "react";

const Row = props =>
  <div className={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Row;


// {
//     "id": 1,
//     "image": "http://www.simpsoncrazy.com/content/pictures/regulars/ComicBookGuy2.gif",
//     "clicked": false
//   },