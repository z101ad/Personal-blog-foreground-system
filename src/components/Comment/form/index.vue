<template>
  <form @submit.prevent="submit" class="form" ref="form">
    <div class="nickname">
      <input type="text" maxlength="10" placeholder="请输入昵称" v-model="sendForm.nickname" @input="checkName(sendForm.nickname)"/>
      <span class="nick-count">{{nickLength}}/10</span>
      <div class="nick-err" ref="nick">

    </div>
    </div>
    
    <div class="content">
      <textarea type="text" maxlength="300" rows="7" cols="20" placeholder="请输入内容" v-model="sendForm.content" @input="checkCon(sendForm.content)"/>
      <span class="con-count">{{conLength}}/300</span>
      <div class="con-err" ref="con">

    </div>
    </div>
    <button class="submit" type="submit" :disabled="isSending">{{isSending?"发送中...":"发送"}}</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      sendForm:{
        nickname:"",
        content:""
      },
      isSending:false
    }
  },
  computed:{
    nickLength(){
      return this.sendForm.nickname.trim().length
    },
    conLength(){
      return this.sendForm.content.trim().length
    }
  },
  methods:{
    submit(){
      if(!this.sendForm.nickname.trim() && !this.sendForm.content.trim()){
        this.$refs.nick.innerHTML = "请输入昵称"
        this.$refs.con.innerHTML = "请输入内容"
        return
      }
      if(!this.sendForm.nickname.trim()){
        this.$refs.nick.innerHTML = "请输入昵称"
        return
      }
      if(!this.sendForm.content.trim()){
        this.$refs.con.innerHTML = "请输入内容"
        return
      }
      this.isSending = true
      this.$emit("sendForm", this.sendForm,(content,type,duration)=>{
        this.sendForm.nickname = ""
        this.sendForm.content = ""
        this.isSending = false
        this.$showMessage({content,type,duration,container:this.$refs.form})
      })
    },
    checkCon(con){
      con && (this.$refs.con.innerHTML="")
    },
    checkName(name){
      name && (this.$refs.nick.innerHTML="")
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/less/var.less';
.form {
  .nickname {
    position: relative;
    width: 380px;
    margin-bottom: 8px;
    input {
      height: 40px;
      line-height: 40px;
      padding:0 15px;
    }
  }
  .content {
    position: relative;
    margin-bottom: 8px;
    textarea {
      padding:8px 15px;
    }
  }
  input, textarea {
    display: block;
    width: 100%;
    outline: none;
    color:@words;
    border: 1px dashed @gray;
    font-size:14px;
    border-radius: 5px;
    resize: none;
  }
  input:focus, textarea:focus {
    border-color: @primary;
  }
  .nick-err, .con-err {
    height: 20px;
    font-size:14px;
    line-height: 20px;
    color:#cc3600;
    margin-top: 6px;
  }
  .nick-count, .con-count {
    position: absolute;
    right:5px;
    bottom:30px;
    height: 16px;
    line-height:16px;
    color:@gray;
    font-size:12px;
  }
  .submit {
    width: 100px;
    height: 34px;
    padding:1px 6px;
    background-color: @primary;
    color:#fff;
    border-radius: 5px;
    border: 0;
    &:hover {
      background-color:#3d80e9
    }
  }
}

</style>