<template>
  <div class="home">
    <div class="left_edit--box">
        <button @click="run">运行代码</button>
        <textarea v-model="tempValue"></textarea>
    </div>
    <div class="J__right_show--box">
        <div id="showBox"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import tempValue from './initval';

export default {
  name: 'Home',
  data() {
    return {
      tempValue: tempValue
    }
  },
  methods: {
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      let val = source.match(regex);
      if (!val) return '';
      val = val[0];
      return source.slice(
        source.indexOf(val) + val.length,
        source.lastIndexOf(`</${type}>`)
      )
    },
    run() {
      let template = this.getSource(this.tempValue, 'template');
      let script = this.getSource(this.tempValue, 'script').replace('export default', 'return');
      let style = this.getSource(this.tempValue, 'style');
      let optins = new Function(script)();
      template = '<div> '+ template +' </div>';
      optins.template = template;
      const result = Vue.extend(optins);
      let el = new result().$mount().$el;
      this.handleCss(style);
      document.getElementById('showBox').appendChild(el);
    },
    handleCss(style) {
      let styleEle = document.createElement('style');
      styleEle.innerHTML = style;
      document.head.appendChild(styleEle);
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
