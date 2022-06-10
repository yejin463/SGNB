<template>
  <div>
    <defalut-header />
    <div class="wrapper">
      <div class="shareBox" @click="share">
        <div><img src="../assets/share-icon.svg" alt="" /></div>
        <span>SAWO</span>
      </div>
      <article class="contents">
        <div class="question">
          <div>
            <h1>{{ question }}</h1>
          </div>
          <span>{{ nikname }}</span>
        </div>
        <article>{{ content }}</article>
        <div class="buttons"></div>
      </article>
    </div>
  </div>
</template>

<script>
import DefalutHeader from "../components/header/DefalutHeader.vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../plugins/firebase";

export default {
  components: {
    DefalutHeader,
  },
  data: () => ({
    nikname: "",
    content: "",
    question: "",
    questionId: "",
    answerId: "",
  }),
  async mounted() {
    let getId = window.location.search.split("=");
    this.questionId = getId[1].slice(0, -1);
    this.answerId = getId[2];
    const questions = await getDoc(doc(db, "question", this.questionId));
    this.question = questions.data().question;

    const answer = await getDoc(
      doc(db, "question/" + this.questionId + "/answer", this.answerId)
    );
    this.nikname = answer.data().name;
    this.content = answer.data().content;
  },
  methods: {
    share() {
      var dummy = document.createElement("input");
      var text = location.href;

      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      alert("링크 복사 완료!");
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

.shareBox {
  width: 64px;
  height: 98px;
  background: #efefef;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  position: relative;
  right: 4%;

  > div {
    width: 48px;
    height: 48px;
    background: #c6c6c6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    transition: 0.2s;
  }

  > span {
    font-weight: 700;
    font-size: 12px;
    display: flex;
    align-items: flex-end;
    color: #c6c6c6;
    transition: 0.2s;
  }
}

.shareBox:hover {
  > div {
    background: #606060;
  }

  > span {
    color: #606060;
  }
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

    > input {
      outline: none;
      width: 100px;
    }
  }

  > article {
    background-color: #fff;
    width: 735px;
    height: 218px;
    padding: 16px 20px;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
  }

  .buttons {
    display: flex;
    gap: 40px;
    width: 100%;
    justify-content: flex-end;
    margin-top: 32px;

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
    }

    > button:hover {
      background-color: #efefef;
      color: #282828;
    }
  }
}
</style>
