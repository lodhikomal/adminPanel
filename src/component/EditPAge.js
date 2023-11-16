import React, { useEffect, useState } from "react";

// import Form from "react-bootstrap/Form";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "../style/editpageStyle.css";
import Layout from "./Layout";
import { doc, setDoc, addDoc, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { async } from "@firebase/util";
// import { db } from "../firebase";
// import { doc } from "firebase/firestore";
// import "../firebase/firestore";

function EditPAge() {
  const { id } = useParams();
  console.log(id, "check");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    backgroundImg: "",
    cardImg: "",
    description: "",
    subTitle: "",
    title: "",
    titleImg: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await setDoc(doc(db, "data", id), formData);
    } else {
      await addDoc(collection(db, "data"), formData);
    }

    toast.success("Your Data is Succesfully Add in Database!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log(formData);
    navigate("/movie");

    setFormData({
      backgroundImg: "",
      cardImg: "",
      description: "",
      subTitle: "",
      title: "",
      titleImg: "",
      type: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchData = async () => {
    const documentRef = doc(db, "data", id);
    // console.log(doc, "jjjj");

    try {
      const docSnapshot = await getDoc(documentRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        console.log(data, "hhhh");
        setFormData(data);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error  document:", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <Layout>
      <Form className="form-container" onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col md={5}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>BackGround Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="input"
                  value={formData.backgroundImg}
                  name="backgroundImg"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>card Image</Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={formData.cardImg}
                  name="cardImg"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  row={3}
                  className="input"
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Sub Title</Form.Label>
                <Form.Control
                  as="textarea"
                  row={3}
                  className="input"
                  value={formData.subTitle}
                  name="subTitle"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  as="textarea"
                  row={3}
                  className="input"
                  value={formData.title}
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="input"
                  value={formData.titleImg}
                  name="titleImg"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="input"
                  value={formData.type}
                  name="type"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="button">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      {/* <ToastContainer /> */}
    </Layout>
  );
}

export default EditPAge;
