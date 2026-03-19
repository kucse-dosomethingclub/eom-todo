import CheckIcon from "./CheckIcon";

interface ChecklistProps {
  taskName: string,
  isChecked: boolean,
  onToggle: () => void,
}

const Checklist = ({ taskName, isChecked, onToggle }: ChecklistProps) => {
  
  return (
    <li className="flex gap-3 border border-slate-100 h-[61px] items-center pl-[16px] pr-[58px] rounded-[14px] list-none">
      <button type = "button"
       role="checkbox"
       aria-checked={isChecked}
       aria-label={`${taskName} 완료 상태로 변경`}
       className={`w-[24px] h-[24px] flex items-center justify-center border-2 rounded-lg
        ${isChecked ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-300'}`}
        onClick={onToggle}>
        {isChecked && <CheckIcon/>}
      </button>

      <div className={`flex-1 min-w-0 line-clamp-1 ${isChecked ? 'line-through text-slate-400' : 'text-slate-800'}`}>
        {taskName}
      </div>  
    </li>
  );
};

export default Checklist;
