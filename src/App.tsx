import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import CheckIcon from "./components/CheckIcon";
import TodoInput from "./components/TodoInput";
import Tabmenu from "./components/Tabmenu";
import Checklist from "./components/Checklist";

interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

const menu = ["전체", "완료", "미완료"]

const App = () => {
  { /* 서버에서 불러온 todolist를 담을 배열 초기화 */}
  const [todos, setTodos] = useState<TodoItem[]>([]);
  { /* 검색어 담을 공간 */}
  const [searchKeyword, setSearchKeyword] = useState("");

  { /* todo 추가 */}
  const handleAddTodo = async (input: string) => {
    const newTodo = { title: input, isDone: false};

    try {
      const response = await axios.post('http://localhost:3001/todos', newTodo);
      
      setTodos((prev) => [...prev, response.data]);
    } catch(e) {
      console.error("추가 실패!", e);
    }
  };
  
  { /* 데이터 불러오기 */ }
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/todos');
        console.log("실제 데이터: ", response.data);
        if(response.data && Array.isArray(response.data.data)) { 
          setTodos(response.data.data);
        } else if (Array.isArray(response.data)) {
          setTodos(response.data);
        }
      } catch (e) {
        console.error("서버 연결 실패!", e);
      }
    };
    fetchTodos();
  }, []); // []는 처음 랜더링 될 때 딱 한 번만 실행하라는 뜻

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  { /* useMemo를 사용해 필터링된 리스트 캐싱 */ }
  const filteredTodos = useMemo(() => {
    return todos.filter((item) => {
      if (!item || !item.title) return false;

      const isMatched = item.title.toLowerCase().includes(searchKeyword.toLowerCase());
      if (!isMatched) return false;

      if (selectedIndex === 0) return true;
      if (selectedIndex === 1) return item.isDone;
      if (selectedIndex === 2) return !item.isDone;
      return true;
    });
  }, [todos, selectedIndex, searchKeyword]);

  const handleSearchTodo = (input: string) => {
    setSearchKeyword(input);
  };

  const handleToggle = (id: number) => {
    setTodos((prevTodo) => prevTodo.map((item) => 
      item.id === id ? { ...item, isDone: !item.isDone }: item));
  };

  const remainingCount = useMemo(() => {
    return todos.filter(item => !item.isDone).length;
  }, [todos]);

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
          <TodoInput placeholder="할 일을 입력해주세요." buttonlabel="추가" onSubmit={ handleAddTodo }/>
          <TodoInput placeholder="검색할 제목을 입력해주세요." buttonlabel="검색" onSubmit={ handleSearchTodo }/> 
          <Tabmenu menu={menu} selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}/>
        </div>

        { /*Section */ }
        <div className="space-y-[12px] h-[300px] text-slate-700 overflow-y-auto">
          {filteredTodos.map((item) => (
            <Checklist key = {item.id} taskName = {item.title} isChecked={item.isDone} onToggle={() => handleToggle(item.id)}/>
          ))}
        </div>

        { /*Footer*/ }
        <div className="border-t border-slate-100 pt-[24px] text-slate-500 font-medium">
          남은 할 일 <span className="text-blue-600">{remainingCount}</span>개
        </div>
      </div>
    </div>
  );
}

export default App;
