import axios from "axios";
import { ListWork } from "../interface/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TasksState {
  tasks: ListWork[];
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  error: null,
};

export const fetchTasks: any = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const response = await axios.get("http://localhost:8080/listWork");
    return response.data;
  }
);

export const addTask: any = createAsyncThunk(
  "tasks/addTask",
  async (newTask) => {
    const response = await axios.post(
      "http://localhost:8080/listWork",
      newTask
    );
    return response.data;
  }
);

export const updateCheckbox: any = createAsyncThunk(
  "checkbox/updateCheckbox",async (newCheckbox:any) => {
    const response = await axios.patch(
      `http://localhost:8080/listWork/${newCheckbox.id}`,
      newCheckbox
    );
    return response.data;
  }
)

const tasksSlice = createSlice({
  name: "tasks",
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state: any) => {
      })
      .addCase(fetchTasks.fulfilled, (state: any, action: any) => {
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state: any, action: any) => {
      })
      .addCase(addTask.fulfilled, (state: any, action: any) => {
        state.tasks.push(action.payload);
      }).addCase(updateCheckbox.fulfilled, (state: any, action: any) =>{
        const index = state.tasks.findIndex((item:any)=>item.id == action.payload.id)
        // console.log(action.payload);
        state.tasks[index] = action.payload;
      })
  },
});

export default tasksSlice.reducer;
