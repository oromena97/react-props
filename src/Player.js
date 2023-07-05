import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card
      style={{
        width: "auto",
        textAlign: "center",
        padding: "30px 30px",
      }}
    >
      <Container>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={imageUrl}
              alt={name}
              style={{
                width: "250px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {name}
              </Card.Title>
              <div>
                <span>
                  {" "}
                  <strong>Team:</strong>{" "}
                </span>
                <span> {team}</span>
              </div>
              <div>
                <span>
                  <strong>Nationality:</strong>
                </span>
                <span> {nationality}</span>
              </div>
              <div>
                <span>
                  <strong>Jersey Number:</strong>
                </span>
                <span> {jerseyNumber}</span>
              </div>
              <div>
                <span>
                  <strong>Age:</strong>
                </span>
                <span> {age}</span>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Player;
