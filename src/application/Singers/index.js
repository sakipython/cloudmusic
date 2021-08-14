import React, { useState } from 'react';
import Horizen from '../../baseUI/horizen-item';
import { categoryTypes, alphaTypes } from '../../api/config';
import {Content, ListContainer} from './style';
import SingerList from '../../components/singerList'
import Scroll from '../../baseUI/scroll';

function Singers () {
    let [category, setCategory] = useState("");
    let [alpha, setAlpha] = useState("");

    const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map (item => {
        return {
          picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
          name: "隔壁老樊",
          accountId: 277313426,
        }
      }); 


    function handleUpdateCatetory(oldVal){
        setCategory(oldVal)
    }

    function handleUpdateAlpha(oldVal){
        setAlpha(oldVal)
    }

    return ( 
        <div>
        <Content>
          <Horizen 
            list={categoryTypes} 
            title={"分类 (默认热门):"} 
            handleClick={(val) => handleUpdateCatetory (val)} 
            oldVal={category}></Horizen>
          <Horizen 
            list={alphaTypes} 
            title={"首字母:"} 
            handleClick={val => handleUpdateAlpha (val)} 
            oldVal={alpha}></Horizen>
        </Content> 
        <ListContainer>
          <Scroll>
             <SingerList singerList = {singerList}></SingerList>
          </Scroll>
        </ListContainer>
      </div>
       
    )
}

export default React.memo(Singers);