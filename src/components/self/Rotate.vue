<template>
  <div>
    <div class="parbox">
      <div class="son before">
        <img :src="require('@/assets/ppg.jpg')" alt="" />
      </div>
      <div class="son after">
        <img :src="require('@/assets/ppg.jpg')" alt="" />
      </div>
      <div class="son left">
        <img :src="require('@/assets/ppg.jpg')" alt="" />
      </div>
      <div class="son right">
        <img :src="require('@/assets/ppg.jpg')" alt="" />
      </div>
      <div class="son top">
        <img :src="require('@/assets/ppg.jpg')" alt="" />
      </div>
      <div class="son bottom">
        <img :src="require('@/assets/ppg.jpg')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rotate',
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.parbox {
  width: 100px;
  height: 100px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform-style: preserve-3d;
  /* transform: rotateX(20deg) rotateY(20deg); */
  animation: Rotate 10s infinite linear;
}
.parbox:hover {
  animation-play-state: paused;
}
.son {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
}
.son img {
  display: block;
  width: 100%;
  height: 100%;
  transition: 1s;
}
.before {
  transform: translateZ(50px);
}
.after {
  transform: translateZ(-50px) rotateY(180deg);
}
.top {
  transform: translateY(-50px) rotateX(90deg);
}
.bottom {
  transform: translateY(50px) rotateX(-90deg);
}
.left {
  transform: translateX(-50px) rotateY(-90deg);
}
.right {
  transform: translateX(50px) rotateY(90deg);
}
.after img:hover {
  transform: scale(1.5);
}
.before img:hover {
  transform: scale(1.5);
}
.left img:hover {
  transform: scale(1.5);
}
.right img:hover {
  transform: scale(1.5);
}
.top img:hover {
  transform: scale(1.5);
}
.bottom img:hover {
  transform: scale(1.5);
}
@keyframes Rotate {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  25% {
    transform: rotateY(90deg) rotateX(90deg);
  }
  50% {
    transform: rotatey(180deg) rotateX(0deg);
  }
  75% {
    transform: rotateY(270deg) rotateX(-90deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(0deg);
  }
}
</style>
