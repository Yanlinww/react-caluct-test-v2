// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'

// 按鈕基礎樣式：加上 flex 和 items-center justify-center 確保文字垂直水平居中
const baseClasses = "w-full h-16 rounded-xl font-bold text-xl shadow-sm border transition-all flex items-center justify-center active:scale-95 select-none cursor-pointer";

// // 數字鍵樣式 (白色背景)
// const numberClasses = "bg-white text-gray-700 hover:bg-gray-50 border-gray-200";

// // 運算符號樣式 (淺藍色)
// const operatorClasses = "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100";

// // 等號樣式 (深藍色，跨兩欄)
// const equalClasses = "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 col-span-2 shadow-blue-200 shadow-lg";

// ★ 新增：顯示螢幕 Input 的樣式
const displayClasses = "col-span-4 w-full h-24 text-right text-5xl font-bold bg-gray-100 text-gray-800 p-4 rounded-xl border-none focus:outline-none shadow-inner mb-4 tracking-wider placeholder-gray-300";

function App() {
  const calcButtons = [
    "%", "CE", "C", "⌫",
    "1/x", "x²", "√x", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "+/-", "0", ".", "="
  ];

  // // 輔助函式：判斷按鈕類型並回傳對應的 Class
  // const getButtonClass = (btn: string) => {
  //   if (btn === "=") return `${baseClasses} ${equalClasses}`;
    
  //   // 判斷是否為運算符號或功能鍵
  //   const isOperator = ["%", "CE", "C", "⌫", "1/x", "x²", "√x", "÷", "×", "-", "+", "+/-"].includes(btn);
    
  //   if (isOperator) return `${baseClasses} ${operatorClasses}`;
    
  //   // 預設為數字鍵
  //   return `${baseClasses} ${numberClasses}`;
  // };

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-3 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-sm mx-auto">
        
        {/* 優化後的 Input */}
        <input 
          type="text" 
          className={displayClasses} 
          placeholder="0"
          readOnly // 計算機通常禁止直接鍵盤輸入，建議加上 readOnly
        />

        {calcButtons.map((sign, index) => {
          return (
            <div 
              key={index} 
              className={baseClasses}
            >
              {sign}
            </div>
          );
        })}

      </div>
    </Layout>
  )
}

export default App