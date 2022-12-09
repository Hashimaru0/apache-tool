# Apache
#### Tool / API Fetching / CORS Proxy
A list of Steam game prices with filter for those who are on sale or free.  
Live demo: https://apache-tool.netlify.app/
## How It Works

### Fetch Steam Game Data
SteamSpy API is used to get data, except they don't have CORS policy enabled so I used Netlify serverless functions to proxy it and get the data that way.
The data is split between Popular, On Sale and Free games.
```
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
```
### Multiple Pages
Each page is limited to 48 cards (because it splits evenly to 4, 3 and 2 columns).
Every category of games is an array of card arrays, so it can be displayed as pages on screen.
```
const PageNavigator = (props) => {
  return (
    <div className="flex justify-center w-full mt-5">
      <button
        className="flex justify-center items-center hover:bg-neutral-600 transition w-5 h-5 rounded"
        onClick={() =>
          props.setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
        }
      >
        <Arrow />
      </button>
      {[...Array(props.pageCount)].map((num, i) => (
        <button
          key={i}
          className={`flex justify-center items-center text-[#878FA1] ${
            i === props.currentPage && "underline"
          } hover:bg-neutral-600 transition w-5 h-5 rounded`}
          onClick={() => props.setCurrentPage(i)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="flex justify-center items-center hover:bg-neutral-600 transition w-5 h-5 rounded rotate-180"
        onClick={() =>
          props.setCurrentPage((prev) =>
            props.pageCount > prev + 1 ? prev + 1 : prev
          )
        }
      >
        <Arrow />
      </button>
    </div>
  );
};
```
### Routing
Switching between game categories is handled with react-router-dom.
```
<Routes>
  <Route path="/" element={<Popular data={popularData} />} />
  <Route path="/on_sale" element={<OnSale data={onSaleData} />} />
  <Route path="/free" element={<Free data={freeData} />} />
</Routes>
```
