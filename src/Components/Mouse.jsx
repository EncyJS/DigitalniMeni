import React from "react";

const Mouse = () => {
  return (
    <div className="@apply block w-[25px] h-[95px] mt-[125px] mb-0 mx-auto items-center">
      <div className="@apply h-[42px] w-6 rounded-[14px] border-2 top-[170px]">
        <div className="@apply h-[5px] w-0.5 block relative h-1 w-1 mx-auto my-[5px] rounded-lg bg-white"></div>
      </div>
      <div className="@apply justify-center items-center block">
        <span className="@apply transform rotate-45 block w-[15px] h-[5px] rotate-45 w-4 h-4 ml-1 mr-0 mt-0 mb-[3px] border-r-2 border-r-white border-b-2 border-b-white border-solid block"></span>
        <span className="@apply transform rotate-45 block w-[15px] h-[5px] rotate-45 w-4 h-4 ml-1 mr-0 mt-0 mb-[3px] border-r-2 border-r-white border-b-2 border-b-white border-solid block"></span>
        <span className="@apply transform rotate-45 block w-[15px] h-[5px] rotate-45 w-4 h-4 ml-1 mr-0 mt-0 mb-[3px] border-r-2 border-r-white border-b-2 border-b-white border-solid block"></span>
      </div>
    </div>
  );
};

console.log(Mouse);
export default Mouse;
