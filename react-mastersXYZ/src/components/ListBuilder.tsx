import React from "react";

const ListBuilder = () => {
  return (
    <div className="max-w-xs w-100% mt-4 border-white p-4 flex flex-col justify-center ml-auto mr-auto bg-gray-700">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Add a new item"
          className="w-[85%]
           px-2 py-3 border-amber-100 border"
        ></input>
        <button className="w-[10%] cursor-pointer p-2 bg-blue-700 rounded">+</button>
      </div>
    </div>
  );
};

export default ListBuilder;
