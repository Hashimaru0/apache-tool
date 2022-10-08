import { useState } from "react";
import PageNavigator from "../components/PageNavigator";
import CardSkeletonPage from "../components/CardSkeletonPage";
import Card from "../components/Card";

const OnSale = (props) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap justify-center max-w-[67rem] pt-20 px-[1.5rem] mb-5">
        {props.data ? (
          <>
            {props.data.length > 1 && (
              <PageNavigator
                pageCount={props.data.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
            {props.data[currentPage].map((game, i) => (
              <Card
                key={i}
                appid={game.appid}
                name={game.name}
                price={game.price}
                discount={game.discount}
                initialPrice={game.initialprice}
              />
            ))}
            {props.data.length > 1 && (
              <PageNavigator
                pageCount={props.data.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        ) : (
          <CardSkeletonPage />
        )}
      </div>
    </div>
  );
};

export default OnSale;
