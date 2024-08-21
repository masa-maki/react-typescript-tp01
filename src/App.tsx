import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
  name: 'Name',
  // hobbies: ['Movie', 'Game'],
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <>
      <div>
        <Text color="red" fontSize="1.5rem" />
        <UserProfile user={user} />
        <button onClick={onClickFetchData}>Get data</button>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        ))}
      </div>
    </>
  );
}

export default App;
