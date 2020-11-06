<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld :msg="'测试vuex'"></HelloWorld>
    <button @click="add">+</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="de">-</button>
    <div>
      <p>{{ count }}</p>
      <hr />
      <p>{{ countGetters }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState({ count: (state) => state.count }),
    ...mapGetters({
      countGetters: "countGetters",
    }),
  },
  methods: {
    ...mapMutations({
      increment: "increment",
      decrement: "decrement",
    }),
    ...mapActions({}),

    add() {
      // this.increment(1);
      this.$store.commit("increment", 1);
      console.log(this.count);
    },
    de() {
      // this.decrement(1);
      this.$store.commit("decrement", 1);
    },
  },
};
</script>

<style scoped lang="scss">
button {
  width: 50px;
  height: 30px;
  cursor: pointer;
}
</style>
