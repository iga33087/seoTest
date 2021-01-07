<template>
  <div class="leftMenuItem">
    <div class="leftMenuItemTitle">
      <div>{{data.title}}</div>
      <i class="el-icon-caret-right" v-if="data.children.length" />
    </div>
    <div class="leftMenuItemChildren" v-if="data.children.length">
      <LeftMenuItem v-for="(item,index) in data.children" :data="item" :key="index" />
    </div>
  </div>
</template>

<script>
import LeftMenuItem from '@/components/LeftMenuItem.vue'
export default {
  components:{LeftMenuItem},
  name:"LeftMenuItem",
  props:["data"]
}
</script>