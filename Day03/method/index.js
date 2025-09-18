const coffee = "americano";

coffee[0]; // "a"
coffee.length; //역할: 몇글자임?           리턴:9
coffee.includes("i"); //역할: 포함여부              리턴: true
coffee.startsWith("m"); //역할: 시작여부              리턴: false
coffee.endsWith("o"); //역할: 끝여부                리턴: true
coffee.indexOf("r"); //역할: 몇번째 있는지 묻기      리턴:true

coffee.slice(0, 4); //역할: 0-4 짤라서 줌          리턴:amer
coffee.replace("a", "k"); //역할: a를 k로 바꿔줌         리턴:kmericano
coffee.replaceAll("a", "k"); //역할: 모든 a를 k로 바꿔줌 리턴:kermickno
coffee.split("i"); //역할: i기준으로 찢음         리턴:["amer","cano"]
" x ".trim(); //역할: 공백 제거             리턴: "x"
coffee.repeat(3); //역할: americanoamericanoamericano
coffee.toUpperCase(); //역할: 대문자화하기          리턴:AMERICANO
coffee.toLowerCase(); //역할: 소문자화하기          리턴:americano
