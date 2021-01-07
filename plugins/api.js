import axios from 'axios'
export default ({ app }, inject) => {
    inject('api', {
      baseURL:"http://localhost:7000/",
      getTagList() {
        return axios.get(this.baseURL+"tag").then(res=>res.data)
      },
      getTutorialsList() {
        return axios.get(this.baseURL+"tutorials").then(res=>res.data)
      },
      getTutorials(x) {
        return axios.get(this.baseURL+"tutorials/"+x).then(res=>res.data)
      },
      getCommodityList() {
        return axios.get(this.baseURL+"commodity").then(res=>res.data)
      },
      getCommodity(x) {
        return axios.get(this.baseURL+"commodity/"+x).then(res=>res.data)
      }
    })
  }