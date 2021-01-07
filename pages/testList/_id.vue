<template>
  <div>
    <img :src="data.img">
    {{data.author}}
  </div>
</template>

<script>
export default {
  async asyncData({$api,params}) {
    let data=await $api.getTutorials(params.id)
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