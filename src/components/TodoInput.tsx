import { useState } from 'react';

interface TodoInputProps {
  placeholder: string;
  onSubmit:(value: string) => void;
  buttonlabel: string;
}

const TodoInput = ({ placeholder, onSubmit, buttonlabel }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = (e: React.MouseEvent | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimValue = inputValue.trim();

    if (trimValue === "") return;
    onSubmit(trimValue);
    setInputValue("");
  };

  return (
    <form className="flex gap-2">
      <input
            className="flex-1 rounded-[14px] h-[50px] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-400 focus:ring-0 focus:outline-blue-500"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={ handleAddClick } className="h-[50px] rounded-[14px] px-6 bg-slate-300 text-white font-medium shadow-md shadow-slate-500/10 cursor-pointer">{buttonlabel}</button>
    </form>
  )
}

export default TodoInput;
