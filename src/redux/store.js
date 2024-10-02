//
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  // Middleware is automatically added by Redux Toolkit
});

export default store;
