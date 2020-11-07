<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ JSON.stringify(list) }}</div>
    <div>
      <button @click="addList(1)">+</button>
      <button @click="removeList">-</button>
    </div>
    <hr />
    <div>
      <button @click="addListAsync(10)">async+</button>
      <button @click="removeListAsync">async-</button>
    </div>
    <hr />
    <ul>
      <li v-for="(item, index) in aboutList" :key="index">
        <p v-html="item"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers("about");

export default {
  name: "About",

  computed: {
    ...mapState({ list: (state) => state.list }),
    ...mapGetters({ aboutList: "aboutList" }),
  },
  methods: {
    ...mapMutations(["addList", "removeList"]),
    ...mapActions(["addListAsync", "removeListAsync"]),
  },
};
</script>

<style scoped lang="scss">
.about {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  hr {
    width: 100%;
  }
  button {
    min-width: 50px;
    height: 30px;
    cursor: pointer;
    margin-right: 50px;
  }
}
</style>
