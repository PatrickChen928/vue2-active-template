<template>
  <div class="home">
    <div class="left_edit--box">
        <button @click="run">运行代码</button>
        <textarea v-model="tempValue"></textarea>
    </div>
    <div class="J__right_show--box" id="showBox">

    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Home',
  data() {
    return {
      tempValue: '<template>\n\n\n</template>\n'
    }
  },
  methods: {
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*`);
      let val = source.match(regex);
      if (!val) return '';
      val = val[0];
      return source.slice(
        source.indexOf(val) + val.length,
        source.lastIndexOf(val)
      )
    },
    run() {
      const template = this.getSource(this.tempValue, 'template');
      const script = this.getSource(this.tempValue, 'script');
      const style = this.getSource(this.tempValue, 'style');

      // const result = Vue.extend({
      //   template,
      //   script
      // });
      // new result().$mount('#showBox');
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    height: 100vh;
    background-color: antiquewhite;
    .left_edit--box {
      flex: 1;
      margin-right: 20px;
      box-sizing: border-box;
      button {
        display: block;
        width: 200px;
        height: 36px;
        line-height: 36px;
        border: none;
        border-radius: 4px;
        color: #fff;
        background-color: chocolate;
      }
      textarea {
        margin-top: 20px;
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 800px;
        font-size: 16px;
        border-radius: 4px;
        color: #fff;
        resize: none;
        background-color:  rgb(97, 99, 94);
      }
    }
    .J__right_show--box {
      flex: 1;
      margin-top: 56px;
      height: 800px;
      border-radius: 4px;
      background-color: #fff;
    }
  }
</style>
