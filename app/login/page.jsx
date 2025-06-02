import React from 'react'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
        <p className="text-gray-400 mb-8">login</p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="อีเมล์"
              className="w-full px-4 py-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              placeholder="รหัสผ่าน"
              className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white text-lg py-4 rounded-lg font-semibold transition"
          >
            Log in
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm">
          ยังไม่มีบัญชี? <a href="/register" className="text-orange-500 font-semibold hover:underline">สมัครสมาชิก</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
