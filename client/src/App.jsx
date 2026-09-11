import React, { useState } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">

      {/* 1. ส่วน Header ด้านบน */}
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500 text-zinc-950 font-extrabold px-3 py-1 text-xl rounded tracking-wider">
            JSD-13
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide text-white uppercase italic">
              MOTORCYCLE TIRE PRO SHOP
            </h1>
            <p className="text-xs text-zinc-400">System by JSD-13</p>
          </div>
        </div>
        <div className="text-sm text-zinc-300">
          <span>🛒 Cart</span>
        </div>
      </header>

      {/* 2. เนื้อหาหลักของระบบจัดการ */}
      <main className="max-w-5xl mx-auto p-6 space-y-6">

        {/* กล่องฟอร์มเพิ่มสินค้า */}
        <div className="bg-white text-neutral-800 p-6 rounded-lg shadow-xl border border-zinc-700">
          <h2 className="text-lg font-bold text-zinc-800 mb-4 flex items-center gap-2">
            <span className="text-emerald-600 text-xl">+</span> Add a new product
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="ชื่อสินค้า (เช่น IRC ยางนอก IZ-003)"
              className="border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="number"
              placeholder="ราคา (บาท)"
              className="border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="number"
              placeholder="จำนวน"
              className="border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded transition-colors shadow-md">
            Add Product
          </button>
        </div>

        {/* ช่องค้นหาสินค้า */}
        <div className="bg-white text-neutral-800 p-4 rounded-lg shadow-md border border-zinc-700">
          <input
            type="text"
            placeholder="🔍 Search for product name..."
            className="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* ตารางแสดงรายการสินค้า */}
        <div className="bg-white text-neutral-800 rounded-lg shadow-xl overflow-hidden border border-zinc-700">
          <div className="grid grid-cols-4 bg-zinc-100 p-4 font-semibold text-sm border-b border-zinc-200">
            <div>ProductName</div>
            <div>Price (THB)</div>
            <div>Quantity</div>
            <div>Actions</div>
          </div>
          <div className="p-8 text-center text-zinc-400">
            No product data found
          </div>
        </div>

      </main>
    </div>
  );
}