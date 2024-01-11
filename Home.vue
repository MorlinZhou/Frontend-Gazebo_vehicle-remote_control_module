<template>
  <div class="rosmap">
    <div class="radius">
      <div id="map">
        <canvas ref="myCanvas" :width="canvasWidth" :height="canvasHeight" />
      </div>
    </div>
    <div class="details">
    </div>
  </div>
</template>

<script  setup>

import { ref, onMounted, getCurrentInstance } from 'vue'
var canvasWidth = ref(1080)
var canvasHeight = ref(800)
var myCanvas = ref(null)
var ctx = ref(null)
var imgX = 0
var imgY = 0
var MINIMUM_SCALE = 0.2
var imgScale = 1.0
var loadImgObj = null
var flag = false
var pos = {}
var posl = {}
var posStr = ''
var img = null
// img.src='https://web.archive.org/web/20170118060510/http://www.star-control.com/sc2/images/sc2_color_map.jpg'
onMounted(() => {
  ctx.value = myCanvas.value.getContext('2d')
  loadImg()
  canvasEventsInit()

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      var lat = position.coords.latitude
      var lng = position.coords.longitude
      posStr = '维度:' + lat + ', 经度:' + lng
    })
  }
})

function loadImg() {
  img = new Image()
  img.src = 'https://web.archive.org/web/20170118060510/http://www.star-control.com/sc2/images/sc2_color_map.jpg'
  img.onload = function () {
    drawImage()
  }
}

function drawImage() {
  const context = ctx.value
  context.clearRect(0, 0, myCanvas.width, myCanvas.height)
  context.drawImage(
    img, // 规定要使用的图像、画布或视频。
    0, 0, // 开始剪切的 x 坐标位置。
    img.width, img.height, // 被剪切图像的高度。
    imgX, imgY, // 在画布上放置图像的 x 、y坐标位置。
    img.width * imgScale, img.height * imgScale // 要使用的图像的宽度、高度

  )
  // 放置中心点
  context.beginPath()
  context.arc(canvasWidth / 2 - 20, canvasHeight / 2 - 20, 20, Math.PI * 2, 0, true)
  context.fillStyle = 'green'
  context.fill()
  context.fillStyle = '#fff' // 设置填充颜色为紫色
  context.textAlign = 'center'
  context.fillText('我', canvasWidth / 2 - 20, canvasHeight / 2 - 20)
  context.closePath()
}


function canvasEventsInit() {
  console.log("eventInit")
  // eslint-disable-next-line no-unused-vars
  const canvas = myCanvas
  canvas.onmousedown = function (event) {
    var pos = windowToCanvas(canvas, event.clientX, event.clientY);
    let xx = (event.clientX - imgX) / imgScale
    let yy = (event.clientY - imgY) / imgScale
    console.log('pos in img:', xx, yy) // 针对的是img.width, img.height,
    canvas.onmousemove = function (event) {
      canvas.style.cursor = "move";
      var pos1 = windowToCanvas(canvas, event.clientX, event.clientY);
      var x = pos1.x - pos.x;
      var y = pos1.y - pos.y;
      pos = pos1;
      imgX += x;
      imgY += y;
      drawImage();
    }
  }
  canvas.onmouseup = function () {
    canvas.onmousemove = null;
    canvas.onmouseup = null;
    canvas.style.cursor = "default";
  }
  var flag = 1

  canvas.onmousewheel = canvas.onwheel = function (event) {
    var pos = windowToCanvas(canvas, event.clientX, event.clientY);
    event.wheelDelta = event.wheelDelta ? event.wheelDelta : (event.deltaY * (-40));
    if (flag) {
      flag = 0
      if (event.wheelDelta > 0) {
        imgScale *= 1.2;
        // imgX = imgX * 1.2 - pos.x;
        // imgY = imgY * 1.2 - pos.y;
      } else {
        imgScale *= 0.8;
        // imgX = imgX * 0.8 + pos.x * 0.8;
        // imgY = imgY * 0.8 + pos.y * 0.8;
      }
      drawImage();
      setTimeout(() => {
        flag = 1
      }, 500)
    }
    event.preventDefault(); // 禁止缩放
  }
}
 /* 坐标转换*/
 function windowToCanvas(x, y) {
      var box = this.myCanvas.getBoundingClientRect() // 这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离
      return {
        x: x - box.left - (box.width - this.myCanvas.width) / 2,
        y: y - box.top - (box.height - this.myCanvas.height) / 2
      }
    }



</script>

<style scoped>
.rosmap {
  display: flex;
  margin-left: 100px;
  margin-top: 100px;
}

.radius {
  height: 800px;
  width: 1080px;
  border: 2px solid var(--el-border-color);
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3
}

#map {
  width: 100%;
  height: 798px
}

.details {
  flex: 2;
  width: 500px;
  height: auto;
}
</style>