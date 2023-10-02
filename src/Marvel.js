import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Marvel.css";
import Marveltable from "./Marveltable";

function Marvel() {
  const [marvelResult, setmarvelResult] = useState([]);

  const marvelApp = () => {
    try {
      axios
        .get(
          "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d659d1321d798a47cc72983456348c34&hash=5f3d304a542792edb78603e37e2a98d1"
        )
        .then((res) => {
          console.log(res.data.data.results);
          setmarvelResult(res.data.data.results);
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    marvelApp();
  }, []);

 

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
       
          {marvelResult.map((value,index) => (
            <Marveltable
                id = {index}
              name={value.name}
              description={value.description}
              thumbnail={value.thumbnail}
            />
          ))}
       
      </table>
   
    </>
  );
}

export default Marvel;
