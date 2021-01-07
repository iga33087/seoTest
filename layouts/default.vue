<template>
  <div class="layoutBox">
    <Header />
    <el-carousel class="elCarousel" trigger="click" :interval="4000" type="card" height="500px" >
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="elCarouselItem">{{ item }}</div>
      </el-carousel-item>
    </el-carousel>
    <div class="layout">
      <LeftMenu :tagList="tagList" />
      <div class="content">
        <FeaturesBar />
        <Nuxt />
      </div>
    </div>
    <Floor />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LeftMenu from '@/components/LeftMenu.vue'
import FeaturesBar from '@/components/FeaturesBar.vue'
import Floor from '@/components/Floor.vue'
export default {
  components:{Header,LeftMenu,FeaturesBar,Floor},
  data() {
    return {
      tagList:[]
    }
  },
  async created() {
    this.tagList=await this.$api.getTagList()
  }
}
</script>
