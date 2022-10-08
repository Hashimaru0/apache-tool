const CardSkeletonPage = () => {
  return [...Array(24)].map((el, i) => (
    <div
      key={i}
      className="relative flex flex-col w-[75vw] sm:w-[15rem] h-[62.5vw] sm:h-[12.5rem] bg-[#222733] mx-[0.5rem] rounded mt-4"
    >
      <div className="h-[45%] w-full bg-[#384154] rounded-t animate-pulse"></div>
      <div className="h-3 w-[75%] rounded-full bg-[#384154] ml-[0.7rem] mt-[1rem] animate-pulse"></div>
      <div className="h-3 w-[35%] rounded-full bg-[#384154] ml-[0.7rem] mt-[0.5rem] animate-pulse"></div>
      <div className="h-3 w-12 rounded-full bg-[#384154] mt-auto mr-[0.5rem] mb-[1rem] self-end animate-pulse"></div>
    </div>
  ));
};

export default CardSkeletonPage;
