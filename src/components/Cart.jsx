import React from "react";

const Cart = ({list,deleteItem}) => {
  return (
    <div>
      <div className="mt-8">
        {list.map((item) => (
          <Tasks key={item} task={item} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
