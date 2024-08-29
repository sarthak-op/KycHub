// components/CompareModal.js
import React from "react";
import { Button, Modal, Table } from "antd";

function CompareModal({ visible, onCancel, products, onAddProduct }) {
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
      title: "Add",
      key: "add",
      render: (_, record) => (
        <Button onClick={() => onAddProduct(record)}>Add</Button>
      ),
    },
  ];

  return (
    <Modal
      title="Add More Products to Compare"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={800}
    >
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        scroll={{ y: 300 }}
      />
    </Modal>
  );
}

export default CompareModal;
