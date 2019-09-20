'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_Y = 10;
var CLOUD_X = 100;
var GAP = 10;
var FONT_GAP = 40;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;



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
  return getMaxElement;
};




window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 3);


  // var playerIndex = 0;
  // var playerName = 'Вы';

  var names = ['Вы', 'Иван', 'Юлия', 'Вася'];

  var maxTime = getMaxElement(times);

  for (var i = 0; i <= names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i + FONT_GAP, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }

  // function inRad(num) {
  //   return num * Math.PI / 180;
  // }
  // ctx.rotate(inRad(-45));
  ctx.fillStyle = 'black';
  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 0 + FONT_GAP, barWidth, BAR_HEIGHT);

  // var playerIndex = 1;
  // var playerName = 'Иван';

  // ctx.fillStyle = 'black';
  // ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1);
  // ctx.fillStyle = 'hsl(227, 100%, 50%)';
  // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 1 + FONT_GAP, barWidth, BAR_HEIGHT);


  // var playerIndex = 2;
  // var playerName = 'Юлия';

  // ctx.fillStyle = 'black';
  // ctx.fillText('Юлия', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2);
  // ctx.fillStyle = 'hsl(227, 60%, 50%)';
  // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 2 + FONT_GAP, barWidth, BAR_HEIGHT);


  // var playerIndex = 3;
  // var playerName = 'Вася';

  // ctx.fillStyle = 'black';
  // ctx.fillText('Вася', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 3);
  // ctx.fillStyle = 'hsl(227, 10%, 50%)';
  // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 3 + FONT_GAP, barWidth, BAR_HEIGHT);



};
