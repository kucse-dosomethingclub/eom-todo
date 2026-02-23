import { useState, useEffect } from 'react';
import CheckIcon from "./components/CheckIcon";
import Addbox from "./components/Addbox";
import Tabmenu from "./components/Tabmenu";
import Checklist from "./components/Checklist";

const App = () => {
  { /* 불러오기 */}
  const [todo, setTodos] = useState<string[]>(() => {
    const localTodoList = localStorage.getItem('todo');
    return localTodoList ? JSON.parse(localTodoList) : [];
  });
  
  const handleAddTodo = (name: string) => {
    console.log("데이터 도착", name);
    { /* ...은 기존 메모리에 있던 데이터를 새로운 메모리 공간으로 몽땅 복사해오는 작업 */}
    setTodos([...todo, name]);
  };

  { /* 저장하기 */}
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

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
          <Addbox placeholder="할 일을 입력해주세요." name="추가" Onclick={ handleAddTodo }/>
          <Tabmenu />
        </div>

        { /*Section */ }
        <div className="space-y-[12px] h-[300px] text-slate-700 overflow-y-auto">
          {todo.map((todo, index) => (
            <Checklist key = {index} name = {todo} />
          ))}
        </div>

        { /*Footer*/ }
        <div className="border-t border-slate-100 pt-[24px] text-slate-500 font-medium">
          남은 할 일 <span className="text-blue-600">1</span>개
        </div>
      </div>
    </div>
  );
}

export default App;
