import { createSlice  } from "@reduxjs/toolkit";
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';


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

 export const getBannerList = () => {
    return (dispatch) => {
      getBannerRequest ().then (data => {
        dispatch (CHANGE_BANNER (data.banners));
      }).catch (() => {
        console.log ("轮播图数据传输错误");
      }) 
    }
  };

export const getRecommendList= () => {
    return (dispatch) => {
      getRecommendListRequest ().then (data => {
        dispatch (CHANGE_RECOMMEND_LIST (data.result));
        dispatch (CHANGE_ENTER_LOADING (false));// 改变 loading
      }).catch (() => {
        console.log ("推荐歌单数据传输错误");
      });
    }
  };

export const {CHANGE_BANNER,CHANGE_RECOMMEND_LIST,CHANGE_ENTER_LOADING } = recommendSlice.actions

export default recommendSlice.reducer

