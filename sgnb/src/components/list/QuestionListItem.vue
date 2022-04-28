<template>
  <div class="item">
    <img
      src="https://w.namu.la/s/108b4300fb4526e8635c5b41092b0ac3d18b14892b5b4731734c98e8ffa00f5d1db21a5c1f687fa0e5c18baccb806c4a6dbe3e33981daed806314d700411844eaafae1832eb770d0fd995db304c7a715"
      alt=""
    />
    <p>100% 100만원 vs 25% 500만원</p>
  </div>
</template>
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
