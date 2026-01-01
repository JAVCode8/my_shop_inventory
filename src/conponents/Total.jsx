export function Total({ products }) {
  let total = 0;

  products.forEach((item) => {
    total += item.price * item.quantity;
  });
  return(
    <div className="text-center">
        <h1 className="text-3xl font-semibold py-3">Current Total : Php {total.toLocaleString(undefined, {maximumFractionDigits : 2})} </h1>
    </div>
  );
}