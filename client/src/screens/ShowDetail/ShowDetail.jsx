import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getShow } from "../../services/shows";
import { addToWatchlist } from "../../services/users";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ShowDetail.css";

function ShowDetail({ user, watchlistShows }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(null);
  const [watchlistButton, setWatchlistButton] = useState("+Watchlist")
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchShow = async () => {
      const anime = await getShow(id);
      setShow(anime);
      setIsLoaded(true);
    };
    fetchShow();
  }, [id]);

  const handleWatchlist = (e) => {
    e.preventDefault();
    addToWatchlist(user.id, show._id);
    setWatchlistButton("added")
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Layout user={user}>
        <div className="show-detail">
          <img className="anime-image" src={show.imgURL} alt={show.title} />
          <div className="detail">
            <div className="info-container">
              <div className="title">{show.title}</div>
              <div className="duration">
                <strong>({`${show.duration}`})</strong>
              </div>
              <div className="plot">{show.plot}</div>
            </div>
            <div className="button-container">
              {user ? (
                <Button id="watchlist-button" onClick={handleWatchlist}>
                  {watchlistButton}
                </Button>
              ) : null}
              <Button
                id="edit-button"
                className="edit-button"
                onClick={() => {
                  history.push(`/shows/${show._id}/edit`);
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ShowDetail;