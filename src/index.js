import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";
import { columns } from "./columns.js";
// import { green, orange, red, grey, blue } from "@ant-design/colors";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32
  },
  {
    key: "4",
    name: "Joe White",
    age: 45
  }
];
ReactDOM.render(
  <Table columns={columns} dataSource={data} />,
  document.getElementById("container")
);
