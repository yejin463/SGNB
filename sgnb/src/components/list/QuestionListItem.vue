<template>
  <div class="item" @click.prevent="shearQuestion(item.id)">
    <img :src="item.imgSrc" alt="" />
    <p>{{ item.question }}</p>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    shearQuestion(id) {
      const link = "http://localhost:8081/" + "attq?=" + id;
      if (document.location.href.includes("sqwo")) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.value = link;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert("링크 복사 완료!");
      } else {
        location.href = link;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.item {
  width: 272px;
  background-color: #efefef;
  border-radius: 3px;
  padding: 16px 12px 16px;
  height: 182px;
  cursor: pointer;
  > img {
    width: 272px;
    height: 146px;
  }
  > p {
    font-size: 14px;
    width: 268px;
    margin: 8px auto 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
