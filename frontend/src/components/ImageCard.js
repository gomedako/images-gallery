import React from "react";
import { Button, Card, Nav } from "react-bootstrap";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorName = image.user?.name || "Unknown";
  const authorPortofilioURL = image.user?.portfolio_url;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{" "}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save Image
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {authorPortofilioURL && (
          <Nav.Link href={authorPortofilioURL} target="_blank ">
            {authorName}
          </Nav.Link>
        )}
        {!authorPortofilioURL && authorName}{" "}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
