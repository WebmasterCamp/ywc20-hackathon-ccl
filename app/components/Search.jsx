import React from 'react'

const Search = ({ value, onSearch }) => {
  return (
    <div className="flex items-center w-full bg-[#fcfaf5] rounded-xl px-4 py-2">
      <input
        type="text"
        placeholder="ค้นหา"
        value={value}
        onChange={e => onSearch?.(e.target.value)}
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
      />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
    </div>
  )
}

export default Search
