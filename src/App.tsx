import CheckIcon from "./components/CheckIcon";
import Check from "./components/Check";

const App = () => {
  return (
    <div className="bg-slate-50 w-full h-screen flex justify-center items-center">
      <div className="w-[480px] bg-white p-8 rounded-3xl shadow-2xl shadow-slate-500/5 space-y-8">
        { /* Header */ }
        <div className="flex items-center gap-2">
          <div className="rounded-full w-[40px] h-[40px] bg-blue-50 flex justify-center items-center text-blue-600">
            <CheckIcon size={22}/>
          </div>
          <h1 className="text-2xl font-bold">엄투두</h1>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-[14px] h-[50px] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-400 focus:ring-0 focus:outline-blue-500"
              placeholder="할 일을 입력해주세요"
            ></input>
            <button className="h-[50px] rounded-[14px] px-6 bg-slate-300 text-white font-medium shadow-md shadow-slate-500/10">추가</button>
          </div>
          
          <div className="flex p-1 rounded-[14px] bg-slate-100">
            <Check isSelected={true} name="전체"/>
            <Check isSelected={false} name={"미완료"}/>
            <Check isSelected={false} name={"완료"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
