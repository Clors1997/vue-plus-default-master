<template>
  <div id="login">
    <van-form class="login-table" @submit="onSubmit">
      <van-field
        v-model="username"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        label-width="3em"
        :rules="[{ required: true, message: '手机号格式错误' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        label-width="3em"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        label-width="5em"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { Form } from 'vant'
export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
  },
  data() {
    return {
      username: '',
      password: '',
      sms: '',
    }
  },
  computed: {
    ...mapGetters(['getStorage']),
  },
  methods: {
    ...mapMutations(['setStorage']),
    onSubmit() {
      const loading = this.$loading()
      setTimeout(() => {
        loading.close()
        this.setStorage({ key: 'token', value: 'AAAAA' })
        this.$router.replace({ name: 'HomeLayout' })
      }, 1200)
      console.log('onSubmit')
    },
  },
}
</script>

<style lang="less">
#login {
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/login-bg.jpg') center center / cover no-repeat;
  .login-table {
    margin-top: 30vh;
  }
  .van-cell {
    width: 90%;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 5px;
  }
}
</style>
