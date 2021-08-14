import React, { useEffect } from 'react';
import {useSelector, useDispatch } from "react-redux";

import Slider from '../../components/slider/';
import RecommendList from '../../components/list/';
import Scroll from '../../baseUI/scroll/index';
import { Content } from './style';
import { forceCheck } from 'react-lazyload';
import Loading from '../../baseUI/loading/index';

import {getRecommendList, getBannerList} from './store/recommendSlice'
import { getRecommendListRequest } from '../../api/request';

export default function Recommend (){
  const dispatch = useDispatch();
  const bannerList = useSelector((state)=>state.recommend.bannerList);
  const recommendList= useSelector((state)=>state.recommend.recommendList);
  const enterLoading = useSelector((state)=>state.recommend.enterLoading);
  useEffect (() => {
    dispatch(getBannerList ());
    dispatch(getRecommendList ());
    //eslint-disable-next-line
  }, []);

  return (
    <Content>
    <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
    </Scroll>
    { enterLoading ? <Loading></Loading> : null }
    </Content>
  );
}