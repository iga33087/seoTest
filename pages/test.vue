<template>
  <div class="test">
    test
  </div>
</template>

<script>
export default {
  layout: 'testLay',
  data() {
    return {
      flag:true
    }
  },
  middleware({redirect}) {
    if (true) {
      return redirect('/')
    }
  }
}
</script>