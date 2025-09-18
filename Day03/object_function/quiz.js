const venti = {
  sales: 0,
  menus: [
    { name: "아이스 아메리카노", price: 2000 },
    { name: "아이스 라떼", price: 3000 },
    { name: "에이드", price: 3800 },
  ],
  sell: function (num) {
    this.sales = this.sales + this.menus[num - 1].price;
    console.log(`${this.menus[num - 1].name}이 ${this.menus[num - 1].price}으로 판매되었습니다. `);
    console.log(`현재 매출 ${this.sales}입니다.`);
  },
};

// 서브웨이

// 매출:0
// 메뉴: 서브웨이클럽 7000 재고:3, BLT 7500 재고:2, 에그마요 5000 재고:2, 쉬림프 8000 재고:0
// 판매: 함수 [매출올리고, 콘솔로 판매내용 알려주고, 재고하나 깎아야함, 단 재고가 1개이상일 경우, 0개면 매출안올라가고 해당 재고는 품절입니당]
// 재고충당: 함수 [메뉴번호 매개변수 해당 메뉴의 재고가 하나올라감]

const subway = {
  sales: 0,
  menus: [
    { name: "club", price: 7000, stock: 3 },
    { name: "blt", price: 7500, stock: 2 },
    { name: "eggmayo", price: 5000, stock: 2 },
    { name: "shrimp", price: 8000, stock: 0 },
  ],
  sell: function (menuNumber) {
    const stock = this.menus[menuNumber - 1].stock;
    if (stock == 0) {
      console.log(`해당 제품 재고가 없습니다.`);
    } else {
      this.sales = this.sales + this.menus[menuNumber - 1].price;
      console.log(`${this.menus[menuNumber - 1].name}이 판매되었습니다.`);
      this.menus[menuNumber - 1].stock = this.menus[menuNumber - 1].stock - 1;
      console.log(`현재 총 매출: ${this.sales}`);
    }
  },
  supply: function (menuNumber) {
    this.menus[menuNumber - 1].stock = this.menus[menuNumber - 1].stock + 1;
    console.log(`${this.menus[menuNumber - 1].name}의 재고가 하나 충당 되었습니다.`);
    console.log(`현재 총 재고:${this.menus[menuNumber - 1].stock}`);
  },
};

subway.sell(1);
subway.sell(1);
subway.sell(1);
subway.sell(1);
subway.sell(1);
subway.supply(1);
subway.supply(1);
subway.supply(1);
subway.supply(1);
subway.supply(1);
subway.sell(1);
subway.sell(1);
subway.sell(1);
subway.sell(1);
subway.sell(1);
