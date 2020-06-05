import Mock from 'mockjs';

const Random = Mock.Random; // 获取 mock.Random 对象

const goodsList = {
  code: 1,
  msg: 'success',
  data: {
    'list|10-20': [
      { 'id|+1': Random.integer(1, 20000), title: Random.csentence(5, 12), desc: Random.csentence(15, 40), img: Random.image('200x100', '#ffcc33', '#FFF', 'png', Random.csentence(2, 5)) },
    ]
  }
};

export {
  goodsList
};
