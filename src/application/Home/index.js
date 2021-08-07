import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Tab, TabItem } from './style';
import { NavLink } from 'react-router-dom';

export default function Home (props) {
    const {route} = props;
    return (
      <div>
        <Top>
          <span className="iconfont menu">目录</span>
          <span className="title">WebApp</span>
          <span className="iconfont search">搜索</span>
        </Top>
        <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 推荐 </span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span > 歌手 </span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span > 排行榜 </span></TabItem></NavLink>
      </Tab>
        { renderRoutes (route.routes) }
      </div>

    )
}

