"use client"
import { useState } from 'react'
import Image from "next/image"

export default function Home() {
	const [currentCount, setCurrentCount] = useState(0)
	
  	const handleAddBtnPress = (e) => {
		e.preventDefault()
	  	console.log("Handle Add")
		const newNum = currentCount + 1
		setCurrentCount(newNum)
	}

	const handleMinusBtnPress = (e) => {
		e.preventDefault()
		console.log("handle Minus")
		const newNum = currentCount - 1
		setCurrentCount(newNum)
	}

	const handleDoubleBtnPress = (e) => {
		e.preventDefault()
		console.log("Double")
		const newNum = currentCount * 2
		setCurrentCount(newNum)
	}

	const handleHalfBtnPress = (e) => {
		e.preventDefault()
		console.log("half")
		const newNum = currentCount / 2
		setCurrentCount(newNum)
	}

  	return (
    	<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1>Counter</h1>
				<p>{currentCount}</p>
				<button onClick={handleAddBtnPress}>+</button>
				<button onClick={handleMinusBtnPress}>-</button>
				<button onClick={handleDoubleBtnPress}>Double</button>
				<button onClick={handleHalfBtnPress}>Half</button>
      		</main>
      		<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      		</footer>
    	</div>
  );
}
