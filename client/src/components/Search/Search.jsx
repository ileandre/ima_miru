import React from 'react'
import { useState } from 'react'
import "./Search.css"

const Search = () => {
  const [search, setSearch] = useState('')
  return (
      <div>
      <input id="search" type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    )
}

export default Search