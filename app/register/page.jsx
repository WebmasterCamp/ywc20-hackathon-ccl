'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });
  const [error, setError] = useState('');

  // Email validation รองรับภาษาไทย
  const isValidThaiEmail = (email) => {
    const thaiEmailRegex = /^[a-zA-Z0-9\u0E00-\u0E7F._%+-]+@([a-zA-Z0-9\u0E00-\u0E7F.-]+\.)+[a-zA-Z\u0E00-\u0E7F]{2,}$/u;
    return thaiEmailRegex.test(email);
  };

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.name) {
      setError('กรุณากรอกชื่อ');
      return;
    }
    if (!form.email) {
      setError('กรุณากรอกอีเมล');
      return;
    }
    if (!isValidThaiEmail(form.email)) {
      setError('กรุณากรอกอีเมลให้ถูกต้อง');
      return;
    }
    if (!form.password) {
      setError('กรุณากรอกรหัสผ่าน');
      return;
    }
    if (form.password !== form.confirm) {
      setError('รหัสผ่านไม่ตรงกัน');
      return;
    }

    // mock register: บันทึกข้อมูลใน localStorage
    localStorage.setItem('user', JSON.stringify({
      name: form.name,
      email: form.email,
      password: form.password
    }));

    // ไปหน้า login
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2 sm:px-4">
      <Navbar/>
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">Register</h1>
        <p className="text-gray-400 mb-6 sm:mb-8 text-center">สมัครสมาชิก</p>
        {error && (
          <div className="mb-2 sm:mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm sm:text-base text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="ชื่อ (ภาษาไทยหรืออังกฤษ)"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg font-medium transition"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="อีเมล (เช่น ทดสอบ@ทดสอบ.ไทย)"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg font-medium transition"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="รหัสผ่าน (ภาษาไทยหรืออังกฤษ)"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg font-medium transition"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirm"
              placeholder="ยืนยันรหัสผ่าน"
              value={form.confirm}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg font-medium transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white text-base sm:text-lg py-3 sm:py-4 rounded-lg font-semibold transition"
          >
            สมัครสมาชิก
          </button>
        </form>
        <div className="mt-4 sm:mt-6 text-center text-gray-500 text-xs sm:text-sm">
          มีบัญชีอยู่แล้ว? <a href="/login" className="text-orange-500 font-semibold hover:underline">เข้าสู่ระบบ</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
