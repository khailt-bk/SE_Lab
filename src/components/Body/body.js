import { React, useEffect, useState } from "react";
import { Table, Button } from "antd";
import { ButtonStyled } from "../Button/buttons";
import Modal from "../Modal/Modal";
import ModalAnm from "../ModalAnnoucement/ModalAnm";
import "./body.css";
import { TableDemo } from "../Table/table";
import PopUpData, { PopUpMcp } from "../PopUp/popup";

export const BodyDemo = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalAnm, setShowModalAnm] = useState(false);
    const [showPopUpData, setShowPopUpData] = useState(false);
    const [showPopUpMcp, setShowPopUpMcp] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
        // console.log(showModal);
    };

    const openModalAnm = () => {
        setShowModalAnm((prev) => !prev)
    }
    // const openModalData = () => {
    //     setShowPopUpData((prev) => !prev)
    // }
    const dataSource = [
        {
            key: "1",
            title: "dsfMike",
            no: "1",
            mcp: "10 Downingvxcv Street",
        },
        {
            key: "2",
            title: "Johfdsfn",
            no: "2",
            mcp: "10 Downing Street",
        },
        {
            key: "3",
            title: "Mifsdfke",
            no: "3",
            mcp: "10 Downing Street",
        },
    ];

    // var postApi = 'https://jsonplaceholder.typicode.com/posts'

    // const dataSource = [
    //     fetch(postApi)
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     // .then(function(posts) {
    //     //   var htmls = posts.map(function(post) {
    //     //     return `<li>
    //     //       <h2>${post.title}</h2>
    //     //       <p>${post.body}</</p>
    //     //     </li>`
    //     //   });
    //     // })
    // ];


    const columns = [
        {
            title: "No",
            dataIndex: "no",
            key: "no",
            align: 'center'
        },
        {
            title: "Colector and janitor",
            dataIndex: "title",
            key: "title",
            onHeaderCell: (column) => {
                return {
                    onClick: () => {
                        setShowPopUpData((prev) => !prev)
                    }
                };
            },
            align: 'center'
        },
        {
            title: "MCPs",
            dataIndex: "mcp",
            key: "mcp",
            onHeaderCell: (column) => {
                return {
                    onClick: () => {
                        setShowPopUpMcp((prev) => !prev)
                    }
                };
            },
            align: 'center'
        },
    ];

    const handleOnClickDetail = () => { }
    const [state, setState] = useState([]);
    const selectRow = (record) => {
        const selectedRowKeys = [...state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        setState({ selectedRowKeys });
    };
    const onSelectedRowKeysChange = (selectedRowKeys) => {
        setState({ selectedRowKeys });
    };
    const { selectedRowKeys } = state;
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectedRowKeysChange
    };

    return (
        <>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Nhập mật khẩu"
                announcement='hehe'
            />
            <ModalAnm
                showModal={showModalAnm}
                setShowModal={setShowModalAnm}
                title="DELETE"
                announcement='Are you sure to delete this?'
            />
            {/* <PopUpData isShowPopUp={showPopUpData} setShowPopUp={setShowPopUpData} data={dataSource.map(data => data)} title={"Colector & Janitor"}/> */}
            <PopUpData isShowPopUp={showPopUpData} setShowPopUp={setShowPopUpData} data={dataSource} title={"Colector & Janitor"}/> 
            <PopUpMcp isShowPopUp={showPopUpMcp} setShowPopUp={setShowPopUpMcp} data={dataSource} title={"MCPs"}/>

            <div className="bodyDiv">
                <div className="flex">
                    <div className="w-1/5"></div>
                    <TableDemo
                        dataSource={dataSource}
                        columns={columns}

                        className="w-3/5 mt-10"

                        rowSelection={rowSelection}
                    />
                    <div className="w-1/5"></div>
                </div>

                <div className="flex">
                    {" "}
                    <div className="w-4/5 "> </div>
                    <div className="w-1/5 mb-10">
                        <ButtonStyled type="text" onClick={() => openModal()}>
                            ADD
                        </ButtonStyled>
                        <ButtonStyled onClick={() => openModalAnm()} type="text">DELETE</ButtonStyled>
                    </div>
                </div>
            </div>
        </>
    );
};
