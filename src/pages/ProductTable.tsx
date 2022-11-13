import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

let tableData = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
  },
];

const ProductTable: React.FC = () => {
  const navigate = useNavigate();
  const headers = useMemo(() => Object.keys(tableData[0]), []);
  return (
    <div className="root">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <td key={header}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((product) => (
            <tr key={product.id} onClick={() => navigate(`/projects/${product.id}`)}>
              {Object.values(product).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
