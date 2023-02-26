export default (data=null)=>{
    return {
        data(){
            return {
                isLoading:true,
                data:data
            }
        },
        async created(){
            this.data = await this.getData()
            this.isLoading = false
        }
    }
}