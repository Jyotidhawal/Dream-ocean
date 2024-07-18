import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderNow from "./OrderNow";

const Menu = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error("Please enter something");
      return;
    }
    const existingItem = list.find((listItem) => listItem.name === item);
    if (existingItem) {
      setList(
        list.map((listItem) =>
          listItem.name === item
            ? { ...listItem, quantity: listItem.quantity + quantity }
            : listItem
        )
      );
    } else {
      setList((list) => [...list, { name: item, quantity }]);
    }
    setItem("");
    setQuantity(1);
  };

  const deleteItem = (itemName) => {
    setList(list.filter((listItem) => listItem.name !== itemName));
  };

  let isorderd=false;

  


  const menuItems = {
    "Fast Food": [
      { name: "Dosa", price: 50 },
      { name: "Dabeli", price: 30 },
      { name: "Pav Bhaji", price: 60 },
      { name: "Burger", price: 70 },
      { name: "Pizza", price: 120 },
      { name: "Vada Pav", price: 20 },
      { name: "Sandwich", price: 50 },
      { name: "Samosa", price: 10 },
      { name: "Kachori", price: 15 },
      { name: "Bhel Puri", price: 40 },
    ],
    Sabji: [
      { name: "Paneer Tikka Masala", price: 150 },
      { name: "Aloo Gobi", price: 100 },
      { name: "Chana Masala", price: 120 },
      { name: "Dal Tadka", price: 80 },
      { name: "Palak Paneer", price: 140 },
      { name: "Bhindi Masala", price: 90 },
      { name: "Baingan Bharta", price: 110 },
      { name: "Matar Paneer", price: 130 },
      { name: "Kadai Paneer", price: 150 },
      { name: "Mix Veg", price: 120 },
    ],
    Roti: [
      { name: "Tawa Roti", price: 10 },
      { name: "Butter Naan", price: 20 },
      { name: "Garlic Naan", price: 25 },
      { name: "Missi Roti", price: 15 },
      { name: "Lachha Paratha", price: 25 },
      { name: "Tandoori Roti", price: 15 },
      { name: "Roomali Roti", price: 20 },
      { name: "Plain Paratha", price: 20 },
      { name: "Stuffed Paratha", price: 30 },
      { name: "Phulka", price: 10 },
    ],
    Drinks: [
      { name: "Coca Cola", price: 30 },
      { name: "Pepsi", price: 30 },
      { name: "Sprite", price: 30 },
      { name: "Fanta", price: 30 },
      { name: "Limca", price: 30 },
      { name: "Thums Up", price: 30 },
      { name: "7 Up", price: 30 },
      { name: "Maaza", price: 30 },
      { name: "Slice", price: 30 },
      { name: "Mountain Dew", price: 30 },
    ],
  };

  return (
    <div className="h-auto w-full bg-zinc-600 p-4">
      <p className="text-3xl text-center pt-32 text-white font-bold font-mono">
        Menu
      </p>
      <p className="text-3xl text-center pt-12 text-white font-bold font-mono">
        Explore Our Menu
      </p>
      {Object.keys(menuItems).map((category) => {
        // Split the menu items into two halves
        const items = menuItems[category];
        const middleIndex = Math.ceil(items.length / 2);
        const firstHalf = items.slice(0, middleIndex);
        const secondHalf = items.slice(middleIndex);

        return (
          <div key={category} className="mt-20">
            <p className="text-center text-white font-bold text-2xl font-serif">
              {category}
            </p>

            <div className="flex justify-center mt-12 px-40">
              <div className="flex flex-col w-1/2 pr-4">
                {firstHalf.map((menuItem) => (
                  <div
                    key={menuItem.name}
                    className="text-white font-serif flex justify-between mt-4"
                  >
                    <div>{menuItem.name}</div>
                    <div>{menuItem.price} INR</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-1/2 pl-4">
                {secondHalf.map((menuItem) => (
                  <div
                    key={menuItem.name}
                    className="text-white font-serif flex justify-between mt-4"
                  >
                    <div>{menuItem.name}</div>
                    <div>{menuItem.price} INR</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      <div className=" items-center ml-[30%] justify-center p-40"> 
      
        <button className="w-32  ml-24 mb-3 border-2 rounded-lg text-white font-mono hover:bg-orange-500 p-4" >
          Order Now
        </button>

        <iframe width="350"
         height="430"
          allow="microphone;" 
          src="https://console.dialogflow.com/api-client/demo/embedded/85db3f9f-aa81-4071-b1d4-da777522257c">
            
          </iframe>
        
      </div>
    </div>
  );
};

export default Menu;
