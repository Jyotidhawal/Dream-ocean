import React from "react";

const Task = ({task,deleteItem}) => {
  return (
    <div>
      <div className="flex justify-center items-center my-2">
        <div className="bg-slate-300 h-auto rounded-full font-serif font-bold flex justify-between px-4 items-center w-52 shadow-md">
          {task}
          <i
            className="fa-solid fa-trash hover:bg-red-500 p-2 hover:rounded-full rounded-sm cursor-pointer"
            onClick={() => {
              deleteItem(task);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Task;
