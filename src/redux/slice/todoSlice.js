import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchTodos = createAsyncThunk("fetchTodos", async(newUser)=>{
    const respond = await axios.post("http://localhost:5000/users",newUser,{withCredentials: true});
    return respond.data;
})

export const fetchUser = createAsyncThunk("fetchUser", async(currentUser)=>{
    const respond = await axios.post("http://localhost:5000/currentUser",currentUser,{withCredentials: true});
    return respond.data;
})

const todoSlice = createSlice({
    name : 'todo',
    initialState: {
        isLoading : false,
        data : null,
        isError : false,
        isSuccess : null,
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchTodos.pending , (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(fetchTodos.rejected , (state, action)=>{
            console.log("Error", action.payload);
            state.isError = true;
            state.isSuccess = false
        })

        builder.addCase(fetchUser.pending , (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(fetchUser.rejected , (state, action)=>{
            console.log("Error", action.payload);
            state.isError = true;
            state.isSuccess = false
        })
    }
})

export default todoSlice.reducer;