import React from "react";
import { Row, Button, Container, Image, Card } from "react-bootstrap";
import FullFrontBack from "../../images/FullFrontBack1.jpg";

const DOECstyle = {
  main: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  button: {
    marginTop: "3%",
    marginBottom: "5%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
    width: "150px",
  },

  title: {
    marginTop: "5%",
    color: "#fff",
    fontWeight: 800,
    fontSize: "clamp(0.8rem, 2vw,3rem)",
    marginTop: "-1%",
  },

  image: {
    display: "block",
    objectFit: "cover",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },

  container:{
    marginTop:"1%",
    paddingTop:"2%",
    border:"none",
  },
  card: {
    border:"none",
    backgroundColor:"#fff9eb",
  }


};

const ApplyDevOpsCourse = () => {
  return (
    <div style={DOECstyle.main}>
      <Container style={DOECstyle.container} className="rounded-4">
        <Row>
          <Card style={DOECstyle.card}>
            <Card.Img
              src={FullFrontBack}
              style={DOECstyle.image}
              className="d-flex justify-content-center"
              fluid
            />
            <Card.ImgOverlay>
              <Card.Title>
                <h1 style={DOECstyle.title} className="text-center">
                  Apply to Our DevOps Course
                </h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button type="submit" style={DOECstyle.button}>
            APPLY
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyDevOpsCourse;