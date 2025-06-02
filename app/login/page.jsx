'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  // Email validation - รองรับภาษาไทยทั้ง local part และ domain
  const isValidThaiEmail = (email) => {
    // รองรับตัวอักษรไทย, อังกฤษ, ตัวเลข และสัญลักษณ์พิเศษทั่วไป
    const thaiEmailRegex = /^[a-zA-Z0-9\u0E00-\u0E7F._%+-]+@([a-zA-Z0-9\u0E00-\u0E7F.-]+\.)+[a-zA-Z\u0E00-\u0E7F]{2,}$/u;
    return thaiEmailRegex.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validate email
    if (!formData.email) {
      setError('กรุณากรอกอีเมล')
      return
    }

    if (!isValidThaiEmail(formData.email)) {
      setError('กรุณากรอกอีเมลให้ถูกต้อง')
      return
    }

    if (!formData.password) {
      setError('กรุณากรอกรหัสผ่าน')
      return
    }

    // Simple mock authentication
    if (formData.email && formData.password) {
      // Store auth data in localStorage
      // In a real production app, you would want to:
      // 1. Store a JWT token instead of email
      // 2. Implement proper session management
      // 3. Consider using HTTP-only cookies for better security
      localStorage.setItem('auth', JSON.stringify({
        email: formData.email,
        isLoggedIn: true,
        loginTime: new Date().toISOString(),
        name: "นายไทย"
      }))
      
      console.log('Login successful:', formData.email)
      
      // Redirect to home page
      router.push('/')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
        <p className="text-gray-400 mb-8">เข้าสู่ระบบ</p>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="อีเมล (เช่น ทดสอบ@ทดสอบ.ไทย)"
              className="w-full px-4 py-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="รหัสผ่าน"
              className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-lg font-semibold transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>
        
        {/* ตัวอย่างการใช้งาน */}
        <div className="mt-6 p-3 bg-blue-50 rounded-lg text-sm text-gray-600">
          <p className="font-semibold mb-1">ตัวอย่างอีเมลที่รองรับ:</p>
          <p>• ทดสอบ@ทดสอบ.ไทย</p>
          <p>• test@example.com</p>
          <p>• ผู้ใช้@บริษัท.co.th</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage