import React from "react";
import Layout from "./Layout";
import "../style/movieStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { selectMovie } from "../features/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { setMovie } from "../features/dataSlice";
import { doc, deleteDoc } from "firebase/firestore";
// import { Modal, Button } from "react-bootstrap";
import ReactModals from "./ReactModals";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Movie() {
  // console.log(id, "check");
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // const [selectedId, setSelectedId] = useState(null);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "data"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      let obj = {
        ...doc.data(),
        id: doc.id,
      };
      newData.push(obj);
    });
    dispatch(setMovie(newData));
    // console.log(newData, "search");
  };
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const handleDelete = async (id) => {
    setShow(true);
    setDeleteId(id);
  };
  const confirmDelete = async () => {
    let res = await deleteDoc(doc(db, "data", deleteId));
    setShow(false);
    fetchData();
    showToastMessage();
  };
  const showToastMessage = () => {
    //for adding success messgae in deleting item
    toast.success("Success Deletion !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleEdit = () => {};
  // console.log(id, "check");
  return (
    <>
      <Layout>
        <Link to="/add">
          <div className="table-btn ">
            <button type="submit" className="btn-add">
              Add
            </button>
          </div>
        </Link>
        <div className="table-heading">
          <div className="table-up">
            <h3>Movie Panel</h3>

            <input
              type="text"
              className="searchbar"
              placeholder="Search.."
            ></input>
          </div>
          <table className="table-container">
            <thead>
              <tr className="table-row">
                <th>Sr.no</th>
                {/* <th>BackgroundImage</th> */}
                <th>CardImage</th>
                <th>Description</th>
                {/* <th>subTitle</th> */}
                <th>Title</th>
                {/* <th>titleImg</th> */}
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {movie.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {/* <td>
                      <img
                        src={item.backgroundImg}
                        alt="image"
                        className="back-img"
                      ></img>
                    </td> */}
                    <td>
                      <img src={item.cardImg} alt=""></img>
                    </td>
                    <td className="description">{item.description}</td>
                    {/* <td className="subTitle">{item.subTitle} </td> */}
                    <td className="subTitle">{item.title}</td>
                    {/* <td><img src={item.titleImg}></img></td> */}
                    <td>{item.type}</td>
                    <td>
                      <div className="action-container">
                        <Link to={`/edit/${item.id}`}>
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="action-icon"
                            onClick={handleEdit}
                          />
                        </Link>

                        <FontAwesomeIcon
                          icon={faTrash}
                          className="action-icon"
                          // onClick={() => setShow(true)}
                          onClick={() => handleDelete(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ReactModals show={show} delete={confirmDelete} hide={handleClose} />
      </Layout>
    </>
  );
}

export default Movie;
