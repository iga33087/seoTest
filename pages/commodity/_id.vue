<template>
  <div>
    <div class="commodityDetail">
      <div class="commodityDetailBox">
        <div class="commodityDetailBoxImg">
          <img class="commodityDetailBoxImgImg" :src="data.img" />
        </div>
        <div class="commodityDetailBoxInfo">
          <div class="commodityDetailBoxInfoBox">
            <div class="commodityDetailBoxInfoItem">
              <div class="commodityDetailBoxInfoItemTitle title">{{data.name}}</div>
            </div>
            <div class="commodityDetailBoxInfoItem">
              <div class="commodityDetailBoxInfoItemTitle">價錢</div>
              <div class="commodityDetailBoxInfoItemContent">NTD ${{data.price}}</div>
            </div>
            <div class="commodityDetailBoxInfoItem">
              <div class="commodityDetailBoxInfoItemTitle">購買數量</div>
              <div class="commodityDetailBoxInfoItemContent">10</div>
            </div>
            <div class="commodityDetailBoxInfoItem commodityDetailBoxInfoItemLast">
              <div class="commodityDetailBoxInfoItemTitle">商品簡介</div>
              <div class="commodityDetailBoxInfoItemContent commodityDetailBoxInfoItemContentLast">99999</div>
            </div>
          </div>
          <div class="commodityDetailBoxInfoMenu">
            <div class="commodityDetailBoxInfoMenuItem">加入欲購清單</div>
            <div class="commodityDetailBoxInfoMenuItem">立即購買</div>
            <div class="commodityDetailBoxInfoMenuItem">加入購物車</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout:"layout2",
  async asyncData({$api,params}) {
    let data=await $api.getCommodity(params.id)
    return {data}
  },
  head() {
    return {
      title: this.data.author,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ]
    }
  }
}
</script>