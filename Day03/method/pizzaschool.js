/* 피자 가게를 운영하는 오브젝트 만들어보세요.
- **속성**
    - `sales`: 총 매출 (초기값 0)
    - `menus`: 메뉴 배열 (피자 이름, 가격, 재고 포함)
- **메서드**
    1. `order(menuNumber)`
        - 해당 메뉴 번호의 재고가 1개 이상이면:
            - 매출에 가격 추가
            - 재고 1 감소
            - 콘솔에 `"OOO 피자가 판매되었습니다. 현재 매출: XXXX원"` 출력
        - 재고가 0개라면:
            - `"OOO 피자는 품절입니다."` 출력
    2. `restock(menuNumber)`
        - 해당 메뉴 번호의 재고 +1
        - `"OOO 피자 재고가 충당되었습니다. 현재 재고: N개"` 출력
    3. `add(name,price,stock)`
        - 메뉴배열에 새로운 데이터 추가하기
        - 단, name 빈문자열 이거나 price가 음수거나 stock가 음수이면
            - 콘솔에 "올바르지 않은 데이터 입니다" */

const school = {
  sales: 0,
  menus: [
    { name: "치즈피자", price: 7000, stock: 3 },
    { name: "불고기피자", price: 9000, stock: 2 },
    { name: "포테이토피자", price: 9000, stock: 2 },
  ],
  order: function (menuNumber) {
    if (this.menus[menuNumber - 1].stock > 0) {
      this.sales = this.sales + this.menus[menuNumber - 1].price;
      this.menus[menuNumber - 1].stock = this.menus[menuNumber - 1].stock - 1;
      console.log(`${this.menus[menuNumber - 1]} 피자가 판매되었습니다. 현재 매출: ${this.sales}원`);
    } else {
      console.log(`${this.menus[menuNumber - 1].name}피자는 품절입니다.`);
    }
  },
  restock: function (menuNumber) {
    this.menus[menuNumber - 1].stock = this.menus[menuNumber - 1].stock + 1;
    console.log(`${this.menus[menuNumber - 1].name} 피자 재고가 충당되었습니다. 현재 재고: ${this.menus[menuNumber - 1].stock}개`);
  },

  add: function (name, price, stock) {
    if (typeof name != "string" || name == "" || typeof price != "number" || price < 0 || typeof stock != "number" ||stock < 0) {
      console.log("올바르지 않은 데이터 입니다");
    } else {
      this.menus.push({ name: name, price: price, stock: stock });
    }
  },
};

school.add("여진짜 피자","5000000")