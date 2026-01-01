import { useState } from "react";

export function Inputs({ addProduct }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {

    const priceNum = Number(price);
    const quantityNum = Number(quantity);
    
    if (name.trim() === "" || price.trim() === ""
      || isNaN(quantity) || isNaN(price) 
      || Number(priceNum) <= 0 ||
      Number(quantityNum) <= 0) return;

    const newProduct = {
      id: crypto.randomUUID(),
      name: name,
      price: Number(price),
      quantity: Number(quantity)
    };

    addProduct(newProduct);
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="flex flex-col gap-5 shadow py-5 px-7 rounded">
      <div className="flex items-center gap-5">
        <label className="font-medium text-[20px]">Name</label>
        <input className="flex-1 pl-5 pr-15 text-[18px] py-2 shadow rounded"
          type="text"
          value={name}
          placeholder="Enter the product name"
          onChange={(e) => { setName(e.target.value) }}
        />
      </div>

      <div className="flex items-center gap-5">
        <label className="font-medium text-[20px]">Price</label>
        <input className="flex-1 pl-5 pr-15 text-[18px] py-2 shadow rounded"
          type="number"
          value={price}
          placeholder="Enter the product price"
          onChange={(e) => { setPrice(e.target.value) }}
        />
      </div>

      <div className="flex items-center gap-5">
        <label className="font-medium text-[20px]">Initial Quantity</label>
        <input className="flex-3 pl-5 pr-15 text-[18px] py-2 shadow rounded"
          type="number"
          value={quantity}
          placeholder="Enter the product Quantity"
          onChange={(e) => { setQuantity(e.target.value) }}
        />

        <div className="flex-1 items-center text-center">
          <button className="bg-[rgba(46,121,232)] cursor-pointer font-semibold rounded text-white px-7 py-3"
            onClick={handleAdd}
          >Add Product</button>
        </div>
      </div>

    </div>
  );
}