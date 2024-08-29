import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "antd";

import AddMoreModal from "../components/AddMoreModal";
import { removeFromCompare } from "../redux/actions";

const CompareProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const compareProducts = useSelector((state) => state.compareProducts);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCompare(productId));
  };

  const columns = [
    {
      title: "Attribute",
      dataIndex: "attribute",
      key: "attribute",
    },
    ...compareProducts.map((product, index) => ({
      title: product.title,
      dataIndex: `product${index}`,
      key: `product${index}`,
      render: (text, record) => record[`product${index}`] || "-",
    })),
  ];

  const data = [
    {
      key: "title",
      attribute: "Title",
      ...compareProducts.reduce(
        (acc, product, index) => ({
          ...acc,
          [`product${index}`]: product.title,
        }),
        {}
      ),
    },
    {
      key: "price",
      attribute: "Price",
      ...compareProducts.reduce(
        (acc, product, index) => ({
          ...acc,
          [`product${index}`]: `$${product.price}`,
        }),
        {}
      ),
    },
    {
      key: "brand",
      attribute: "Brand",
      ...compareProducts.reduce(
        (acc, product, index) => ({
          ...acc,
          [`product${index}`]: product.brand,
        }),
        {}
      ),
    },
    {
      key: "category",
      attribute: "Category",
      ...compareProducts.reduce(
        (acc, product, index) => ({
          ...acc,
          [`product${index}`]: product.category,
        }),
        {}
      ),
    },
    {
      key: "discount",
      attribute: "Discount",
      ...compareProducts.reduce(
        (acc, product, index) => ({
          ...acc,
          [`product${index}`]: `${product.discountPercentage}%`,
        }),
        {}
      ),
    },
  ];

  return (
    <div>
      <Button onClick={() => setModalOpen(true)} style={{ marginBottom: 16 }}>
        Add More
      </Button>
      <Table columns={columns} dataSource={data} pagination={false} />
      {compareProducts.map((product) => (
        <Button
          key={product.id}
          onClick={() => handleRemove(product.id)}
          style={{ marginTop: 16, marginRight: 8 }}
        >
          Remove {product.title}
        </Button>
      ))}
      <AddMoreModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default CompareProducts;
