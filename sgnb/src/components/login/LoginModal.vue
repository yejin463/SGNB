<template>
  <transition name="tran">
    <div
      class="full-screen"
      @click="SET_TOGGLE_LOGIN(false)"
      v-if="isModalShow"
    >
      <article @click.stop="">
        <p>로그인</p>
        <div>
          <img src="../../assets/kakao.jpg" alt="" />
          <span>카카오로 로그인하기</span>
        </div>
        <div>
          <img src="../../assets/google.png" alt="" />
          <span>구글로 로그인하기</span>
        </div>
        <span>회원가입을 한 적이 없으신가요? 회원가입</span>
      </article>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isModalShow"]),
  },
  methods: {
    ...mapMutations(["SET_TOGGLE_LOGIN"]),
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
  opacity: 0;
}

.full-screen {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  > article {
    width: 465px;
    height: 346px;
    background: #efefef;
    border-radius: 15px;
    text-align: center;

    > p {
      font-size: 36px;
      text-align: center;
      color: #282828;
    }

    > div {
      width: 322px;
      height: 62px;
      margin: 24px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      gap: 12px;
      background-color: #f8df00;
      cursor: pointer;

      > img {
        width: 30px;
        height: 30px;
      }

      > span {
        line-height: 30px;
        color: #282828;
      }
    }

    > div:last-of-type {
      background-color: #fff;
    }

    > span {
      font-size: 12px;
      color: #8c8c8c;
      cursor: pointer;
    }
  }
}
</style>
