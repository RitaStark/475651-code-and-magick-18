'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_Y = 10;
var CLOUD_X = 100;
var GAP = 10;
var FONT_GAP = 40;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;



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


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);




  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + GAP * 4 + FONT_GAP * i + TEXT_WIDTH * i, CLOUD_Y + BAR_HEIGHT + GAP * 9);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 4 + FONT_GAP * i + TEXT_WIDTH * i, CLOUD_Y * 9 + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - GAP * 2);

    if (names[i] == ['Вы']) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(227, ' + (times[i] / maxTime * 100) + '%, 50%)';

    }
    ctx.fillRect(CLOUD_X + GAP * 4 + FONT_GAP * i + TEXT_WIDTH * i, CLOUD_Y * 9 + (BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime)), barWidth, BAR_HEIGHT * times[i] / maxTime);

  }

};
