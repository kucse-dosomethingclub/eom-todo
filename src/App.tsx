import CheckIcon from "./components/CheckIcon";
import Addbox from "./components/Addbox";
import Tabmenu from "./components/Tabmenu";
import Checklist from "./components/Checklist";

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
          <Addbox placeholder="할 일을 입력해주세요." name="추가"/>
          <Tabmenu />
        </div>

        { /*Section */ }
        <div className="space-y-[12px] h-[300px] text-slate-700">
          <Checklist name="할 일" />
          <Checklist name="완료 한 일" />
        </div>

        { /*Footer*/ }
        <div className="border border-slate-100 pt-[24px] h-auto text-slate-500">
          남은 할 일 1개
        </div>
      </div>
    </div>
  );
}

export default App;
