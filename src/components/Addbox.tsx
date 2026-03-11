import { useState } from 'react';

interface Props {
  placeholder: string;
  Onclick:(value: string) => void;
  name: string;
}

const Addbox = ({placeholder, Onclick, name}:Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if(inputValue.trim() === "") return ;
    Onclick(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex gap-2">
      <input
            className="flex-1 rounded-[14px] h-[50px] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-400 focus:ring-0 focus:outline-blue-500"
            placeholder = {placeholder}
            value = {inputValue}
            onChange={(e) => setInputValue(e.target.value) /*이건 텍스트에 적힌거 저장하는 함수*/}
            ></input>
            <button onClick={ handleAddClick } className="h-[50px] rounded-[14px] px-6 bg-slate-300 text-white font-medium shadow-md shadow-slate-500/10 cursor-pointer">{name}</button>
    </div>
  )
}

export default Addbox
