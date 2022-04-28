<template>
  <div class="header">
    <a href="/"><h1>SGNB</h1></a>
    <!-- <div> -->
    <a @click.prevent="SET_TOGGLE_MENU_LIST(true)">
      <img src="../../assets/list-icon.svg" />
    </a>
    <!-- </div> -->
    <list-view />
    <login />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ListView from "../../views/ListView.vue";
import Login from "../login/LoginModal.vue";
export default {
  components: {
    ListView,
    Login,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations(["SET_TOGGLE_MENU_LIST", "SET_TOGGLE_LOGIN"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  top: 62px;
  width: 100%;
  align-items: flex-end;

  > a {
    > h1 {
      font-weight: 400;
      font-size: 36px;
      line-height: 49px;
      text-align: center;
      letter-spacing: 0.16em;
      margin: 0 0 0 100px;
      color: #ffffff;
    }
    > img {
      margin-right: 76px;
      cursor: pointer;
    }
  }
}
</style>
