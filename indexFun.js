/*# Домашнее задание. Функции
## Анализ
Проанализируйте свои предыдущие ДЗ на предмет повторяющихся действий и придумайте названия, параметры и возвращаемое
значение для функций
в этих случаях

## a DONE
Напишите функцию `a`, которая просто является коротким именем для alert. Смотрите пример с `d()`, которая является
коротким именем для `debugger` из
материала лекции

```javascript
a("Привет!") // вызывает alert("Привет!")
```

## cube DONE
Напишите функцию `cube`, которая возвращает число в третьей степени:

```javascript
cube(1) // возвращает 1
cube(2) // возвращает 8
cube(3) // возвращает 27
```

## avg2 DONE
Напишите функцию  `avg2`, которая рассчитывает среднюю для двух чисел:

```javascript
avg2(1,2) // возвращает 1.5
avg2(10,5) // возвращает 7.5
```
формула для подсчета среднего: (a + b) / 2

## sum3 DONE
Напишите функцию `sum3` для суммирования 3 чисел:

```javascript
sum3(1,2,3) // => 6
sum3(5,10,100500) // => 100515
sum3(5,10) // => 15
```
Обратите внимание, что `sum3` от двух параметров тоже работает корректно.

## intRandom DONE
Напишите функцию `intRandom`, которая принимает два параметра: нижнюю и верхнюю границу, и возвращает
**целое** случайное число из этого диапазона включительно:

```javascript
intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
intRandom(-1,-1) // вернет -1
intRandom(0,1) // вернет 0 или 1
intRandom(10) // вернет 0 до 10 включительно
```
Обратите внимание, что если передан один параметр (`intRandom(10)` в примере выше), то функция работает как будто первый
параметр равен 0, а переданный параметр становится вторым параметром (`intRandom(0,10)`)

Используйте умножение для расширения значения встроенной функции `Math.random` c диапозона 1, сложениe для смещения
результата на первый параметр, и `Math.round` для округления результата

## greetAll DONE
Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров

```javascript
greetAll("Superman") // выводит alert "Hello Superman"
greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
greetAll("Superman", "SpiderMan", "Captain Obvious") // выводит alert "Hello Superman, SpiderMan, Captain Obvious"
```
Используйте `arguments` и `for`.

## sum DONE
Напишите функцию `sum`, которая сумирует любое количество параметров:

```javascript
sum(1) // => 1
sum(2) // => 2
sum(10,20,40,100) // => 170
```
Используйте псевдомассив `arguments` для получения всех параметров, и `for` для итерирования по нему

## avg DONE
Сделайте функцию `avg`, которая рассчитывает среднее значение любого количества параметров

```javascript
avg(1) // => 1
avg(2) // => 2
avg(10,20,40,100) // => 42.5
```

## Union DONE
Всё предыдущие функции и примеры с ними объедините в функции, которые вызывайте в `switch` по имени задания:
```javascript

function aSample(){
    a("Привет!") // вызывает alert("Привет!")
}

function cubeSample(){
    cube(5) // => 125
}

var sample = prompt("Введите название задания")
switch (sample.toLowerCase()){
    case "a": aSample()
              break
    case "cube": cubeSample()
              break
}
```

## Union declarative DONE
Используйте ассоциативный массив вместо `switch`

## Person category DONE
Добавьте в ассоциативный массив персоны метод (функцию) `getAgeCategory`, которая будет возвращать возрастную категорию
персоны, анализируя её возраст. Можете использовать пример с if-else из второго занятия.

```javascript
var person = {
    ...
    age: 50,
    ...
    getAgeCategory: function(){
        ...
    }
}

alert(person.getAgeCategory()); //закат или что там у нас в 50 лет
```

## Синий пояс: inputPerson
Сделайте функцию inputPerson, которая будет спрашивать у пользователя фамилию, имя, отчество, и возвращать ассоциативный
массив с новой персоной:

```javascript
inputPerson() // => {"name": "то, что ввел пользователь", "surname": ..., }
var persons = [inputPerson(), inputPerson(), inputPerson()] // => вводим трех персон
```

## Коричневый пояс: inputAnything
Сделайте функцию inputAnything, которая в качестве параметра принимает следующую структуру:

```javascript
var inputStructure = [
    {prompt: "Введите Фамилию",
     default_: "",
     field: "surname"
    },
    {prompt: "Введите Имя",
     default_: "",
     field: "name"
    },
    {prompt: "Введите Отчество",
     default_: "",
     field: "fatherName"
    },
    {prompt: "Введите возраст",
     default_: "0",
     field: "age"
    },
]
```
Функция с таким параметром будет выводить 4 раза `prompt`, с текстом из полей `prompt` структуры ("Введите Фамилию" и
так далее), и формировать внутренний
объект `result` с полями `field` (`surname`, `name` и так далее), и значениями, который введет пользователь (вернет
функция `prompt`).
`default_` в структуре передается в `prompt` как значение по умолчанию.

```javascript
inputAnything([{prompt: "Введите число",
                default_: "0",
                field: "number"
               }]) // => {number: "число, которое ввел пользователь"}
inputAnything(inputStructure) // => {surname: "...", name: "...", fatherName: "...", age: "..."}
```

Таким образом вы сделаете функцию, которая может ввести вам данные в любой ассоциативный массив, указывая структуру
получаемого массива
в *декларативном стиле*.

## Черный пояс: jqInputAnything
Сделайте генератор форм по структуре, схожей со структурой предыдущего задания, который при нажатии кнопки сохранения
будет формировать объект со значениями из полей ввода по аналогии с `inputAnything`.
Расширьте декларацию формы дополнительными полями `type` и `placeholder`:

```javascript
var inputStructure = [
    {prompt: "Введите Фамилию",
     default_: "",
     field: "surname",
     placeholder: "surname",
     type: "text",
    },
    {prompt: "Введите Имя",
     default_: "",
     field: "name",
     placeholder: "name",
     type: "text",
    },
    {prompt: "Введите Отчество",
     default_: "",
     field: "fatherName",
     placeholder: "father name",
     type: "text",
    },
    {prompt: "Введите возраст",
     default_: "0",
     field: "age",
     placeholder: "age",
     type: "number",
    },
]

jqInputAnything(result, inputStructure, "Сохранить", "Сбросить") //второй параметр - текст на кнопке
```
В силу асинхронной однопоточной архитектуры JavaScript вы не сможете вернуть результат как в inputAnything. Однако вы
можете передать объект, который когда-нибудь заполнится (при нажатии пользователем кнопки сохранения)
где:
- `result` - объект, в который будут заносится данные по нажатии кнопки сохранения
- `inputStructure` - структура, которая используется для генерации формы.
    - `prompt` - label слева от поля
    - `default_` - значение по умолчанию в `input`, т. е. `value`
    - `field` - имя поля в объекте, в которое занесется результат
    - `placeholder` - placeholder в `input`
    - `type` - тип `input` (`text`, `number` и т. д.)
- третий параметр - текст на кнопке сохранения
- четвертый параметр - текст на кнопке сброса. При нажатии на эту кнопку все поля принимают свои значения по умолчанию,
переданные в `default_`
*/

//a
function a(str){
    alert(str);
}
a('Hello, world!');

//cube
function cube(num){
    let k3 = numˆ3;
    return k3;
}
cube(2);

//avg2
function avg2(x, y){
    let midlle = (x+y)/2;
    return midlle;
}
avg2(1,2);

//sum3
function sum3(x, y, z){
    let a = x;
    let b,c;
    if(y==undefined){
        b = 0;
    }
    else{
        b=y;
    }

    if(z==undefined)
    {
        c=0;
    }
    else{
        c=z;
    }
    let sum = a+b+c;
    return sum;
}
sum3(1, 1);

//intRandom
function intRandom(min, max){
    let min1, max1;
    if(max==undefined)
    {
        min1 = 0;
        max1 = min;
    }
    else{
        min1 = min;
        max1 = max;
    }
    let random = min1 - 0.5 + Math.random()*(max1-min1+1);
    random = Math.round(random);
    return random;
}
intRandom(1);

//greetAll
function sayHi(){
    let str = 'Hello, ';
    for(let i=0; i<arguments.length; i++)
    {
        str += (arguments[i]+', ');
    }
    alert(str);
}
sayHi('Anastasiya', 'Max', 'Frank');

//sum
function sumAll(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
alert(sumAll(1, 100, 10, 1000));

//avg
function getAvg(){
    let sum=0;
    let avg=0;
    let count=0;
    for(i=0; i<arguments.length; i++)
    {
        sum +=arguments[i];
        count++;
    }
    //arg = arguments.length;
    avg = (sum/count);
    return avg;
}
alert(getAvg(1, 10));

//Union
var mathFunction = prompt("Get name function");
switch (mathFunction.toLowerCase()) {
    case 'a': a();
        break;
    case 'cube': cube();
        break;
    case 'avg2': avg2();
        break;
    case 'sum3': sum3();
        break;
    case 'intrandom': intRandom();
        break;
    case 'greetAll': sayHi();
        break;
    case 'sum': sumAll();
        break;
    case 'avg': getAvg();
        break;
}

//Union declarative
var allMathFunction = {};
allMathFunction.prop_a = function (str)
{
    alert(str);
};
allMathFunction.prop_cube = function(num){
    let k = Math.pow(num,3);
    return k;
};
allMathFunction.prop_avg2 = function(x, y){
    let midlle = (x+y)/2;
    return midlle;
};
allMathFunction.prop_sum3 = function(x, y, z){
    let a = x;
    let b, c;
    if(y==undefined){
        b = 0;
    }
    else{
        b=y;
    }

    if(z==undefined)
    {
        c=0;
    }
    else{
        c=z;
    }
    let sum = a+b+c;
    return sum;
};
allMathFunction.prop_intRandom = function(min, max){
    let min1, max1;
    if(max==undefined)
    {
        min1 = 0;
        max1 = min;
    }
    else{
        min1 = min;
        max1 = max;
    }
    let random = min1 - 0.5 + Math.random()*(max1-min1+1);
    random = Math.round(random);
    return random;
};
allMathFunction.prop_greetAll = function(){
    let str = 'Hello, ';
    for(let i=0; i<arguments.length; i++)
    {
        str += (arguments[i]+', ');
    }
    alert(str);
};
allMathFunction.prop_sum = function(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
};
allMathFunction.prop_avg = function(){
    let sum=0;
    let avg=0;
    let count=0;
    for(let i=0; i<arguments.length; i++)
    {
        sum +=arguments[i];
        count++;
    }
    //arg = arguments.length;
    avg = (sum/count);
    return avg;
};

//check object
allMathFunction.prop_a('Function with math');
alert(allMathFunction.prop_cube(2));
alert(allMathFunction.prop_avg2(10, 0));
alert(allMathFunction.prop_sum3(1, 1,1));
alert(allMathFunction.prop_intRandom(1, 10));
alert(allMathFunction.prop_greetAll('Max', 'John'));
alert(allMathFunction.prop_sum(1, 10, 100, 1000, 10000));
alert(allMathFunction.prop_avg(10, 0));

//Person category
var Person = {
    age: true,
    getAgeCategory: function(age){
        if((age<=12)&&(age>0)){
            alert('Child');
        }
        else if((age>12)&&(age<=18)){
            alert('Teenager');
        }
        else if((age>18)&&(age<=30)){
            alert('Young person');
        }
        else if((age>30)&&(age<=60)){
            alert('Adult');
        }
        else if((age>60)&&(age<=100)){
            alert('Retiree');
        }
        else if(age>100){
            alert('Long-liver');
        }
        else{
            alert('Wrong age');
        }
    }
};
Person.age = prompt('Get your age');
Person.getAgeCategory(Person.age);

//Синий пояс: inputPerson
// Сделайте функцию inputPerson, которая будет спрашивать у пользователя фамилию, имя, отчество, и возвращать ассоциативный
// массив с новой персоной:
//
// ```javascript
// inputPerson() // => {"name": "то, что ввел пользователь", "surname": ..., }
// var persons = [inputPerson(), inputPerson(), inputPerson()] // => вводим трех персон
function inputPerson() {
    var obj = prompt('What personality do you want to create?');
    obj = {};
    obj.name = prompt('Get your name');
    obj.surname = prompt('Get your surname');
    obj.fathername = prompt('Get your fathername');
}

