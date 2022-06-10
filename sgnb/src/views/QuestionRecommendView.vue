<template>
  <div>
    <defalut-header />
    <div class="wrapper">
      <article class="contents">
        <div class="pageDescription">
          <h1>RQTM</h1>
          <span>Recommend Question To the Manager</span>
        </div>
        <input
          type="text"
          placeholder="추천 질문을 작성해 주세요."
          v-model="recommendQuestion"
        />
        <textarea
          name=""
          id=""
          cols="96"
          rows="8"
          placeholder="해당 질문을 추천하는 이유를 작성해주세요."
          v-model="recommendReason"
        ></textarea>
        <button @click="submit">Save Question</button>
      </article>
    </div>
  </div>
</template>

<script>
import DefalutHeader from "../components/header/DefalutHeader.vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../plugins/firebase";

export default {
  components: {
    DefalutHeader,
  },
  data: () => ({
    recommendQuestion: "",
    recommendReason: "",
  }),
  methods: {
    async submit() {
      await addDoc(collection(db, "recommend"), {
        recommendQuestion: this.recommendQuestion,
        recommendReason: this.recommendReason,
      });
      alert("추천 질문 입력이 완료되었습니다. 소중한 의견 감사합니다 :)");
      window.location.reload();
    },
  },
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

  .question {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #fff;
    width: 100%;
    margin: 8px 0 18px 0;
    cursor: default;

    > div {
      display: flex;
      align-items: center;
      gap: 16px;

      > img {
        cursor: pointer;
      }

      > h1 {
        font-weight: 400;
        font-size: 2em;
        margin: 0;
      }
    }
  }
  > textarea {
    width: calc(100%-40px);
    padding: 16px 20px;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;

    color: #282828;
    resize: none;
  }

  > input {
    width: 729px;
    padding: 16px 20px;
    font-size: 18px;
    outline: none;
    margin: 16px 0 12px 0;
  }

  > button {
    width: 270px;
    height: 60px;
    background: #282828;
    border: 1px solid #efefef;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    color: #efefef;
    cursor: pointer;
    transition: 0.2s;
    margin-top: 20px;
  }
  > button:hover {
    background-color: #efefef;
    color: #282828;
  }
}
</style>
