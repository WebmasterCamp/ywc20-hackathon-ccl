import React from 'react'

const Search = ({ onSearch }) => {
  return (
    <div className="w-full flex justify-center my-4">
      <input
        type="text"
        placeholder="Search"
        className="w-2/3 md:w-1/2 bg-gray-200 rounded-full px-6 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        onChange={e => onSearch?.(e.target.value)}
      />
    </div>
  )
}

export default Search
