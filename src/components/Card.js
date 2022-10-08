const Card = (props) => {
  return (
    <div className="relative flex flex-col w-[75vw] sm:w-[15rem] h-[62.5vw] sm:h-[12.5rem] bg-[#222733] mx-[0.5rem] rounded mt-4 hover:scale-[1.05] transition">
      <a
        href={`https://store.steampowered.com/app/${props.appid}`}
        target="_blank"
        className="absolute w-full h-full z-50"
        rel="noreferrer"
      >
        <div className="absolute top-[0.22rem] right-[-1.84rem] rotate-45">
          {props.discount > 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 300 102.07"
              width="100"
              height="34"
            >
              <path
                d="M209.83 -9.7394e-05L299.757 89.9269L2.81164e-05 89.9269L89.9271 -0.000100596L209.83 -9.7394e-05Z"
                fill="#43c606"
              />
              <path
                d="M-9.15527e-05 89.927L24.2236 89.927L12.1401 102.067L-9.15527e-05 89.927Z"
                fill="#339107"
              />
              <path
                d="M275.776 89.927L300 89.927L287.916 102.067L275.776 89.927Z"
                fill="#339107"
              />
              <text
                y="66"
                x="143"
                fill="white"
                fontSize={"3.5rem"}
                textAnchor="middle"
              >
                {`-${props.discount}%`}
              </text>
            </svg>
          )}
        </div>
        <img
          className="rounded-t"
          src={`https://cdn.akamai.steamstatic.com/steam/apps/${props.appid}/header.jpg`}
          alt="header"
        ></img>
        <div className="flex flex-col justify-between grow rounded-b p-2">
          <div className="text-white text-lg break-words overflow-hidden leading-[1.25em] max-h-[2.5em]">
            {props.name}
          </div>
          <div className="flex items-center self-end">
            <div
              className={`${
                props.discount > 0 || props.price === "0"
                  ? "text-[#43c606]"
                  : "text-neutral-400"
              } font-bold tracking-wide text-base mr-1`}
            >
              {`${
                props.price === "0"
                  ? "Free"
                  : (props.price / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
              }`}
            </div>
            <div className="text-neutral-400 text-sm line-through">
              {props.discount > 0 &&
                (props.initialPrice / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
