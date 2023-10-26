import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "./store";
const Home = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [ids, setIds] = useState();
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nama Universitas",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Website",
      dataIndex: "web",
      key: "web",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Detail",
      dataIndex: "action",
      key: "action",
      render: (id) => (
        <Space size="middle">
          <a>
            <button
              className="bg-yellow-500 text-white text-xs font-normal px-2 py-1 rounded-lg shadow outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                setShow(!show);
                setIds(id)
              }}
            >
              Detail
            </button>
          </a>
        </Space>
      ),
    },
  ];
  const store = useSelector((state) => state.admin.dataAll);
  console.log(store[0], "sett");

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const items = store?.map((item, idx) => {
    const data = {};
    data.no = idx + 1;
    data.name = item.name;
    data.web = item.web_pages;

    data.action = idx;

    return data;
  });
  return (
    <>
      {show ? (
        <>
          {" "}
          <div
            className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
            onClick={() => setShow(false)}
          >
            <div className="block bg-slate-600 h-16">
              <span className="font-bold block text-tertiary-600 text-sm py-2 px-4 rounded-xl">
                Nama: {store[ids].name}
              </span>
              <span className="font-bold text-tertiary-600 text-sm py-2 px-4 rounded-xl">
                Website:{store[ids].web_pages}
              </span>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-neutral-900"></div>{" "}
        </>
      ) : (
        <></>
      )}

      <Table columns={columns} dataSource={items} />
    </>
  );
};
export default Home;
