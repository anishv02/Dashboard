import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../styles/BillGeneration.css";

const BillGenerate = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const productList = [
    { name: "Peanut Butter", price: 120 },
    { name: "Rice", price: 50 },
    { name: "Milk", price: 30 },
    { name: "Bread", price: 40 },
    { name: "Sugar", price: 60 },
    { name: "Eggs", price: 70 },
    { name: "Chicken", price: 200 },
    { name: "Fish", price: 250 },
    { name: "Flour", price: 45 },
    { name: "Oil", price: 180 },
    { name: "Salt", price: 20 },
    { name: "Coffee", price: 150 },
    { name: "Tea", price: 100 },
    { name: "Butter", price: 90 },
    { name: "Cheese", price: 120 },
    { name: "Juice", price: 50 },
    { name: "Chocolate", price: 200 },
    { name: "Ice Cream", price: 150 },
    { name: "Biscuits", price: 40 },
    { name: "Chips", price: 50 },
    { name: "Apples", price: 120 },
    { name: "Bananas", price: 60 },
    { name: "Oranges", price: 80 },
    { name: "Potatoes", price: 30 },
    { name: "Tomatoes", price: 40 },
    { name: "Onions", price: 50 },
    { name: "Carrots", price: 60 },
    { name: "Lentils", price: 80 },
    { name: "Pulses", price: 90 },
    { name: "Corn Flakes", price: 130 },
    { name: "Oats", price: 100 },
  ];

  const addProduct = () => {
    if (!selectedProduct) return;

    const existingProduct = products.find(
      (product) => product.name === selectedProduct.name
    );

    if (existingProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.name === existingProduct.name
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...selectedProduct, quantity: 1 },
      ]);
    }

    setSelectedProduct(null);
    setSearchQuery("");
  };

  const updateQuantity = (name, change) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.name === name
            ? {
                ...product,
                quantity: Math.max(product.quantity + change, 0),
              }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="billGenerate-body">
      <div className="billGenerate-content">
        <h1>Generate Bill</h1>

        {/* Search Dropdown */}
        <div className="grid-structure">
          <Autocomplete
            disablePortal
            options={productList}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => setSelectedProduct(value)}
            inputValue={searchQuery}
            onInputChange={(event, newInputValue) =>
              setSearchQuery(newInputValue)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Product"
                variant="outlined"
              />
            )}
            sx={{ width: 300 }}
          />
          <button onClick={addProduct}>Add Product</button>
        </div>

        <h3>Selected Products</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price (per unit)</th>
                <th>Quantity</th>
                <th>Final Price</th>
                <th>Manage Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    No products selected. Please add products to the bill.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>₹{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>₹{product.price * product.quantity}</td>
                    <td>
                      <button onClick={() => updateQuantity(product.name, -1)}>
                        -
                      </button>
                      <span style={{ margin: "0 10px" }}>
                        {product.quantity}
                      </span>
                      <button onClick={() => updateQuantity(product.name, 1)}>
                        +
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <h3 className="total-payment">Total Payment: ₹{totalAmount}</h3>
      </div>
    </div>
  );
};

export default BillGenerate;
