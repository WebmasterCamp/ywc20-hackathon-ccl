import React from 'react'

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Register</h1>
        <p className="text-gray-400 mb-8">สมัครสมาชิก</p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="ชื่อ"
              className="w-full px-4 py-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="อีเมล์"
              className="w-full px-4 py-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
              className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-lg font-semibold transition"
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
