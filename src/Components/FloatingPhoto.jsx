import React, { useEffect, useState } from "react";
import "./Css/floatingphoto.css";

import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";
import hero5 from "../assets/images/hero5.png";
import hero6 from "../assets/images/hero6.png";
import hero7 from "../assets/images/hero7.png";
import hero8 from "../assets/images/hero8.png";

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

function FloatingPhoto() {

  const [cells, setCells] = useState(Array(9).fill(null));
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const generateGrid = () => {

    const newGrid = Array(9).fill(null);

    const randomCells = shuffle([0,1,2,3,4,5,6,7,8]).slice(0,5);

    const randomImages = shuffle(images).slice(0,5);

    randomCells.forEach((cellIndex, index)=>{
      newGrid[cellIndex]=randomImages[index];
    });

    setCells(newGrid);
  };

  useEffect(()=>{

    generateGrid();

    const interval=setInterval(()=>{
      generateGrid();
    },2000);

    return ()=>clearInterval(interval);

  },[]);

  return (

    <div className="floating-container">

      {cells.map((photo,index)=>(
        <div key={index} className="grid-cell">

          {photo && (
            <div className="floating-photo">
              <img src={photo} alt="profile"/>
            </div>
          )}

        </div>
      ))}

    </div>

  );
}

export default FloatingPhoto;