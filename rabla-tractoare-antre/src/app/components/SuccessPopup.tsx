'use client'
import React from "react"
import { useEffect } from "react"
import { useTimer } from "./Timer"
import { useRouter } from "next/navigation"


interface SuccessPopupProps {
  isVisible: boolean;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ isVisible }) => {
  const router = useRouter()
const timer = useTimer()

const reset = () => {
    router.push('/')
    localStorage.clear()
    if (timer) {
timer.resetTimer()
    }
}

  useEffect(() => {
    if (isVisible && timer) {
      // Perform actions after the component is visible
      timer.stopTimer();
      // Optionally, you might want to reset the timer or do other things
    }
  }, [isVisible, timer]); // Depend on isVisible and timer

    if (!isVisible) {
        return null
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-md flex flex-col justify-center items-center gap-4 z-30">
            <div>
                <h1 className="text-6xl">
                    Succes!
                </h1>
                <p>Ai reușit să depui în {timer.time} {timer.time < 20 ? '' : 'de'} secunde.</p>
            </div>
            <button className="bg-primaryGreen text-white rounded hover:bg-green-700 cursor-pointer py-2 px-5"
            onClick={reset}
            >
                Resetare
            </button>
        </div>
    )

}

export default SuccessPopup