import { createSlice  } from "@reduxjs/toolkit";

export const recommendSlice = createSlice({
    name: "recommend",
    initialState : {
        bannerList: [],
        recommendList: [],
        enterLoading: true,
    },
    reducers: {
        CHANGE_BANNER: (state, action) => {
             state.bannerList = action.payload
        },
        CHANGE_RECOMMEND_LIST: (state, action) => {
            state.recommendList = action.payload
        },
        CHANGE_ENTER_LOADING: (state, action) => {
            state.enterLoading = action.payload
        }
    },
 })