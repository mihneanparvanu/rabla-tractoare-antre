interface UploadButtonProps {
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}

export default function UploadButton ({onClick, onChange, id, fileInputRef, name}: UploadButtonProps) {
  return (
   <button className="bg-primaryBlue hover:bg-blue-900 text-white font-bold py-2 px-3 rounded text-sm mr-2"
   onClick={onClick}>
   <p className="inline-block mr-1" /> Încarcă
   <input className='hidden'
     id={id}
     type="file"
     name = {name}
     ref={fileInputRef}
    onChange={onChange}
   />
 </button>
   )
}
