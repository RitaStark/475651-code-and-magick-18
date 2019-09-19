'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_Y = 60;
var CLOUD_X = 110;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;



var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 50, '#fff');

  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 50, 50);
  ctx.fillText('Список результатов:', 50, 80);


  var playerIndex = 0;
  var playerName = 'Вы';

  var names = ['Вы', 'Иван', 'Юлия'];

  ctx.fillText('Вы', CLOUD_X, CLOUD_Y);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 0, barWidth, BAR_HEIGHT);

  var playerIndex = 1;
  var playerName = 'Иван';

  ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + 70);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 1, barWidth, BAR_HEIGHT);

  var playerIndex = 1;
  var playerName = 'Юлия';

  ctx.fillText('Юлия', CLOUD_X + GAP, CLOUD_Y + 90);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 2, barWidth, BAR_HEIGHT);

};
