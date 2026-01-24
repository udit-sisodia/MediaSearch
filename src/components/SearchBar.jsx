import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from "../redux/feautres/searchSlice"

const SearchBar = () => {
  const [text, settext] = useState("")
  const dispatch = useDispatch()

  function submitHandler(e) {
    e.preventDefault()
    dispatch(setQuery(text))
    settext("")
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="
          flex flex-col sm:flex-row
          items-stretch sm:items-center
          gap-4 sm:gap-10
          p-4 sm:p-10
          px-4 sm:px-10
          bg-gray-800
          w-full
        "
      >
        <input
          onChange={(e) => {
            settext(e.target.value)
          }}
          required
          value={text}
          type="text"
          placeholder="Search anything..."
          className="outline-none rounded border-2 w-full px-2 py-3"
        />

        <button className="border-2 active:scale-95 cursor-pointer rounded px-5 py-3 w-full sm:w-auto">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
