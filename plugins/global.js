export default ({ app }, inject) => {
    inject('global', {
      test() {
        return "this is test!!!"
      }
    })
  }