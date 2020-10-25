// 2-11 枚举（Enum） (07：11)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
/*
{
  '0': 'Up',
  '1': 'Down',
  '2': 'Left',
  '3': 'Right',
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
}
 */
console.log(Direction.Up); // 0
console.log(Direction[0]); // Up
var DirectionA;
(function (DirectionA) {
    DirectionA["Up"] = "UP";
    DirectionA["Down"] = "DOWN";
    DirectionA["Left"] = "LEFT";
    DirectionA["Right"] = "RIGHT";
})(DirectionA || (DirectionA = {}));
var value = 'UP';
if (value === DirectionA.Up) {
    console.log('go up!');
}
// go up!
