import Arrow from "./Arrow";

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

export default PageNavigator;
