//
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch projects asynchronously
export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  // Replace with actual API endpoint if available
  const response = await fetch('/api/projects'); // Assuming you have an API
  if (!response.ok) {
    // Simulate fetching data from local JSON if API fails
    const data = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              id: 1,
              title: 'Project One',
              description: 'A brief description of Project One.',
              fullDescription: 'Detailed information about Project One.',
              image: '/assets/project1.png',
              repoLink: 'https://github.com/yourusername/project-one',
              liveLink: 'https://project-one.example.com',
            },
            // Add more projects
          ]),
        500
      )
    );
    return data;
  }
  const data = await response.json();
  return data;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Add reducers if needed for updating projects
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;