'use client'
import React, { useEffect, useRef, useState } from 'react';
import CaptchaPopup from '../components/captchaPopup';
import SuccessPopup from '../components/SuccessPopup';
import UploadButton from '../components/UploadButton';

interface DocumentItem {
  id: string;
  filename: string;
  description: string;
  alreadyHasUpload?: boolean;
}

function DocumentItem({ id, filename, description, alreadyHasUpload = false}: DocumentItem) {
  const [hasUploaded, setHasUploaded] = useState(false)
  const [size, setSize] = useState('')
  const [name, setName] = useState('')
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setHasUploaded(true)
      const displaySize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      setSize(displaySize)
      setName(file.name)
       } else if (file) {
      alert('Vă rog selectați un PDF')
      event.target.value = ''
      setHasUploaded(false)
      setSize('');
      setName('');
     }
  }


  const handleFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  } 

  const UploadedLabel = () => {
    return (
     <p className = " text-white bg-primaryGreen py-2 px-5 rounded-md">  
     Încărcat
     </p> 
    )
  }

  return (
    <div className="mb-4 border rounded p-3 flex items-center justify-between">
      <div className="flex items-center">
        {filename.endsWith('.pdf') ? (
          <p className="text-red-500 mr-2 text-lg" />
        ) : (
          <p className="text-gray-500 mr-2 text-lg" />
        )}
        <div>
          <strong className="block">{name == '' ? filename : name}</strong>
          <span className="text-sm text-gray-500">{size}</span>
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
      </div>
      <div className="flex items-center">
        {hasUploaded || alreadyHasUpload ? <UploadedLabel /> : <UploadButton 
        onClick={handleFileInput}
        onChange={onFileUpload}
        id={id}
        fileInputRef={fileInputRef}
        />        }
      </div>
    </div >
  )
}


interface HistoryItemProps {
  date: string;
  event: string;
}
const HistoryItem = ({ date, event }: HistoryItemProps) => (
  <div className="mb-2">
    <span className="text-sm text-gray-700">{date}</span> <span className="text-sm text-gray-600">{event}</span>
  </div>
);

export default function IncarcareDocumente() {
  const [isDocumentCollapsed, setIsDocumentCollapsed] = useState(false);
  const [isHistoryCollapsed, setIsHistoryCollapsed] = useState(false);
  const [acknowledgedGuideline, setAcknowledgedGuideline] = useState(false);
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false)
 const hasUploadedCF = localStorage.getItem('hasUploadedCF')             


  const toggleDocumentCollapse = () => {
    setIsDocumentCollapsed(!isDocumentCollapsed);
  };

  const toggleHistoryCollapse = () => {
    setIsHistoryCollapsed(!isHistoryCollapsed);
  };

  const handleAcknowledgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcknowledgedGuideline(event.target.checked);
  };

  const openCaptcha = () => {
    setIsCaptchaOpen(true);
  }

  const closeCaptcha = () => {
    setIsCaptchaOpen(false);
  }
  const showSuccess = () => {
    setIsSuccessVisible(true)
  }
 
  
  const onSucces = () => {
    showSuccess()
  }

  const [storedDate, setStoredDate] = useState('')

  useEffect(() => {
    const dateHasBeenSet = localStorage.getItem('date')
    if (!dateHasBeenSet) {
      const fullDate = () => {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        const sec = date.getSeconds()
        return `${year}-${month}-${day} ${hour}-${min}-${sec}`
      }
      setStoredDate(fullDate())
      localStorage.setItem('date', fullDate())
    } else {
      setStoredDate(dateHasBeenSet)
    }
  }, [])

          
  return (
    <div className="container pt-40 py-8">
      
        <CaptchaPopup
          isOpen={isCaptchaOpen}
          onClose={closeCaptcha}
          onConfirm={onSucces}
        />
        <SuccessPopup isVisible={isSuccessVisible} />

      
      <div className="mb-6 border rounded bg-surface-base">
        <div
          className="p-3 bg-neutral-300 cursor-pointer flex justify-between items-center"
          onClick={toggleHistoryCollapse}
        >
          <h2 className="font-semibold">Istoric dosar (data și eveniment)</h2>
          <svg
            className={`w-5 h-5 transition-transform ${isHistoryCollapsed ? 'rotate-0' : 'rotate-180'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className={`overflow-hidden transition-max-height duration-300 ${isHistoryCollapsed ? 'max-h-0' : 'max-h-screen'}`}>
          <div className="p-3">
            <HistoryItem date={storedDate} event="Dosarul a fost creat" />
            {/* Add more history items here */}
          </div>
        </div>
      </div>

      <div className="mb-6 bg-surface-base border rounded">
        <div
          className="p-3 bg-neutral-300 cursor-pointer flex justify-between items-center"
          onClick={toggleDocumentCollapse}
        >
          <h2 className="font-semibold">Documente dosar (fișier și descriere)</h2>
          <svg
            className={`w-5 h-5 transition-transform ${isDocumentCollapsed ? 'rotate-0' : 'rotate-180'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className={`overflow-hidden transition-max-height duration-300 ${isDocumentCollapsed ? 'max-h-0' : 'max-h-screen'}`}>
          <div className="p-3">
            <DocumentItem id='CF'
            alreadyHasUpload = {hasUploadedCF == 'true' ? true : false }
              filename="CF AFM Tractoare"
              description="Cerere AFM de finantare completata integral prin tehnoredactare."
              
            />
            <DocumentItem id='CI'
              filename="CI solicitant"
              description="Actul de identitate al solicitantului valabil la momentul inscrierii in aplicatie"
              
            />
            <DocumentItem id='CFF'
              filename="Certificat fiscal ANAF"
              description="Certificatul de atestare fiscala privind obligatiile de plata catre bugetul general."
              
            />
            <DocumentItem id='CFP'
              filename="Certificat fiscal taxe locale"
              description="Certificatul de atestare fiscala privind impozitele si taxele locale."
             
            />
            <DocumentItem id='AP'
              filename="Atestat producator agricol"
              description="Atestatul de producator agricol, emis pe numele solicitantului."
              
            />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="guideline"
          className="mr-2"
          checked={acknowledgedGuideline}
          onChange={handleAcknowledgeChange}
        />
        <label htmlFor="guideline" className="text-sm text-gray-700">
          Declar că am luat la cunoștință prevederile ghidului de finanțare
        </label>
      </div>

      <div className="flex justify-end">
        <button
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline ${!acknowledgedGuideline ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={!acknowledgedGuideline}
          onClick={openCaptcha}
        >
          <p className="inline-block mr-2" /> Confirmare depunere
        </button>
      </div>









    </div>

  );
}


