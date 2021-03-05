'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 50;
var GISTOGRAMM_HEIGHT = 150;
var GISTOGRAMM_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, name, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, 'rgba(0, 0, 0, 0.4)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = "#000";
  ctx.font = "16px PT MONO ";
  ctx.fillText("Ура вы победили!", CLOUD_X + (GAP / 2), CLOUD_Y + CLOUD_Y + (GAP / 2));
  ctx.fillText("Список результатов:", CLOUD_X + (GAP / 2), CLOUD_Y + GAP + CLOUD_Y);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < name.length; i++) {
    ctx.fillText(name[i], CLOUD_X + CLOUD_Y + CLOUD_Y + (GAP * i), CLOUD_HEIGHT - CLOUD_Y + 10);
    if (name[i] == "Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
    }
    else {
      var random = Math.random() * 1;
      ctx.fillStyle = 'rgba(10, 50, 250, ' + random;
    }
    ctx.fillRect(CLOUD_X + CLOUD_Y + CLOUD_Y + (GAP * i), CLOUD_HEIGHT - (CLOUD_Y + 5), GISTOGRAMM_WIDTH, -(GISTOGRAMM_HEIGHT * times[i]) / maxTime);
  }
};
