import Mock from 'mockjs';

const Random = Mock.Random; // 获取 mock.Random 对象

const goodsList = {
  code: 1,
  msg: 'success',
  data: {
    'list|10-20': [
      { 'id|+1': Random.integer(1, 20000),
        title: Random.csentence(5, 12),
        desc: Random.csentence(15, 40),
        img: Random.image('120x120', '#ffcc33', '#FFF', 'png', Random.csentence(2, 5)),
        price: Random.float(5, 999, 1, 2),
        num: Random.integer(1, 999),
        address: Random.city(true)
      }
    ]
  }
};

const goodsInfo = {
  code: 1,
  msg: 'success',
  data: {
    'id': Random.integer(1, 20000),
    title: Random.csentence(5, 12),
    desc: Random.csentence(15, 40),
    img: Random.image('120x120', '#ffcc33', '#FFF', 'png', Random.csentence(2, 5)),
    'banner|3': [Random.image('750x480', '#ffcc33', '#FFF', 'png', Random.csentence(2, 5))],
    price: Random.float(5, 999, 1, 2),
    num: Random.integer(1, 999),
    address: Random.city(true)
  }
}

export {
  goodsList,
  goodsInfo
};
