<template name="Home">
  <div id="app">
    <header class="default-header">
    <div class="container-fluid">
      <div class="header-wrap">
        <div class="header-top d-flex justify-content-between align-items-center">
          <div class="logo">
            <a href="index.html">
                <img src="@/assets/logo.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </header> 
  <section class="banner-area relative">
    <div class="container">
      <div class="row fullscreen align-items-center justify-content-center">
        <div class="banner-left col-lg-6">
          <img class="d-flex mx-auto img-fluid" src="@/assets/header-img.png" alt="">
        </div>
        <div class="col-lg-6">
          <div class="story-content">
            <h6 class="text-uppercase">Robo2025 Demo Navigator</h6>
            <h1>Make something people
              <span class="sp-2">Want</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <router-view></router-view>
    
  <footer class="section-gap">
    <div class="container">
      <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
        <p class="footer-text m-0">Copyright &copy;2018
            <a href="https://nav.robo2025.com" target="_blank">Robo2025.com</a>
        </p>
      </div>
    </div>
  </footer>
  <!-- End Footer Area -->
  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.2);
  margin: 50px;
  position: relative;
}
/* 头部 */
.default-header {
    padding: 20px;
    background-color: #fff;
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.d-flex {
    display: flex !important;
}
/* 第一节 */
.banner-area {
  background: #fff;
}
.relative {
  position: relative;
}
.banner-left {
  margin-top: 60px;
}
.img-fluid {
    max-width: 100%;
    height: auto;
}
.story-content h6 {
    font-weight: 400;
}
.story-content h1 {
    font-size: 48px;
    font-weight: 100;
    line-height: 1.2em;
    margin-bottom: 20px;
    margin-top: 20px;
}
.story-content .sp-2 {
    color: #6cbb23;
    font-weight: 600;
}
/* 尾部 */
.section-gap {
    padding: 100px 0;
}
.footer-bottom {
    border-top: 1px solid #eeeeee;
    padding-top: 40px;
}
.footer-bottom .footer-text {
    color: #777;
}
.m-0 {
    margin: 0 !important;
}
.footer-bottom .footer-text a {
    color: #6cbb23;
} 
a,a:focus,a:hover {
  text-decoration:none; 
}
</style>
