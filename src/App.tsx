import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
const baseclasses = "w-full py-4 rounded-lg font-bold text-lg shadow-sm border transition-all";

function App() {
const calcButtons = [
  "%", "CE", "C", "⌫",
  "1/x", "x²", "√x", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "+/-", "0", ".", "="
];

const [count, setCount] = useState(0)


  return (
    <Layout>
      <div className="grid grid-cols-4 gap-2">
        {calcButtons.map(
          (sign, index) => {

        return (
          <div key={index} className={baseclasses}>
                {sign} 
          </div>
            
        )})}

      </div>
    </Layout>
  )
}

export default App
