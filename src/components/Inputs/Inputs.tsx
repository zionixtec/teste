import React from "react";

const Inputs = (props: any) => {
  return (
    <input
      className="w-[18.75rem] sm:w-[25rem] h-[3.125rem] sm:h-[3.375rem] rounded-md outline-none text-gray-600 pl-10 mb-4"
      {...props}
    />
  );
};

export default Inputs;
