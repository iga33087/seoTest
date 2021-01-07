<template>
  <div class="leftMenu">
    <LeftMenuItem v-for="(item,index) in data" :data="item" :key="index" />
  </div>
</template>

<script>
import LeftMenuItem from '@/components/LeftMenuItem.vue'

export default {
  components:{LeftMenuItem},
  props: {
    tagList: {
      default:()=> []
    }
  },
  computed: {
    data() {
      let arr=this.tagList.filter(res=>!res.parentId)
      for(let item of arr) {
        item.children=this.getTree(item)
      }
      return arr
    }
  },
  methods: {
    getTree(x) {
      let arr=[]
      for(let item of this.tagList) {
        if(item.parentId==x.id) {
          arr.push({...item,children:this.getTree(item)})
        }
      }
      return arr
    }
  }
}
</script>