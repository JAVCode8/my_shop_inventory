import { useEffect, useState } from "react";
import { Content } from "./conponents/Content"
import { Header } from "./conponents/Header"

function App() {

  const [products, setProduct] = useState(() => {
    const savedProducts = localStorage.getItem("my-products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("my-products", JSON.stringify(products));
  },[products]);

  const addProduct = ((newProduct) => {
    setProduct([...products, newProduct]);
  });

  const deleteProduct = (id) => {
    const updated = products.filter((item) => {
      return item.id !== id;
    })

    setProduct(updated);
  };

 const addQuantity = (id) => {
  setProduct((prevProducts) => {
    const updatedProducts = [];

    for (let i = 0; i < prevProducts.length; i++) {
      const item = prevProducts[i];

      if (item.id === id) {
        const updatedItem = {
          ...item,
          quantity: item.quantity + 1
        };
        updatedProducts.push(updatedItem);
      } else {
        updatedProducts.push(item);
      }
    }

    return updatedProducts;
  });
};

const minusQuantity = (id) => {
  setProduct((prevProducts) => {
    const updatedProducts = [];

    for (let i = 0; i < prevProducts.length; i++) {
      const item = prevProducts[i];

      if (item.id === id) {
        const newQuantity = item.quantity - 1 < 1 ? 1 : item.quantity - 1;
        const updatedItem = {
          ...item,
          quantity: newQuantity
        };
        updatedProducts.push(updatedItem);
      } else {
        updatedProducts.push(item);
      }
    }

    return updatedProducts;
  });
};

  return (
    <main>
      <Header />
      <Content 
        onAddProduct={addProduct}
        products={products}
        onDeleteProduct={deleteProduct}
        onAddQuantity={addQuantity}
        onMinusQuantity={minusQuantity}
      />
    </main>
  )
}

export default App
