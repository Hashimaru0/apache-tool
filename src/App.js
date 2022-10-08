import Header from "./Header";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Popular from "./pages/Popular";
import OnSale from "./pages/OnSale";
import Free from "./pages/Free";

function App() {
  const [popularData, setPopularData] = useState(null);
  const [onSaleData, setOnSaleData] = useState(null);
  const [freeData, setFreeData] = useState(null);

  const fetchData = async () => {
    fetch("/.netlify/functions/apiFetch")
      .then((response) => response.json())
      .then((data) => {
        let obj = data.data;
        let dataArr = Object.keys(obj).map((key) => obj[key]);
        dataArr.sort(
          (a, b) =>
            b.owners.split(" ")[0].replace(/,/g, "") -
            a.owners.split(" ")[0].replace(/,/g, "")
        );

        let dataArrCopy = dataArr.slice();

        let popularArr = [];
        let saleArr = [];
        let freeArr = [];

        let popPage = [];
        let salePage = [];
        let freePage = [];

        for (let i = 0; i < dataArrCopy.length; i++) {
          popPage.push(dataArrCopy[i]);
          Number(dataArrCopy[i].discount) > 0 && salePage.push(dataArrCopy[i]);
          Number(dataArrCopy[i].price) === 0 && freePage.push(dataArrCopy[i]);

          if (popPage.length >= 48 || i === dataArrCopy.length - 1) {
            popularArr.push(popPage);
            popPage = [];
          }
          if (salePage.length >= 48 || i === dataArrCopy.length - 1) {
            saleArr.push(salePage);
            salePage = [];
          }
          if (freePage.length >= 48 || i === dataArrCopy.length - 1) {
            freeArr.push(freePage);
            freePage = [];
          }
        }
        setPopularData(popularArr);
        setOnSaleData(saleArr);
        setFreeData(freeArr);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ textShadow: "0px 1px 1px #333" }}
      className="bg-[#171A21] min-h-screen"
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Popular data={popularData} />} />
          <Route path="/on_sale" element={<OnSale data={onSaleData} />} />
          <Route path="/free" element={<Free data={freeData} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
