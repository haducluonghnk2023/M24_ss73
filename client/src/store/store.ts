import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksSlice';

const store:any = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
