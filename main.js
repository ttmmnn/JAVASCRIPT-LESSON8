//予約後や数値や文字列や変数をキーにすることが出来る
const interests = 'interests';
const person = {
  name: 'Yoshipi',
  age: 30,
  greeting: function () {
    return 'hello';
  },
  const: 'const', //キーにconstやletの文字を当てることが出来る
  'current city': 'Tokyo', //文字列をキーにすることが出来る
  3: 3, //先頭に数字で文字を当てることは出来ないが、数字だけをキーにすることは出来る
  3.1: 3.1, //少数をキーに当てることも出来る
  '-3': -3, //マイナスはキーに当てることは出来ないが、文字列として当てることは出来る
  [interests]: ['music', 'travel'], //キーを動的な値にしたい場合、[キー]:キーの形で文字列を当てることが出来る
};

//プロパティにアクセスするには　. もしくは　[]　を使う
// console.log(person['current city']);
// console.log(person.greeting());

//配列でキ‐を取り出す　Oblect.keys()を使う
for (const key in person) {
  // console.log(Object.keys(person));
}

//for ofでもfor inと同じように書ける
for (const key of Object.keys(person)) {
  // console.log(key);
}

// Object.values()で値を配列として取得
// console.log(Object.values(person));

//Object.entries()でキーとバリューを配列として取得
// console.log(Object.entries(person));

//プロパティを削除するにはdelete演算子を使う
delete person.age;

const name = 'Espresso';
const size = 350;
const coffee = {
  name,
  size,
};
//スプレッド構文　{...　}　オブジェクトをコピーする
const coffee2 = {
  ...coffee,
  ishot: true,
  name: 'Latte',
};
console.log(coffee2);
