<template>
  <div>
    <defalut-header />
    <div class="wrapper">
      <article class="contents">
        <div class="pageDescription">
          <h1>CTPQ</h1>
          <span>이전 질문 확인 Check The Previous Question</span>
        </div>
        <div class="list">
          <list-item :key="item" v-for="item in items"></list-item>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import DefalutHeader from "../components/header/DefalutHeader.vue";
import ListItem from "../components/list/QuestionListItem.vue";
export default {
  components: {
    DefalutHeader,
    ListItem,
  },
  data() {
    return {
      items: 10,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 904px;

  .pageDescription {
    opacity: 0.6;
    color: #fff;
    display: flex;
    gap: 12px;
    width: 100%;
    margin-bottom: 16px;
    cursor: default;

    > h1 {
      font-weight: 400;
      font-size: 40px;
      letter-spacing: 0.16em;
      margin: 0;
    }

    > span {
      font-weight: 400;
      font-size: 24px;
      display: flex;
      align-items: flex-end;
    }
  }

  .list {
    display: grid;
    min-height: 444px;
    height: 466px;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 8px;
    overflow-y: scroll;
  }
  
  .list::-webkit-scrollbar {
    display: none;
  }
}
</style>
