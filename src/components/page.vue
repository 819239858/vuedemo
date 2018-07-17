<template>
  <div>
  <!-- Start Feature Area -->
  <section class="feature-area pt-100 pb-100  relative">
    <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6" :key="key" v-for="(value,key) in list">
            <div class="single-feature">
              <a class="icon" :href="value.url" target="_blank">
                <img :src="value.imgsrc" class="img-fluid">
              </a>
              <div class="desc">
                <a :href="value.url" target="_blank">{{value.title}}</a>
                <p>{{value.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <!-- Start faq Area -->
    <section class="faq-area pt-100">
        <div class="container">
            <div class="row">
                <div class="counter-left col-lg-3 col-md-3">
                    <div class="single-facts">
                        <h2 class="counter">59628</h2>
                        <p>代码数量</p>
                    </div>
                    <div class="single-facts">
                        <h2 class="counter">2394</h2>
                        <p>Commit 次数</p>
                    </div>
                    <div class="single-facts">
                        <h2 class="counter">16</h2>
                        <p>Fix Bug 次数</p>
                    </div>
                    <div class="single-facts">
                        <h2 class="counter">4</h2>
                        <p>已完成系统</p>
                    </div>
                </div>
                <div class="faq-content col-lg-9 col-md-9">
                    <div class="single-faq">
                        <h2 class="text-uppercase">
                            Robo2025 是什么
                        </h2>
                        <p>
                            Robo2025 致力于在工业 4.0 时代建立起中国最高端的工业数字化运营平台，
                            整个平台包括了电商平台、大数据采集平台、人工智能分析平台等。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
  import values from "../../test.js"
  export default {
    data(){
      return {
        list:[]
      }
    },
    mounted(){
        this.list = values.contentList;
    }
  }
</script>

<style scoped>
/* 第二节 */
.feature-area {
    background: url(../assets/video-bg.jpg) no-repeat center center/cover;
}
.relative {
    position: relative;
}
.pb-100 {
    padding-bottom: 100px;
}
.pt-100 {
    padding-top: 100px;
}
.feature-area .overlay-bg {
    background: rgba(108, 187, 35, 0.85);
}
.feature-area .icon:hover {
    color: #fff;
    background-color: #6cbb23;
}
.feature-area .icon {
    font-size: 100px;
    color: #fff;
    background: #f0f8e9;
    text-align: center;
    padding: 10px;
    transition: all 0.3s ease 0s;
    display: block;
}
.feature-area .desc {
  margin-top: 30px;
}
.feature-area .desc a {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: 2.5px;
    color: #111;
    display: block;
}
.feature-area .desc p {
    color: #777;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 2em;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
a, a:focus, a:hover {
    text-decoration: none;
}
.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.single-feature {
    background-color: #fff;
    padding: 30px;
    margin-bottom: 30px;
    height: 400.5px
}
/*第二節*/
.faq-area {
    background: #fff;
}
.pt-100 {
    padding-top: 100px;
}
.counter-left {
    text-align: right;
}
.counter-left .single-facts {
    margin-bottom: 26px;
}
.counter-left h2 {
    font-size: 48px;
    font-weight: 100;
    color: #6cbb23;
}
.faq-content {
    padding-left: 2%;
    padding-right: 2%;
}
.single-faq {
    margin-bottom: 30px;
}
.single-faq h2 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 3px;
    margin-top: 15px;
    margin-bottom: 25px;
}
.counter-left p {
    font-size: 14px;
    font-weight: 300;
    color: #777;
}
.single-faq p {
  color: #777;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
</style>
