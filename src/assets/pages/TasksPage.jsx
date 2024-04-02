/* eslint-disable no-unused-vars */
import React, { Fragment, useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormCard from '../components/cards/formCard/FormCard';
import TaskCard from '../components/cards/taskCard/TaskCard';
import GridCards from '../layouts/gridCards/GridCards';
import { getTasks } from '../services/api';

export default function TasksPage() {
  const [tasks, setTasks] = useState([])
  const fetchTasks = useCallback(async () => {
    console.log('fetch tasks called');
    try {
      const token = localStorage.getItem('token');

      const response = await getTasks(token);

      // Definir as tasks no estado local
      setTasks(response.data.tasks);

    } catch (error) {
      // Lidar com qualquer erro que ocorra durante a requisição
      console.error('Erro ao buscar tasks:', error);
      if(error.response.data.error == 'Token invalid') {
        localStorage.removeItem('token');
      }
    }
  }, []);

  useEffect(() => {
    console.log('component loaded successfully');
    fetchTasks();
  }, [fetchTasks]);

  const navigate = useNavigate()
  return (
    <Fragment>
      <main>
        <FormCard handleFetchTasks={fetchTasks} />
        <GridCards>
          {
            tasks.map(task => (
              <TaskCard key={task.id} id={task.id} title={task.title} content={task.content} favorite={task.favorite} handleFetchTasks={fetchTasks}/>
            ))
          }
        </GridCards>
      </main>
    </Fragment>
  )
}
