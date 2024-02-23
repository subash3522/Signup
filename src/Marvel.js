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

  useEffect(() => {
    try {
      axios
        .get(
          "https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get"
        )
        .then((res) => {
          console.log(res.data.products.data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const [pageNumber, setPageNumber] = useState(1);
  const pageItems = 5;

  const pageHandler = (page) => {
    setPageNumber(page);
  };

  const startIndex = (pageNumber - 1) * pageItems;
  const endIndex = startIndex + pageItems;
  const pageLength = Math.ceil(marvelResult.length / pageItems);

  const itemDetails = marvelResult.slice(startIndex, endIndex);

  const pageNumberRender = () => {
    const pageNumbers = [];

    for (let i = 1; i < pageLength; i++) {
      pageNumbers.push(
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex">
            <li className="page-item">
              <span
                className="page-link"
                key={i}
                onClick={() => pageHandler(i)}
              >
                {i}
              </span>
            </li>
          </ul>
        </nav>
      );
    }
    return pageNumbers;
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="th1">Thumbnail</th>
            <th className="th2">Name</th>
            <th className="th3">Description</th>
          </tr>
        </thead>

        {itemDetails.map((value, index) => (
          <Marveltable
            id={index}
            name={value.name}
            description={value.description}
            thumbnail={value.thumbnail}
          />
        ))}
      </table>
      <div>{pageNumberRender()}</div>
    </>
  );
}

export default Marvel;
