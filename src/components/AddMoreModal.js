import React, { useState, useEffect } from "react";
import { Modal, Table, Button } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare } from "../redux/actions";

const AddMoreModal = ({ open, onClose }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const compareProducts = useSelector((state) => state.compareProducts);

  useEffect(() => {
    if (open) {
      fetchProducts();
    }
  }, [open]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  const handleAddToCompare = (product) => {
    dispatch(addToCompare(product));
    onClose();
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          onClick={() => handleAddToCompare(record)}
          disabled={
            compareProducts.length >= 4 ||
            compareProducts.some((p) => p.id === record.id)
          }
        >
          Add to Compare
        </Button>
      ),
    },
  ];

  return (
    <Modal
      title="Add More Products to Compare"
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
        scroll={{ y: 300 }}
      />
    </Modal>
  );
};

export default AddMoreModal;
