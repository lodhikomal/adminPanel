import React, { useEffect, useState } from "react";

// import Form from "react-bootstrap/Form";
import { Form, Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "../style/editpageStyle.css";
import Layout from "./Layout";
import { doc, setDoc, addDoc, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
// import { async } from "@firebase/util";
import { useFormik } from "formik";
import { formSchema } from "./FormSchema";

function EditPAge() {
  const { id } = useParams();
  // console.log(id, "check");
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
      await setDoc(doc(db, "data", id), values);
    } else {
      await addDoc(collection(db, "data"), values);
    }

    toast.success("Your Data is Succesfully Add in Database!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log(values, "sdsf");
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
  const {
    values,
    errors,
    handleChange,
    handleBlur,

    touched,
    setValues,
  } = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      console.log(values, "value");

      action.resetForm();
      navigate("/movie");
    },
  });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // console.log(errors.backgroundImg, "error");

  const fetchData = async () => {
    const documentRef = doc(db, "data", id);
    // console.log(doc, "jjjj");

    try {
      const docSnapshot = await getDoc(documentRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setValues(data);
        // setFormData(values);
        console.log(values, "hhhh");
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
  // console.log(values, "value");

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
                  className={`input ${
                    errors.backgroundImg && touched.backgroundImg
                      ? "error-border"
                      : ""
                  }`}
                  value={values.backgroundImg}
                  name="backgroundImg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.backgroundImg && errors.backgroundImg ? (
                  <div className="error">{errors.backgroundImg}</div>
                ) : null}
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
                  className={`input ${
                    errors.cardImg && touched.cardImg ? "error-border" : ""
                  }`}
                  value={values.cardImg}
                  name="cardImg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.cardImg && errors.cardImg ? (
                  <div className="error">{errors.cardImg}</div>
                ) : null}
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
                  className={`input ${
                    errors.description && touched.description
                      ? "error-border"
                      : ""
                  }`}
                  value={values.description}
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description ? (
                  <div className="error">{errors.description}</div>
                ) : null}
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
                  className={`input ${
                    errors.subTitle && touched.subTitle ? "error-border" : ""
                  }`}
                  value={values.subTitle}
                  name="subTitle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.subTitle && errors.subTitle ? (
                  <div className="error">{errors.subTitle}</div>
                ) : null}
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
                  className={`input ${
                    errors.title && touched.title ? "error-border" : ""
                  }`}
                  value={values.title}
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.title && errors.title ? (
                  <div className="error">{errors.title}</div>
                ) : null}
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
                  className={`input ${
                    errors.titleImg && touched.titleImg ? "error-border" : ""
                  }`}
                  value={values.titleImg}
                  name="titleImg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.titleImg && errors.titleImg ? (
                  <div className="error">{errors.titleImg}</div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Select
                aria-label="Default select example"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mb-3 select ${
                  errors.type && touched.type ? "error-border" : ""
                }`}
              >
                <option value="1">New</option>
                <option value="2">Trending</option>
                <option value="3">Recommend</option>
                <option value="1">New Disney</option>
              </Form.Select>
              {touched.type && errors.type ? (
                <div className="error">{errors.type}</div>
              ) : null}
            </Col>
            <Button variant="primary" type="submit" className="button">
              Submit
            </Button>

            {/* <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Dropdown className="dropdown">
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className={`dropdown ${
                      errors.type && touched.type ? "error-border" : ""
                    }`}
                    value={values.type}
                  >
                    Type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Trending</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">New Disney</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Original</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {touched.type && errors.type ? (
                  <div className="error">{errors.type}</div>
                ) : null}
              </Form.Group> */}
          </Row>
        </Container>
      </Form>
      {/* <ToastContainer /> */}
    </Layout>
  );
}

export default EditPAge;
