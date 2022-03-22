<template>
  <div class="header">
    <a href="/"><h1>SGNB</h1></a>
    <div>
      <span>{{ !true ? "" : "로그인/회원가입" }}</span>
      <a @click.prevent="SET_TOGGLE_MENU_LIST(true)">
        <img src="../../assets/list-icon.svg" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      headerIcon: "../../assets/list-icon.svg",
    };
  },
  computed: {
  },
  methods: {
    ...mapMutations(["SET_TOGGLE_MENU_LIST"]),
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

  > a > h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    letter-spacing: 0.16em;
    margin: 0 0 0 100px;
    color: #ffffff;
  }

  > div {
    display: flex;
    align-content: center;
    margin-right: 76px;
    > span {
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      margin-right: 32px;
      color: #ffffff;
      cursor: pointer;
    }
    > img {
      cursor: pointer;
    }
  }
}
</style>
