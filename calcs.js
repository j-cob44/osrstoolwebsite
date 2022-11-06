function DropChanceCalc(){
  var Rate = document.getElementById('dccRate').value;
  var Kills = document.getElementById('dccKills').value;

  var Result = (1 - Math.pow((1 - (1 / Rate)), Kills));
  var ResultPlusOne = Result + (1 / Rate);

  var PercentResult = Result * 100;
  var PercentResultPlusOne = ResultPlusOne * 100;

  document.getElementById('dccResult').innerHTML = "Chance of a drop at this kill count: <strong>" + PercentResult + "%</strong>";
}
