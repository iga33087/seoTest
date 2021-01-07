<template>
  <div class="layoutBox">
    <Header />
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
