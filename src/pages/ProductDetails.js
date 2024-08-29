import React, { useState, useEffect } from "react";
import { Table, Button, notification } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { addToCompare } from "../redux/actions";
import { fetchProducts } from "../services/api";
const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const dispatch = useDispatch();
  const compareProducts = useSelector((state) => state.compareProducts);

  useEffect(() => {
    loadProducts();
  }, [pagination.current, pagination.pageSize]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts(
        pagination.pageSize,
        (pagination.current - 1) * pagination.pageSize
      );
      setProducts(data.products);
      setPagination((prev) => ({ ...prev, total: data.total }));
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to load products. Please try again.",
      });
    }
    setLoading(false);
  };

  const handleTableChange = (newPagination, filters, sorter) => {
    setPagination(newPagination);
  };

  const handleCompare = (product) => {
    if (compareProducts.length >= 4) {
      notification.warning({
        message: "Compare limit reached",
        description: "You can compare up to 4 products at a time.",
      });
      return;
    }
    dispatch(addToCompare(product));
    notification.success({
      message: "Product added to compare",
      description: `${product.title} has been added to the comparison list.`,
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Description",
      dataIndex: "description",
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Discount",
      dataIndex: "discountPercentage",
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      sorter: (a, b) => a.brand.localeCompare(b.brand),
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      render: (thumbnail) => (
        <img src={thumbnail} alt="Product" style={{ width: 50 }} />
      ),
    },
    {
      title: "Compare",
      key: "compare",
      render: (_, record) => (
        <Button
          onClick={() => handleCompare(record)}
          disabled={compareProducts.some((p) => p.id === record.id)}
        >
          Compare
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="id"
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default ProductDetails;
