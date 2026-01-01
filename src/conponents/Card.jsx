export function Card({ product, deleteProduct, addQuantity, minusQuantity }) {

  const price = Number(product.price);
  const quantity = Number(product.quantity);
  const totalPrice = price * quantity;

  return (
    <div className="flex flex-col gap-2 shadow px-4 py-4 rounded-2xl">
      
      <div className="flex justify-between px-5 items-center">
        <h1 className="font-semibold text-4xl">{product.name}</h1>
        <h1 className="font-semibold text-2xl">
          ID: {product.id.slice(0, 18)}
        </h1>
        <button className="font-semibold text-[18px] text-red-400 cursor-pointer bg-[#efeff0] py-2 px-6 rounded-3xl"
          onClick={() => {deleteProduct(product.id)}}
        >
          Delete
        </button>
      </div>

      <div className="flex justify-between px-5 items-center">
        <span className="font-semibold text-[20px] text-[#b3b2b2]">
          Price : Php {price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>

        <span className="font-semibold text-[20px] text-[#b3b2b2]">
          Quantity : {quantity}
        </span>
      </div>

      <div className="flex justify-between px-5 items-center">
        <span className="font-semibold text-[20px] text-[#b3b2b2]">
          Total value : Php {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>

        <div className="flex gap-3 items-center">
          <button className="bg-[#e3e3e3] p-4 rounded-full cursor-pointer" onClick={() => {addQuantity(product.id)}}>
            <img src="plus.png" width={25} alt="Increase" />
          </button>

          <button className="bg-[#e3e3e3] p-4 rounded-full cursor-pointer" onClick={() => {minusQuantity(product.id)}}>
            <img src="minus-sign.png" width={25} alt="Decrease" />
          </button>
        </div>
      </div>

    </div>
  );
}
