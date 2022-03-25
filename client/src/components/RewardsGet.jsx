import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import PullData from "./DataPull";

const RewardsGet = () => {
  const [prizes, setPrizes] = useState([]);
  const [prizeName, setPrizeName] = useState([]);
  const [prizeImg, setPrizeImg] = useState([]);

  useEffect(() => {
    let prizeNameArr = [];
    let prizeImgLinkArr = [];

    const getPrizes = async () => {
      let res = await axios.get("http://localhost:3001/prizes");
      setPrizes(res.data);

      prizes.map((ex) => {
        prizeNameArr.push(ex.name);
        prizeImgLinkArr.push(ex.img);
      });

      setPrizeName(prizeNameArr);
      setPrizeImg(prizeImgLinkArr);
    };

    getPrizes();
  }, []);

  console.log(prizes)

  return (
    <div>
      <div>
        <ul className="thePrizes">
          <li>
            <img src={prizeImg[0]} alt="Rasta Banana" className="prize" />
            <p>{prizeName[0]}</p>
            <br />
            <p>20 tickets</p>
          </li>
          <li>
            <img src={prizeImg[1]} alt="Teddy Bear" className="prize" />
            <p>{prizeName[1]}</p>
            <br />
            <p>10 tickets</p>
          </li>
          <li>
            <img src={prizeImg[2]} alt="Car" className="prize" id="car" />
            <p>{prizeName[2]}</p>
            <br />
            <p>100 tickets</p>
          </li>
        </ul>
      </div>
      <div>
        <ul className="thePrizes">
          <li>
            <img src={prizeImg[3]} alt="Chicken" className="prize" />
            <p>{prizeName[3]}</p>
            <br />
            <p>75 tickets</p>
          </li>
          <li>
            <img src={prizeImg[4]} alt="Goldfish" className="prize" />
            <p>{prizeName[4]}</p>
            <br />
            <p>300 tickets</p>
          </li>
          <li>
            <img src={prizeImg[5]} alt="Watch" className="prize" id="watch" />
            <p>{prizeName[5]}</p>
            <br />
            <p>35 tickets</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RewardsGet;
