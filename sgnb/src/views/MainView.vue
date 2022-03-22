<template>
  <div>
    <DefalutHeader />
    <div class="main">
      <article class="logo">
        <h1><span>시간</span><span>낭비</span></h1>
        <h1><span>SG</span><span>NB</span></h1>
      </article>
    </div>
    <list-view />
  </div>
</template>

<script>
import DefalutHeader from "../components/header/DefalutHeader.vue";
import ListView from "./ListView.vue";
export default {
  components: {
    DefalutHeader,
    ListView,
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    270deg,
    #000000 0%,
    #000000 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

article {
  > h1 {
    display: flex;
    gap: 0.16em;

    > span {
      font-size: 3em;
      font-weight: 400;
      letter-spacing: 0.16em;
      min-width: 122px;
    }
    > span:nth-child(even) {
      color: #fff;
    }
    > span:nth-child(1) {
      text-align: right;
    }
  }
}
</style>
