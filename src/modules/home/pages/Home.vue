<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld :msg="'测试vuex'"></HelloWorld>
    <div>
      <button @click="add">+</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="de">-</button>
    </div>
    <hr />
    <div>
      <button @click="addAsync">async+</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button @click="deAsync">async-</button>
    </div>
    <div>
      <p>{{ count }}</p>
      <hr />
      <p>{{ countGetters }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({ count: state => state.count }),
    ...mapGetters({
      countGetters: 'countGetters'
    })
  },
  mounted() {
    window.apis.getUserInfo({ params: { id: 333 } }).then(res => {
      console.log(res, '======');
    });
  },
  methods: {
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement'
    }),
    ...mapActions({
      incrementAsync: 'incrementAsync',
      decrementAsync: 'decrementAsync'
    }),
    add() {
      this.increment(1);
    },
    addAsync() {
      this.incrementAsync(1000).then(res => {
        console.log('异步增加后的值为：', res);
      });
    },
    de() {
      this.decrement(1);
    },
    deAsync() {
      this.decrementAsync(1000).then(res => {
        console.log('异步减少后的值为：', res);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  min-width: 50px;
  height: 30px;
  cursor: pointer;
}
</style>
