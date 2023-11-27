import Alert from "react-bootstrap/Alert";
import Loader from "../Components/Loader";
import { Button, Card } from "react-bootstrap";
import SearchBar from "../Components/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetchMOvies();
  }, []);

  const fetchMOvies = async () => {
    try {
      setLoading(true);
      const response = await axios(
        `http://localhost:4000/api/movies?searchText=${searchText}`
      );
      console.log("response", response);
      setLoading(false);
      setMovies(response.data);
      setError(null);
    } catch (e) {
      setLoading(false);
      setError(`Server error:${e.message}`);
    }
  };

  const onClickViewMovie = ({ id }) => {
    history.push(`/${id}`);
  };
  console.log("movies:", movies);
  return (
    <>
      <SearchBar onClickRefresh={fetchMOvies} setSearchText={setSearchText} />
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Loader />
      ) : (
        <div className="d-flex flex-wrap justify-content-around">
          {movies?.map((movie) => {
            const { title, id } = movie;
            return (
              <Card key={id} className="m-2 movie-card">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>Hi Helloo How u doin??</Card.Text>
                  <Button
                    variant="success"
                    onClick={() => onClickViewMovie(movie)}
                  >
                    View Movie
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
