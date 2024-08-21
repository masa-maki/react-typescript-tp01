import { FC } from 'react';
import { TodoType } from './types/todo';

// export const Todo = (
// props: TodoType
// props: Pick<TodoType, 'userID' | 'title' | 'completed'>
//   props: Omit<TodoType, 'id'>
// ) => {
export const Todo: FC<Omit<TodoType, 'id'>> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[DONE]' : '[TODO]';
  return <p>{`${completeMark} ${title}(user:${userId})`}</p>;
};
