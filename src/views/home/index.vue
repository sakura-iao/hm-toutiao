<template>
  <el-container class="container-home">
    <el-aside class="my-aside" :width="isOpen?'200px':'64px'">
      <div class="logo" :class="{minLogo:!isOpen}"></div>
      <el-menu
        default-active="1"
        background-color="rgba(248, 242, 242, 0.856)"
        text-color="#A1A1A1"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="!isOpen"
        :collapse-transition="false"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">內容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="my-header">
        <span @click="toggleMenu()" class="icon el-icon-s-fold"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <el-dropdown class="my-dropdown" @command="handleClick">
          <span class="el-dropdown-link">
            <!-- 用户头像 -->
            <img class="head" src="../../assets/avatar.jpg" alt />
            <!-- 用户名称 -->
            <strong class="name">周杰伦</strong>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="setting">个人设置</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 二级路由显示位置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import auth from "@/utils/auth";
export default {
  name: "app-home",
  data() {
    return {
      isOpen: true,
      name: "",
      photo: ""
    };
  },
  created() {
    const user = auth.getUser();
    this.name = user.name;
    this.photo = user.photo;
  },
  methods: {
    //点击icon 收放侧边栏
    toggleMenu() {
      //切换状态
      this.isOpen = !this.isOpen;
    },
    handleClick(command) {
      if(command==='setting'){
        this.$router.push('/setting')
      }
      if(command==='logout'){

        auth.delUser()
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style scoped lang='less'>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .my-aside {
    background-color: rgba(248, 242, 242, 0.856);
    .logo {
      width: 100%;
      height: 60px;
      background: #fff url(../../assets/IMG_1332.png) no-repeat center / 140px
        auto;
    }
    .minLogo {
      background: rgba(251, 248, 248, 0.959) url(../../assets/min_logo.png)
        no-repeat center;
      background-size: 36px auto;
    }
  }
  .my-header {
    border-bottom: 1px solid rgba(221, 200, 209, 0.616);
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      padding-left: 10px;
    }
    .my-dropdown {
      float: right;
      .head {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .name {
        padding-left: 5px;
        vertical-align: middle;
      }
    }
  }
}
</style>