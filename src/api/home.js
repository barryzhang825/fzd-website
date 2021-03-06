import request from '@/utils/request'


export function getHomeMenu(data) {
  return request({
    url: '/classify-deskend/classifySelectByPage',
    method: 'get',
    params:data
  })
}
export function getFooterInfo(data) {
  return request({
    url: '/contactUs-deskend/contactUsSelectDetail',
    method: 'get',
    params:data
  })
}

export function getHomeBanner(data) {
  return request({
    url: '/banner-deskend/bannerSelectListByPage',
    method: 'get',
    params:data
  })
}

export function getHomeProduct(data) {
  return request({
    url: '/product-deskend/productSelectListBySort',
    method: 'get',
    params:data
  })
}

export function getHomeAboutUs(data) {
  return request({
    url: '/aboutUs-deskend/aboutUsSelectByIs',
    method: 'get',
    params:data
  })
}
export function getHomeEquipment(data) {
  return request({
    url: '/facility-deskend/facilitySelectByPage',
    method: 'get',
    params:data
  })
}
export function getHomeNews(data) {
  return request({
    url: '/news-deskend/newsSelectByPage',
    method: 'get',
    params:data
  })
}
export function contactUs(data) {
  return request({
    url: '/message-deskend/messageAdd',
    method: 'post',
    data
  })
}

export function updateWord(data) {
  return request({
    url: '/updatePassword',
    method: 'post',
    data
  })
}
