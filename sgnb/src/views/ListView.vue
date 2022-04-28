<template>
  <transition name="tran" tag="div">
    <div class="wrapper" v-if="isListShow">
      <div @click="SET_TOGGLE_MENU_LIST(false)">
        <img src="../assets/close-icon.svg" class="close" />
      </div>
      <div class="list">
        <ul>
          <a href="/attq" @click="SET_TOGGLE_MENU_LIST(false)">
            <li>
              <h1>ATTQ</h1>
              <p>오늘의 질문 Answer To Today's Question</p>
            </li>
          </a>
          <a href="/syao" @click="SET_TOGGLE_MENU_LIST(false)">
            <li>
              <h1>SQWO</h1>
              <p>질문 공유 Share Question with Others</p>
            </li>
          </a>
          <a href="/ctpq" @click="SET_TOGGLE_MENU_LIST(false)">
            <li>
              <h1>CTPQ</h1>
              <p>이전 질문 확인 Check The Previous Question</p>
            </li>
          </a>
          <a href="/rqtm" @click="SET_TOGGLE_MENU_LIST(false)">
            <li>
              <h1>RQTM</h1>
              <p>질문 추천 Recommend Question To the Manager</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isListShow"]),
  },
  methods: {
    ...mapMutations(["SET_TOGGLE_MENU_LIST"]),
  },
};
</script>

<style lang="scss" scoped>
.tran-enter-active,
.tran-leave-active {
  transition: all 0.5s;
}

.tran-enter,
.tran-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9998;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close {
  position: fixed;
  top: 84px;
  right: 76px;
  cursor: pointer;
}

.list {
  z-index: 99;
  background-color: #282828;
  ul {
    list-style-type: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 54px;
    > a > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      opacity: 0.5;
      transition: 0.8s;
      > h1 {
        font-weight: 400;
        font-size: 40px;
        letter-spacing: 0.16em;
        margin: 0;
        color: #fff;
        //cursor: pointer;
      }
      > p {
        font-size: 20px;
        font-weight: 300;
        margin: 0;
        opacity: 0;
        transition: 0.8s;
        color: #fff;
      }
    }
    > a > li:hover {
      opacity: 1;
      > p {
        opacity: 1;
        transform: translateY(12px);
      }
    }
  }
}
</style>
