<template>
  <div class="testList layout">
    <div class="commodityList">
      <Commodity v-for="(item,index) in commodity" :title="item.title" :price="item.price" :img="item.img" :key="index" />
    </div>
    <div class="testListItem" v-for="(item,index) in list" :key="index">
      <nuxt-link :to="{ name: 'testList-id', params: item }">{{item.author}}</nuxt-link>
    </div>
  </div>
</template>

<script>
import Commodity from '@/components/Commodity.vue'

export default {
  components: {Commodity},
  data() {
    return {
    }
  },
  async asyncData({$api}) {
    let list=await $api.getTutorialsList()
    let commodity=await $api.getCommodityList()
    return {list,commodity}
  },
  async created() {
    console.log(await this.$api.getTutorialsList())
  }
}
</script>