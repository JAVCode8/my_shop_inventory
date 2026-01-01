import { Card } from "./Card";
import { Inputs } from "./Inputs";
import { Total } from "./Total";

export function Content({ onAddProduct, products, onDeleteProduct, onMinusQuantity, onAddQuantity }) {
  return (
    <div className="max-w-225 mx-auto flex flex-col gap-7">
      <Inputs
        addProduct={onAddProduct}
      />
      <Total products={products} />
      {products.map((item) => {
        return (
          <Card
            key={item.id}
            product={item}
            deleteProduct={onDeleteProduct}
            addQuantity={onAddQuantity}
            minusQuantity={onMinusQuantity}
          />
        );
      })}
    </div>
  );
}