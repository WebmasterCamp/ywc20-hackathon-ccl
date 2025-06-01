import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 text-center text-gray-500 text-sm mt-12">
      © {new Date().getFullYear()} Artco. All rights reserved.
    </footer>
  )
}
