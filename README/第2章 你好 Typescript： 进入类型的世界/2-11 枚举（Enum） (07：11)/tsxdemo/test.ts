// 2-11 枚举（Enum） (07：11)

enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction)
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
console.log(Direction.Up) // 0

console.log(Direction[0]) // Up


enum DirectionA {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

const value = 'UP';
if(value === DirectionA.Up) {
    console.log('go up!')
}
// go up!
