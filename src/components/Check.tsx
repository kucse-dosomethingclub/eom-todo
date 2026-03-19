interface CheckProps {
  isSelected?: boolean;
  onClick: () => void;  
  todoName: string;
}


const Check = ({isSelected, onClick, todoName}: CheckProps) => {
  const baseClass = 'py-2 rounded-[10px] text-[14px] flex-1 font-medium cursor-pointer'

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={`${baseClass} ${isSelected ? 'bg-white text-blue-600 shadow' : 'text-slate-500'}`}
      onClick={onClick}
    >
      {todoName}
    </button>
  )
}

export default Check;  