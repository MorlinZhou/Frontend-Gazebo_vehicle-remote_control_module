<template>
  <div>
    <el-page-header class="el-header" :icon="null" @back="goBack">
      <template #content>
        <div class="items-center">
          <span> 智能网联车远程操控系统 </span>
          <el-tag size="small">Beta</el-tag>
        </div>
      </template>
      <template #extra>
        <div class="header-button">
          <el-button type="primary" style="padding: 10px 15px;" @click="initWSconnection">启动WS连接</el-button>
          <el-button type="danger" style="padding: 10px 15px;" @click="closeWSconnection">断开WS连接</el-button>
        </div>
      </template>
    </el-page-header>
    <el-divider />
    <el-card class="main-card" shadow="hover">
      <div class="rosmap">
        <div class="radius">
          <div id="map"></div>
        </div>
        <div class="details">
          <transition name="el-zoom-in-top">
            <el-card v-show="showPanel" class="control-card" shadow="hover" v-loading="loading">
              <div>
                <el-descriptions title="基本信息">
                  <el-descriptions-item label="小车编号 :">{{ carInfo.id }}</el-descriptions-item>
                  <el-descriptions-item label="类型 :">
                    <el-tag :type=carType size="small">{{ carInfo.type }}</el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="运行状态 :">
                    <el-tag size="small">{{ carInfo.mode }}</el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="坐标 :">{{ carInfo.lat }}</el-descriptions-item>
                </el-descriptions>
                <el-descriptions title="传感器信息">
                </el-descriptions>
                <el-collapse v-model="activeName" accordion @change="handleInformation">
                  <el-collapse-item title="线速度信息" name="1" class="linear-container">
                    <div id="linearV"></div>
                  </el-collapse-item>
                  <el-collapse-item title="角速度信息" name="2">
                    <div id="angularV"></div>
                  </el-collapse-item>
                  <el-collapse-item title="方向角信息" name="3">
                    <div id="orientationV"></div>
                  </el-collapse-item>
                  <el-collapse-item title="TF信息" name="4">
                    <div id="TFVR"></div>
                    <div id="TFVT"></div>
                  </el-collapse-item>
                </el-collapse>
              </div>
              <el-divider></el-divider>
              <el-descriptions title="指令面板"></el-descriptions>
              <el-tabs v-model="activeModel" @tab-click="handleClick">
                <el-tab-pane label="自动导航" name="auto">
                  <div class="controlPanel">
                    <el-form :inline="true" :model="newParam" ref="ruleForm" class="demo-form-inline" :rules="rules"
                      style="width:100%">
                      <el-form-item label="X" prop="newX">
                        <el-input v-model="newParam.newX" placeholder="请输入目标X" style="max-width: 120px;"></el-input>
                      </el-form-item>
                      <el-form-item label="Y" prop="newY">
                        <el-input v-model="newParam.newY" placeholder="请输入目标Y" style="max-width: 120px;"></el-input>
                      </el-form-item>
                    </el-form>
                    <el-form-item>
                      <el-button class="commandButton " type="primary" @click="moveCars()" plain>确认指令</el-button>
                    </el-form-item>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="手动操控" name="manuel">使用键盘上的"WASD"键可以手动驾驶小车</el-tab-pane>
                <el-tab-pane label="追逃模式" name="chase">
                  <div class="slider-demo-block">
                    <span class="demonstration">追逃时间限制（分钟）</span>
                    <el-slider v-model="chaseTime" :step="0.5" show-stops :max="5" :min="0.5" :disabled="isChaseMode" />
                  </div>
                  <el-popconfirm width="250" confirm-button-text="确认" cancel-button-text="取消" @confirm="handleChaseMode()"
                    title="确认要开启追逃模式吗？这可能需要运行几分钟时间">
                    <template #reference>
                      <el-button type="primary" class="commandButton2 " v-loading="isChaseMode" plain>开始追逃模式
                      </el-button>
                    </template>
                  </el-popconfirm>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </transition>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script  setup>
import { ref, onMounted, reactive, onUnmounted, getCurrentInstance, inject } from "vue";
import { ElMessage, ElNotification, ElMessageBox } from "element-plus";
import { WEBSOCKET } from "@/api/websocket";
import { driveCar } from "@/api/drive";
import { moveCar } from "@/api/move";
import { chaseStart } from "@/api/chase";
import { useRouter } from "vue-router";
import { CARTYPE, CARICON, CARMODE } from "@/utils/constant"
import * as echarts from 'echarts'

const router = useRouter();
var ws;
var map;
var onManuel = false;
var iskeyUp = {
  Wup: true,
  Aup: true,
  Sup: true,
  Dup: true
}
var chaseTime = ref(0);
var isChaseMode = ref(false);
var loading = ref(false);
var showPanel = ref(false);
var carOneControl;
var carTwoControl;
var carThreeControl;
var carFourControl;
var currentCarMarker;
var carType = ref('');
const activeName = ref('')
var activeModel = ref('auto')
const ruleForm = ref(null);
const newParam = reactive({
  newX: '',
  newY: ''
})
//输入框校验规则
const rules = {
  newX: [
    { required: true, message: '请输入目标坐标X', trigger: 'blur' }
  ],
  newY: [
    { required: true, message: '请输入目标坐标Y', trigger: 'blur' }
  ]
}
//小车相关变量初始化
var carInfo = reactive({
  lat: 0,
  type: '',
  id: 0,
  mode: '',
  IMU: {},
  TF: {}
});
var carOne = reactive({
  lat: 0,
  name: "One",
  id: 1,
  mode: CARMODE.IDLE,
  IMU: {},
  TF: {}
});
var carTwo = reactive({
  lat: 0,
  name: "Two",
  id: 2,
  mode: CARMODE.IDLE,
  IMU: {},
  TF: {}
});
var carThree = reactive({
  lat: 0,
  name: "Three",
  id: 3,
  mode: CARMODE.IDLE,
  IMU: {},
  TF: {}
});
var carFour = reactive({
  lat: 0,
  name: "Four",
  id: 4,
  mode: CARMODE.IDLE,
  IMU: {},
  TF: {}
});

//数据展示部分
var linearV = [
];
var AngularV = [
];
var orientationV = [
]
var TFVR = []
var TFVT = []

//钩子函数
onMounted(() => {
  document.querySelector('body').setAttribute('style', 'background-size: 1920px 1080px; background-repeat: no-repeat; background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4MCIgaGVpZ2h0PSI2NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDxwYXRoIGQ9Ik03MzEuMjA3IDY0OS44MDJDOTM1LjQ4NCA2NDIuMTQgMTQ4MCAzMzcuMzI1IDE0ODAgMTgwLjg4OGMwLTE1Ni40MzgtMzA5Ljc0NC0zNi4wNTUtNzIwLTM2LjA1NVMwLTE3NC40ODMgMCAxMzUuMTQ0YzAgMzA5LjYyNyA1MjYuOTMgNTIyLjMyIDczMS4yMDcgNTE0LjY1OHoiIGZpbGw9IiNGNkY4RkEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);')
  initMap();
  initWSconnection();
  keyboardDetect();
});
onUnmounted(() => {
  document.querySelector('body').removeAttribute('style')
})

//折叠面板点击事件
function handleInformation(val) {
  if (val === '1') {
    initLinearEcharts()
  }
  else if (val === '2') {
    initAngularEcharts()
  }
  else if (val === '3') {
    initOrientationEcharts()
  }
  else if (val === '4') {
    initTFEcharts()
  }
}

//绘制IMU线速度信息
function initLinearEcharts() {
  var LV_charts = echarts.init(document.getElementById('linearV'));
  var LV_option = {
    title: {
      // text: '线速度数据'
    },
    legend: {},
    tooltip: { trigger: 'axis' },
    dataset: {
      dimensions: ['record', 'X', 'Y'],
      source: linearV
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    series: [
      { type: 'line', showSymbol: false, itemStyle: { color: 'orange' } }, { type: 'line', showSymbol: false, itemStyle: { color: 'red' } }
    ]
  };
  LV_charts.setOption(LV_option);
}

//绘制IMU角速度信息
function initAngularEcharts() {
  var AV = document.getElementById('angularV');
  var AV_charts = echarts.init(AV);
  var AV_option = {
    title: {
      // text: '线速度数据'
    },
    legend: {},
    tooltip: { trigger: 'axis' },
    dataset: {
      dimensions: ['record', 'X', 'Y'],
      source: AngularV
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    series: [
      { type: 'line', showSymbol: false, itemStyle: { color: 'orange' } }, { type: 'line', showSymbol: false, itemStyle: { color: 'red' } }
    ]
  };
  AV_charts.setOption(AV_option);
}

//绘制IMU方向角信息
function initOrientationEcharts() {
  var OV_charts = echarts.init(document.getElementById('orientationV'));
  var OV_option = {
    title: {
      // text: '线速度数据'
    },
    legend: {},
    tooltip: { trigger: 'axis' },
    dataset: {
      dimensions: ['record', 'W', 'X', 'Y', 'Z'],
      source: orientationV
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    series: [
      { type: 'line', showSymbol: false, itemStyle: { color: 'orange' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'red' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'green' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'blue' } }
    ]
  };
  OV_charts.setOption(OV_option);
}

//绘制IMU方向角信息
function initTFEcharts() {
  var TFR_charts = echarts.init(document.getElementById('TFVR'));
  var TFR_option = {
    title: {
      text: 'Rotation'
    },
    legend: {},
    tooltip: { trigger: 'axis' },
    dataset: {
      dimensions: ['record', 'W', 'X', 'Y', 'Z'],
      source: TFVR
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    series: [
      { type: 'line', showSymbol: false, itemStyle: { color: 'orange' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'red' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'green' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'blue' } }
    ]
  };
  TFR_charts.setOption(TFR_option);

  var TFT_charts = echarts.init(document.getElementById('TFVT'));
  var TFT_option = {
    title: {
      text: 'Tranlation'
    },
    legend: {},
    tooltip: { trigger: 'axis' },
    dataset: {
      dimensions: ['record', 'X', 'Y', 'Z'],
      source: TFVT
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    series: [
      { type: 'line', showSymbol: false, itemStyle: { color: 'orange' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'red' } },
      { type: 'line', showSymbol: false, itemStyle: { color: 'blue' } }
    ]
  };
  TFT_charts.setOption(TFT_option);
}

//WebSocket
function initWSconnection() {
  ws = new WebSocket(WEBSOCKET);
  ws.onmessage = function (event) {
    if (event.data[0] === "连") {
      // console.log(event.data);
      ElMessage({
        message: 'WebSocket连接已建立成功',
        type: 'success',
      })
    } else {
      let data = JSON.parse(event.data);
      if (data.type === 'position') {
        let carPosition = data.carsInfo
        for (let i = 0; i < carPosition.length; i++) {
          let carData = carPosition[i];
          switch (carData.id) {
            case 1:
              carOne.lat = xy(carData.x, carData.y);
              carOneControl.setLatLng(carOne.lat);
              break;
            case 2:
              carTwo.lat = xy(carData.x, carData.y);
              carTwoControl.setLatLng(carTwo.lat);
              break;
            case 3:
              carThree.lat = xy(carData.x, carData.y);
              carThreeControl.setLatLng(carThree.lat);
              break;
            case 4:
              carFour.lat = xy(carData.x, carData.y);
              carFourControl.setLatLng(carFour.lat);
              break;
          }
          switch (currentCarMarker) {
            case carOneControl:
              // realLatLng = carOne.lat.toString().slice(6).split(",");
              // realLat = realLatLng[0].slice(1);
              // realLng = realLatLng[1].slice(1, -1);
              // latlang = "( " + realLng + " , " + realLat + " )";
              carInfo.lat = latlangCalc(carOne.lat);
              break;
            case carTwoControl:
              carInfo.lat = latlangCalc(carTwo.lat);
              break;
            case carThreeControl:
              carInfo.lat = latlangCalc(carThree.lat);
              break;
            case carFourControl:
              carInfo.lat = latlangCalc(carFour.lat);
              break;
          }
        }
      }
      else if (data.type === 'ladar') {
        if (data.isFind === true) {
          switch (data.id) {
            case 2:
              if (isChaseMode.value === true) { carTwo.mode = CARMODE.CHASE; }
              else carTwo.mode = CARMODE.IDLE
              ElNotification({
                title: '小车雷达状态',
                message: '2号小车雷达侦测到逃跑者',
                type: 'info',
              });
              break;
            case 3:
              if (isChaseMode.value === true) { carThree.mode = CARMODE.CHASE; }
              else carThree.mode = CARMODE.IDLE;
              ElNotification({
                title: '小车雷达状态',
                message: '3号小车雷达侦测到逃跑者',
                type: 'info',
              }); break;
            case 4:
              if (isChaseMode.value === true) { carFour.mode = CARMODE.CHASE; }
              else carFour.mode = CARMODE.IDLE
              ElNotification({
                title: '小车雷达状态',
                message: '4号小车雷达侦测到逃跑者',
                type: 'info',
              }); break;
          }
          switch (currentCarMarker) {
            case carTwoControl:
              carInfo.mode = carTwo.mode; break;
            case carThreeControl:
              carInfo.mode = carThree.mode; break;
            case carFourControl:
              carInfo.mode = carFour.mode; break;
          }
        }
        else {
          switch (data.id) {
            case 2:
              if (isChaseMode.value === true) { carTwo.mode = CARMODE.SEARCH; }
              else carTwo.mode = CARMODE.IDLE
              break;
            case 3:
              if (isChaseMode.value === true) { carThree.mode = CARMODE.SEARCH; }
              else carThree.mode = CARMODE.IDLE
              break;
            case 4:
              if (isChaseMode.value === true) { carFour.mode = CARMODE.SEARCH; }
              else carFour.mode = CARMODE.IDLE
              break;
          }
          switch (currentCarMarker) {
            case carTwoControl:
              carInfo.mode = carTwo.mode; break;
            case carThreeControl:
              carInfo.mode = carThree.mode; break;
            case carFourControl:
              carInfo.mode = carFour.mode; break;
          }
        }
      }
      else if (data.type === 'imu') {
        let IMU = data.imuInfo
        for (let i = 0; i < IMU.length; i++) {
          if (IMU[i].id === carInfo.id) {
            console.log("IMU receive")
            carInfo.IMU = JSON.parse(IMU[i].imudata)
            let IMUlinear = carInfo.IMU.linear;
            let IMUangular = carInfo.IMU.angular;
            let IMUorientation = carInfo.IMU.orientation;
            let dataRecord = linearV.length + 1;
            let newLinearData = { record: dataRecord, 'X': changeTwoDecimal(IMUlinear.x), 'Y': changeTwoDecimal(IMUlinear.y) }
            let newAngularData = { record: dataRecord, 'X': changeTwoDecimal(IMUangular.x), 'Y': changeTwoDecimal(IMUangular.y) }
            let newOrientationData = { record: dataRecord, 'W': changeTwoDecimal(IMUorientation.w), 'X': changeTwoDecimal(IMUorientation.x), 'Y': changeTwoDecimal(IMUorientation.y), 'Z': changeTwoDecimal(IMUorientation.z) }
            linearV.push(newLinearData);
            initLinearEcharts()
            AngularV.push(newAngularData)
            initAngularEcharts()
            orientationV.push(newOrientationData)
            initOrientationEcharts()
          }
        }
      }
      else if (data.type === 'tf') {
        // console.log(data)
        let TF = data.tfInfo
        for (let i = 0; i < TF.length; i++) {
          if (TF[i].id === carInfo.id) {
            carInfo.TF = JSON.parse(TF[i].tfdata)
            let TFrotation = carInfo.TF.rotation
            let TFtranslation = carInfo.TF.translation
            let dataRecord = TFVR.length + 1;
            let newTFRData = { record: dataRecord, 'W': changeTwoDecimal(TFrotation.w), 'X': changeTwoDecimal(TFrotation.x), 'Y': changeTwoDecimal(TFrotation.y), 'Z': changeTwoDecimal(TFrotation.z) }
            let newTFTData = { record: dataRecord, 'X': changeTwoDecimal(TFtranslation.x), 'Y': changeTwoDecimal(TFtranslation.y), 'Z': changeTwoDecimal(TFtranslation.z) }
            TFVR.push(newTFRData)
            TFVT.push(newTFTData)
            initTFEcharts()
          }
        }
      }
    }
  }
  ws.onclose = function () {
    ElMessage({
      message: 'WebSocket连接已断开',
      type: 'warning',
    })
  };
  ws.onerror = function () {
    ElMessage({
      message: 'WebSocket连接错误',
      type: 'error',
    })
  }
};

function closeWSconnection() {
  ws.close();
};


//initMap
function initMap() {
  var popup = L.popup();
  map = L.map("map", {
    crs: L.CRS.Simple,
  });
  var bounds = [
    [-16.0991, -16.8378],
    [22.7993, 22.0521],
  ];
  var maxBounds = [
    [-26, -26],
    [32, 32],
  ]
  var image = L.imageOverlay(
    "https://se2021.oss-cn-shanghai.aliyuncs.com/map_square_map%282%29.png",
    bounds
  ).addTo(map);
  map.setView([3, 3], 5);
  map.setMinZoom(4)
  map.setMaxZoom(8)
  map.setMaxBounds(maxBounds)
  var carOneIcon = L.icon(CARICON.CARONEICON);
  var carTwoIcon = L.icon(CARICON.CARTWOICON);
  var carThreeIcon = L.icon(CARICON.CARTHREEICON);
  var carFourIcon = L.icon(CARICON.CARFOURICON);
  carOne.lat = xy(0, 1);
  carTwo.lat = xy(1, 2);
  carThree.lat = xy(3, 4);
  carFour.lat = xy(8, 1);
  carOneControl = L.marker(carOne.lat, { icon: carOneIcon })
    .addTo(map)
    .on("click", markerClickEvent, carOne);//这里第三个参数carOne，如果默认情况下就是this也就是整个marker
  carTwoControl = L.marker(carTwo.lat, { icon: carTwoIcon })
    .addTo(map)
    .on("click", markerClickEvent, carTwo);
  carThreeControl = L.marker(carThree.lat, { icon: carThreeIcon })
    .addTo(map)
    .on("click", markerClickEvent, carThree);
  carFourControl = L.marker(carFour.lat, { icon: carFourIcon })
    .addTo(map)
    .on("click", markerClickEvent, carFour);

  function onMapClick(e) {
    if (showPanel.value === true) {
      let realLatLng = latlangCalc(e.latlng.toString())
      ElMessageBox.confirm(
        '你确认要下达将小车移动到' + realLatLng + '的指令吗?',
        'Warning',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning',
          draggable: true,
        }
      ).then(() => {
        let realLatLng = e.latlng.toString().slice(6).split(",");
        let realLat = (realLatLng[0].slice(1))
        let realLng = (realLatLng[1].slice(1, -1))
        newParam.newX = realLng;
        newParam.newY = realLat;
        moveCars()
      })
        .catch(() => {
          ElMessage({
            type: 'warning',
            message: '操作取消',
          })
        })
    }
    else {
      let realLatLng = latlangCalc(e.latlng.toString())
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + realLatLng)
        .openOn(map);
    }
  }
  map.on("click", onMapClick);
}
//end of init

//点击图标的触发事件
function markerClickEvent(e) {
  carInfo.IMU = {}
  carInfo.TF = {}
  activeName.value = ''
  // activeModel.value = 'auto'
  // chaseTime.value = 0;
  newParam.newX = ''
  newParam.newY = ''
  //this的内容就是调用markerClick时传的第三个参数，用我自己的carOne，carTwo等代替了指代上下文的this
  if (this.id === carInfo.id) {
    showPanel.value = !showPanel.value;
  }
  else {
    linearV = []
    AngularV = []
    orientationV = []
    TFVR = []
    TFVT = []
    showPanel.value = true;
    loading.value = true;
    switch (this.name) {
      case "One":
        currentCarMarker = carOneControl;
        carInfo.id = carOne.id
        carInfo.type = CARTYPE.RUNNER
        carType.value = ''
        carInfo.mode = carOne.mode
        break;
      case "Two":
        currentCarMarker = carTwoControl;
        carInfo.id = carTwo.id;
        carInfo.type = CARTYPE.CHASER
        carType.value = 'warning'
        carInfo.mode = carTwo.mode
        break;
      case "Three":
        currentCarMarker = carThreeControl;
        carInfo.id = carThree.id;
        carInfo.type = CARTYPE.CHASER
        carType.value = 'warning'
        carInfo.mode = carThree.mode
        break;
      case "Four":
        currentCarMarker = carFourControl;
        carInfo.id = carFour.id;
        carInfo.type = CARTYPE.CHASER
        carType.value = 'warning'
        carInfo.mode = carFour.mode
        break;
      default:
        break;
    }
    carInfo.lat = latlangCalc(e.latlng);
    setTimeout(function () { loading.value = false; console.log(loading.value) }, 400);
  }
}

//转换坐标
function xy(x, y) {
  var yx = L.latLng;
  if (Array.isArray(x)) {
    // When doing xy([x, y]);
    return yx(x[1], x[0]);
  }
  return yx(y, x); // When doing xy(x, y);
}


function latlangCalc(newlat) {
  let realLatLng = newlat.toString().slice(6).split(",");
  let realLat = (realLatLng[0].slice(1))
  if (realLat[0] === '-') {
    realLat = realLat.substr(0, 7)
  }
  else realLat = realLat.substr(0, 6)
  let realLng = (realLatLng[1].slice(1, -1))
  if (realLng[0] === '-') {
    realLng = realLng.substr(0, 7)
  }
  else realLng = realLng.substr(0, 6)
  let latlang = "(" + realLng + " , " + realLat + ")";
  return latlang
}

//绘图用，保留两位小数
function changeTwoDecimal(x) {
  var f_x = parseFloat(x);
  if (isNaN(f_x)) {
    return false;
  }
  f_x = Math.round(f_x * 100) / 100;

  return f_x;
}

// 监听键盘
function keyboardDetect() {
  document.onkeydown = (e) => {
    if (e.key === 'a' && onManuel === true && iskeyUp.Aup === true) {
      console.log("left down")
      iskeyUp.Aup = false;
      carDrive("left", true)
      // 按下左箭头

    } else if (e.key === 'd' && onManuel === true && iskeyUp.Dup === true) {
      iskeyUp.Dup = false;
      console.log("right down")
      carDrive("right", true)
      // 按下右箭头
    }
    else if (e.key === 'w' && onManuel === true && iskeyUp.Wup === true) {
      console.log("up down")
      iskeyUp.Wup = false;
      carDrive("forward", true)
    }
    else if (e.key === 's' && onManuel === true && iskeyUp.Sup === true) {
      console.log("down down")
      iskeyUp.Sup = false;
      carDrive("backward", true)
    }

  }
  document.onkeyup = (e) => {
    if (e.key === 'a' && onManuel === true) {
      console.log("left up")
      iskeyUp.Aup = true;
      carDrive("left", false)
      // 按下左箭头

    } else if (e.key === 'd' && onManuel === true) {
      console.log("right up")
      iskeyUp.Dup = true;
      carDrive("right", false)
      // 按下右箭头
    }
    else if (e.key === 'w' && onManuel === true) {
      console.log("up up")
      iskeyUp.Wup = true;
      carDrive("forward", false)
    }
    else if (e.key === 's' && onManuel === true) {
      console.log("down up")
      iskeyUp.Sup = true;
      carDrive("backward", false)
    }
  }
}

//手动驾驶
function carDrive(direction, keydown) {
  driveCar(direction, carInfo.id, keydown).then(res => {
    if (res.code === 200) {
      console.log("drive success")
      if (keydown === true) {
        if (iskeyUp.Aup === false && iskeyUp.Wup === false) {//同时按下A和W
          ElNotification({
            title: '手动驾驶',
            message: '正在驾驶小车' + carInfo.id + '左转！',
            type: 'success',
          })
        }
        else if (iskeyUp.Dup === false && iskeyUp.Wup === false) {//同时按下D和W
          ElNotification({
            title: '手动驾驶',
            message: '正在驾驶小车' + carInfo.id + '右转！',
            type: 'success',
          })
        }
        else if (iskeyUp.Wup === false && iskeyUp.Sup === true) {//只按下W
          ElNotification({
            title: '手动驾驶',
            message: '正在驾驶小车' + carInfo.id + '前进！',
            type: 'success',
          })
        }
        else if (iskeyUp.Sup === false) {//只按下S
          ElNotification({
            title: '手动驾驶',
            message: '正在驾驶小车' + carInfo.id + '后退！',
            type: 'success',
          })
        }
      }
    }
  })
}

//小车自动导航
function moveCars() {
  ruleForm.value.validate((valid) => {
    if (valid) {
      let param = { 'id': carInfo.id, 'x': newParam.newX, 'y': newParam.newY }//地图上的坐标跟实际的XY反过来的
      moveCar(param).then(res => {
        if (res.code === 200) {
          ElMessage({
            message: '小车' + carInfo.id + '自动导航指令下达成功！',
            type: 'success',
          })
          newParam.newX = ''
          newParam.newY = ''
        }
        else {
          ElMessage({
            message: '网络错误，指令下达失败！',
            type: 'error',
          })
        }
      })
    } else {
      ElMessage({
        message: '请完整输入小车移动的目标坐标！',
        type: 'warning'
      });
      return false;
    }
  });
}

//追逃模式
function handleChaseMode() {
  isChaseMode.value = true;
  let sec = chaseTime.value * 60;
  ElNotification({
    title: '追逃模式',
    message: '追逃模式已启动！',
    type: 'success'
  });
  carOne.mode = CARMODE.ESCAPE;
  carTwo.mode = CARMODE.SEARCH;
  carThree.mode = CARMODE.SEARCH;
  carFour.mode = CARMODE.SEARCH;
  chaseStart(sec).then(res => {
    if (res.code === 200) {
      isChaseMode.value = false;
      carOne.mode = CARMODE.IDLE;
      carTwo.mode = CARMODE.IDLE;
      carThree.mode = CARMODE.IDLE;
      carFour.mode = CARMODE.IDLE;
      if (res.msg === 'Runner win!') {
        ElNotification({
          title: '追逃模式',
          message: '逃跑者获胜！',
          type: 'success'
        });
      }
      else if (res.msg === 'Catcher win!') {
        ElNotification({
          title: '追逃模式',
          message: '追捕者获胜！',
          type: 'success'
        });
      }
    }
    else {
      ElNotification({
        title: '追逃模式',
        message: '追逃模式发生错误！',
        type: 'error'
      });
    }
  })
}

//切换命令类型
const handleClick = (TabsPaneContext, Event) => {
  let currentTab = TabsPaneContext.props.name;
  console.log(TabsPaneContext.props.name)
  if (currentTab === 'manuel') {
    onManuel = true;
  }
  else { onManuel = false }
}

//导航栏返回键
function goBack() {
  router.push("/");
}

</script>

<style>
.header-button {
  float: right;
}

.el-card {
  border-radius: 8px !important;
}

.main-card {
  margin-left: 15px;
  margin-right: 15px;
  background: transparent !important;
}

.rosmap {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 6px;
}

.radius {
  /* height: 780px; */
  width: 1080px;
  border: 1px solid var(--el-border-color);
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex: 3;
}

#map {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #f0f0f06d
}

.details {
  margin-left: 20px;
  margin-top: 0px;
  height: calc(100vh - 145px);
  flex: 2;
}

.controlPanel {
  display: flex;
  /* border: solid 1px; */
  border-radius: 6px;
  height: 100%;
}

.control-card {
  overflow: auto !important;
  height: 100%;
}

.add_btn {
  min-height: 39px;
}

.el-input__wrapper {
  padding: 0 !important;
}

.commandButton {
  /* float: right;  */
  padding: 10px 15px !important;
  margin-right: 20px;
}

.commandButton2 {
  /* float: right;  */
  padding: 10px 15px !important;
  /* margin:auto; */
  width: 100%;
  display: flex;
  height: 50px !important;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 24px;
}

.el-divider {
  margin-top: 2px !important;
  margin-bottom: 15px !important;
  height: 0.5px !important;
}

.item-center {
  margin-right: 40px;
}

#linearV {
  width: 400px;
  height: 300px;
  margin: auto;
}

#angularV {
  width: 400px;
  height: 300px;
  margin: auto;
}

#orientationV {
  width: 400px;
  height: 300px;
  margin: auto;
}

#TFVR {
  width: 400px;
  height: 300px;
  margin: auto;
}

#TFVT {
  width: 400px;
  height: 300px;
  margin: auto;
}

.slider-demo-block {
  display: flex;
  align-items: center;

}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 10px;
}

.slider-demo-block .demonstration {
  font-size: 14px;
  width: 90%;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}

.slider-demo-block .demonstration+.el-slider {
  flex: 0 0 70%;
}
</style>