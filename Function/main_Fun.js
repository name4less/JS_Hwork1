/* Домашнее задание. Функции

## Анализ

Проанализируйте свои предыдущие ДЗ на предмет повторяющихся действий и придумайте названия, параметры и возвращаемое значение для функций 
в этих случаях

## intRandom

Напишите функцию `intRandom`, которая принимает два параметра: нижнюю и верхнюю границу, и возвращает
**целое** случайное число из этого диапазона включительно:

```javascript
intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
intRandom(-1,-1) // вернет -1
intRandom(0,1) // вернет 0 или 1
intRandom(10) // вернет 0 до 10 включительно
```

Обратите внимание, что если передан один параметр (`intRandom(10)` в примере выше), то функция работает как будто первый параметр равен 0,
 а переданный параметр становится вторым параметром (`intRandom(0,10)`)

Используйте умножение для расширения значения встроенной функции `Math.random` c диапозона 1, сложениe для смещения результата
на первый параметр, и `Math.round` для округления результата

## greetAll

Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров

```javascript
greetAll("Superman") // выводит alert "Hello Superman"
greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
greetAll("Superman", "SpiderMan", "Captain Obvious") // выводит alert "Hello Superman, SpiderMan, Captain Obvious"
```
Используйте `arguments` и `for`. 

## sum

Напишите функцию `sum`, которая сумирует любое количество параметров:

```javascript
sum(1) // => 1
sum(2) // => 2
sum(10,20,40,100) // => 170
```

Используйте псевдомассив `arguments` для получения всех параметров, и `for` для итерирования по нему

## avg

Сделайте функцию `avg`, которая рассчитывает среднее значение любого количества параметров

```javascript
avg(1) // => 1
avg(2) // => 2
avg(10,20,40,100) // => 42.5
```

## Union

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

## Union declarative

Используйте ассоциативный массив вместо `switch`

## Person category

Добавьте в ассоциативный массив персоны метод (функцию) `getAgeCategory`, которая будет возвращать возрастную категорию персоны, анализируя 
её возраст. Можете использовать пример с if-else из второго занятия.

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

Сделайте функцию inputPerson, которая будет спрашивать у пользователя фамилию, имя, отчество, и возвращать ассоциативный массив с новой
персоной:

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
Функция с таким параметром будет выводить 4 раза `prompt`, с текстом из полей `prompt` структуры ("Введите Фамилию" и так далее), и 
формировать внутренний
объект `result` с полями `field` (`surname`, `name` и так далее), и значениями, который введет пользователь (вернет функция `prompt`). 
`default_` в структуре передается в `prompt` как значение по умолчанию.

```javascript
inputAnything([{prompt: "Введите число",
                default_: "0",
                field: "number"
               }]) // => {number: "число, которое ввел пользователь"}
inputAnything(inputStructure) // => {surname: "...", name: "...", fatherName: "...", age: "..."}
```

Таким образом вы сделаете функцию, которая может ввести вам данные в любой ассоциативный массив, указывая структуру получаемого массива
в *декларативном стиле*.

## Черный пояс: jqInputAnything
Сделайте генератор форм по структуре, схожей со структурой предыдущего задания, который при нажатии кнопки сохранения будет формировать 
объект со значениями из полей ввода по аналогии с `inputAnything`. 
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
В силу асинхронной однопоточной архитектуры JavaScript вы не сможете вернуть результат как в inputAnything. Однако вы можете передать 
объект, который когда-нибудь заполнится (при нажатии пользователем кнопки сохранения)
где:
- `result` - объект, в который будут заносится данные по нажатии кнопки сохранения
- `inputStructure` - структура, которая используется для генерации формы.
    - `prompt` - label слева от поля
    - `default_` - значение по умолчанию в `input`, т. е. `value`
    - `field` - имя поля в объекте, в которое занесется результат
    - `placeholder` - placeholder в `input`
    - `type` - тип `input` (`text`, `number` и т. д.)
- третий параметр - текст на кнопке сохранения
- четвертый параметр - текст на кнопке сброса. При нажатии на эту кнопку все поля принимают свои значения по умолчанию, переданные в 
`default_`
*/

function a(str){
    alert(str);
}

function cube(num){
    let k3 = numˆ3;
    return k3;
}

function avg2(x, y){
    let midlle = (x+y)/2;
    return midlle;
}

function sum3(x, y, z){
    let sum = x+y+z;
    return sum;
}