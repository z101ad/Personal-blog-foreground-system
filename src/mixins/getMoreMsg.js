/**
 * 
 * @param {*} getMsg 
 * @param {*} container 
 * @returns 
 */
export default function (getMsg, container) {
  return {
    data() {
      return {
        isCommentLoading: false,
        options: {
          page: 1,
          limit: 10
        },
        mainDom: null
      }
    },
    methods: {
      async getMoreData() {
        this.isCommentLoading = true
        this.options.page++
        const res = await getMsg(this.options)
        this.data.rows = [...this.data.rows, ...res.rows]
        this.isCommentLoading = false
      }
    },
    computed: {
      end() {
        if (this.data.rows) {
          return this.data.rows.length < this.data.total
        }
      }
    },
    mounted() {
      this.mainDom = this.$refs[container]
    }
  }
}
