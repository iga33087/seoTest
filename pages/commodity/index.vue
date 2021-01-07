<template>
  <div>
    搜尋結果
    <div class="commodityList">
      <Commodity v-for="(item,index) in commodity" :key="index" :inStar="inArray('star',item.id)" :inCart="inArray('cart',item.id)" :cid="item.id" :title="item.name" :price="item.price" :img="item.img" @showMore="showMore" @snedStar="snedStar" @snedCart="snedCart" />
    </div>
  </div>
</template>

<script>
import Commodity from '@/components/Commodity.vue'

export default {
  components: {Commodity},
  data() {
    return {
      star:[1,2,3,8],
      cart:[1,5,6,8]
    }
  },
  async asyncData({$api}) {
    let commodity=await $api.getCommodityList()
    return {commodity}
  },
  methods: {
    inArray(arr,x) {
      let index=this[arr].indexOf(x)
      if(index===-1) return false
      else return true
    },
    showMore(x) {
      this.$router.push({ name: 'commodity-id', params: {id:x} })
    },
    snedStar(x) {
      let index=this.star.indexOf(x)
      if(index===-1) this.star.push(x)
      else this.star.splice(index,1)
      this.$message({
        message: '已更新欲購清單',
        type: 'success'
      });
    },
    snedCart(x) {
      let index=this.cart.indexOf(x)
      if(index===-1) this.cart.push(x)
      else this.cart.splice(index,1)
      this.$message({
        message: '已更新購物車',
        type: 'success'
      });
    }
  }
}
</script>