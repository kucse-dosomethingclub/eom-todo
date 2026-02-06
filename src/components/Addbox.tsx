interface Props {
  placeholder: string;
  name: string;
}

const Addbox = ({placeholder, name}:Props) => {
  return (
    <div className="flex gap-2">
      <input
            className="flex-1 rounded-[14px] h-[50px] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-400 focus:ring-0 focus:outline-blue-500"
            placeholder = {placeholder}
            ></input>
            <button className="h-[50px] rounded-[14px] px-6 bg-slate-300 text-white font-medium shadow-md shadow-slate-500/10">{name}</button>
    </div>
  )
}

export default Addbox
