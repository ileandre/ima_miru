import React from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import "./Show.css"
import {deleteFromWatchlist } from "../../services/users";

const Show = ({title, user, imgURL, _id, setWatchlistShows}) => {
  const location = useLocation()
  const history = useHistory()

  const removeShow = async () => {
    const shows = await deleteFromWatchlist(user.id, _id)
    setWatchlistShows(shows);
  }

  const handleRemove = async (e) => {
    e.preventDefault()
    await removeShow()
    history.push("/watchlist")
  }
    return (
      <>
        <div className="show-card">
            <Link to={`/shows/${_id}`}>
            <img src={imgURL} alt={title} />
            <div className="testing">
              <p className="title-card"> {title.length >= 16 ? `${title.substring(0,13)}...` : title} </p>
              {location.pathname === "/watchlist" ? <button className="delete-button" onClick={(e)=>handleRemove(e)}>Remove</button> : null}
            </div>
          </Link>
          </div>
        </>
    )
}

export default Show