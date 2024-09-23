import './App.css';
import TodoList from "./component/TodoList/TodoList";
import Header from "./component/Header/Header";
import {useState} from "react";
import {DarkModeProvider} from "./context/DarkModeContext";

const filters = ['all', 'active', 'done']

function App() {
    const [filter, setFilter] = useState(filters[0])

    const selectedFilter = filter => setFilter(filter);

    return (
        <DarkModeProvider>
            <Header filters={filters} filter={filter} onChanged={selectedFilter}/>
            <TodoList filter={filter}/>
        </DarkModeProvider>
    );
}

export default App;
