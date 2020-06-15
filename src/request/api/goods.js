import request from '../request';

export function goodsList (data) {
  return request({
    url: '/goods/list',
    method: 'post',
    data: data
  })
}

export function goodsInfo (data) {
  return request({
    url: 'goods/info',
    method: 'post',
    data: data
  })
}

export function changeFavorite (data) {
  return request({
    url: 'goods/changeFavorite',
    method: 'post',
    data: data
  })
}
