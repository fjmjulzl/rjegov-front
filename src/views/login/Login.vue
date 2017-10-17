<template>
    <div>
        <div>
            <el-input placeholder="请输入用户名" name="rjname"></el-input>
            <el-input placeholder="请输入密码" name="rjpwd"></el-input>
            <el-input placeholder="请再次输入密码" name="rjrpwd"></el-input>
        </div>
        <div>
            <el-button @click="rjlogin">登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return {
                rjname: '',
                rjpwd: '',
                rjrpwd: ''
            }
        },
        methods: {
            rjlogin(){
                this.$router.push('/home');
            }
        }
    }
</script>

<style scoped>

</style>