//baskinrabbins
const baskinrabbins = {
  icecream: function (flavor) {
    return `${flavor}맛 아이스크림 나왔습니다.`;
  },
  coffee: function (shots) {
    return `${shots}샷 추가된 커피 나왔습니다.`;
  },
  cake: function (flavor) {
    return `${flavor}맛 아이스케이크 나왔습니다.`;
  },
};

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  minus: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  square: function (x, y) {
    return x ** y;
  },
};

const point = {
  x: 0,
  up: function (a) {
    this.x = this.x + a;
  },
  down: function () {
    this.x = this.x - 1;
  },
};
point.up(3);
point.up(5);
point.up(7);
point.up(11);
point.up(13);
