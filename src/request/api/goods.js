import request from '../request';

export function goodsList (data) {
  return request({
    url: '/goods/list',
    method: 'post',
    data: data
  })
}
