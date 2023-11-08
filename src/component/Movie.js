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
import { Modal, Button } from "react-bootstrap";
import ReactModals from "./ReactModals";

function Movie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  useEffect(() => {
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
    fetchData();
  }, []);

  const handleDelete = async (value, id) => {
    await deleteDoc(doc(db, "data", id));
  };

  // console.log(show, "movie");
  return (
    <Layout>
      <div className="table-btn ">
        <button type="submit" className="btn-add">
          Add
        </button>
      </div>
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
                    <img src={item.cardImg}></img>
                  </td>
                  <td className="description">{item.description}</td>
                  {/* <td className="subTitle">{item.subTitle} </td> */}
                  <td className="subTitle">{item.title}</td>
                  {/* <td><img src={item.titleImg}></img></td> */}
                  <td>{item.type}</td>
                  <td>
                    <div className="action-container">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="action-icon"
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="action-icon"
                        onClick={() => setShow(true)}
                        // onClick={() => handleDelete(item, item.id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ReactModals show={show} close={handleClose} />
    </Layout>
  );
}

export default Movie;
