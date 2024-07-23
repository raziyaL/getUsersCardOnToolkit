import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';



export const  getCards = createAsyncThunk(
    "getCards",
    async function (info, {dispatch}){
        try{
            // dispatch(preloaderOn())
            const response = await fetch ("https://jsonplaceholder.typicode.com/users")
            const cards = await response.json();
            dispatch(cardsInfo(cards))
        }catch(error){
            console.log("error")
        }finally{
            // dispatch(preloaderOff())
        }})

export const getUser = createAsyncThunk(
    'users/getUser',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = await response.json();
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const UsersSlice = createSlice({
    name: "UsersSlice",
    initialState: {
        posts: [],
        user: null,
        loading: false,
    },
    reducers: {
        cardsInfo: (state, action) => {
            state.posts = action.payload;
        },
        userInfo: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { cardsInfo, userInfo, setLoading} = UsersSlice.actions;
export default UsersSlice.reducer;