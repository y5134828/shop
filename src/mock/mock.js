import Mock from 'mockjs';
import { login, userInfo } from './module/login';
import { goodsList, goodsInfo } from './module/goods';

// user
Mock.mock('/api/user/login', 'post', login);
Mock.mock('/api/user/info', 'post', userInfo);

// goods
Mock.mock('/api/goods/list', 'post', goodsList);
Mock.mock('/api/goods/info', 'post', goodsInfo);
