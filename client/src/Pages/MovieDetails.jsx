import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment"; 
import Alert from "react-bootstrap/Alert";
import Loader from "../Components/Loader";


function MovieDetails() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchMovieDetails();
  },[]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: "get",
        url: `http://localhost:4000/api/movies/${movieId}`
      });
      setLoading(false);
      setDetails(response.data.movie);
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <Card bg="success" text="white">
      {error && <Alert variant="danger">{error}</Alert>}
      { loading ?
      <Loader />
      :
      <>
      <Card.Header> <h1>{details.title}</h1></Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={details.poster}></Card.Img>
      <p>Rating: {details.rating}</p>
      <p>Created At: {moment(details.createdAt).format('DD-MM-YYYY')}</p>
      <p>Updated At : {moment(details.updatedAt).format('DD-MM-YYYY')}</p>
      </Card.Body>
      </>
}

    </Card>
  )
}
export default MovieDetails;
