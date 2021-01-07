<template>
  <div class="commodity" @click="showMore(cid)">
    <div class="commodityDiscount" v-if="discount">
      <div class="commodityDiscountContent">-{{discount}}%</div>
    </div>
    <div class="commodityImgBox">
      <img class="commodityImgBoxImg" :src="img">
    </div>
    <div class="commodityInfo">
      <div class="commodityInfoBox">
        <div class="commodityInfoBoxTitle">{{title}}</div>
        <div class="commodityInfoBoxPrice">NTD ${{price}}</div>
      </div>
    </div>
    <div class="commodityMenu">
      <el-tooltip class="item" effect="dark" content="加入欲購清單" placement="top">
        <div class="commodityMenuItem" @click.stop="snedStar(cid)">
          <i :class="inStar ? 'el-icon-star-on':'el-icon-star-off'"></i>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="立即購買" placement="top">
        <div class="commodityMenuItem">
          <i class="el-icon-goods"></i>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="加入購物車" placement="top">
        <div class="commodityMenuItem" @click.stop="snedCart(cid)">
          <i :class="inCart ? 'el-icon-shopping-cart-full':'el-icon-shopping-cart-2'"></i>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cid: {},
    img: {
      default:"https://www.clipartkey.com/mpngs/m/26-260102_not-mine-pikachu-chibi-fabulous-cute-kute-tiny.png"
    },
    title: {
      default:"未定義商品"
    },
    price: {
      default:"9999999"
    },
    discount: {
      default:0
    },
    inStar: {
      default:false
    },
    inCart: {
      default:false
    },
  },
  methods: {
    showMore(x) {
      this.$emit("showMore",x)
    },
    snedStar(x) {
      this.$emit("snedStar",x)
    },
    snedCart(x) {
      this.$emit("snedCart",x)
    }
  }
}
</script>