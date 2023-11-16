<template>
  <h1>참조</h1>
  <div>
    <button @click="getCount1">1번째 count 값 알아내기</button>
    <button @click="getCount2">2번째 count 값 알아내기</button>
    <button @click="getInput1">input1 포커스 이동</button>
  </div>

  <div>
    <sample-component ref="sample1"></sample-component>
    <sample-component ref="sample2"></sample-component>
  </div>

  <div>
    <parent-component ref="ParentComponent"></parent-component>
  </div>
</template>

<script>
  import ParentComponent from './components/ParentComponent';
  import SampleComponent from './components/SampleComponent';

  export default {
    name: 'App',

    components: {
      ParentComponent,
      SampleComponent
    },
    data() {
      return {
        message : ""
      }
    },
    methods : {
      getCount1() {
        // 첫번째 샘플 컴퍼넌트의 count값 출력 : alert
        alert(this.$refs.sample1.getCount1())
      },
      getCount2() {
        // 두번째 샘플 컴퍼넌트의 count값 출력 : alert
        alert(this.$refs.sample2.getCount1())
      },
      getInput1() {
        // ChildComponent의 Text에 focus추가
        this.$refs.ParentComponent.$refs.childComponent2.$refs.childInput.focus()
        // alert(this.$refs.ParentComponent.$refs.childComponent2.$refs.childInput.value)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
