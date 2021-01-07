<template>
  <div class="featuresBar">
    <div class="featuresBarSearch">
      <el-select class="featuresBarSearchItem" v-model="searchTag" placeholder="標籤">
        <el-option
          label="測試"
          value="">
        </el-option>
      </el-select>
      <el-input class="featuresBarSearchItem" v-model="searchText" placeholder="關鍵字"></el-input>
      <el-button type="primary" icon="el-icon-search">搜尋</el-button>
    </div>
    <div class="featuresBarDisplayMode">
      <el-button icon="el-icon-s-grid">方塊</el-button>
      <el-button icon="el-icon-notebook-2">列表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTag:"",
      searchText:"",
      displayMode:1
    }
  }
}
</script>