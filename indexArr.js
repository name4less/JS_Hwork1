/* # Домашнее задание: Ассоциативные массивы
## 3 persons DONE
Сделать три ассоциативных массива `a`, `b`, `c`, в каждом из которых должны быть поля `name` и `surname`.

## different fields DONE
Добавьте некоторые другие поля (например `age`, `fathername`, `sex` (пол)) так, что бы набор полей отличался у разных
объектов

## fields check DONE
Проверьте наличие необязательных полей у каждого из этих массивов. Если поле найдено, выведите его с помощью `alert`.
Проверку делайте по `typeof` или `in` в `if`.

## array of persons DONE
Добавьте несколько ассоциативных массивов с персонами в *обычный* массив `persons`, например `a`,`b`,`c`. Так же
добавьте персону *литерально* (`{...}`).
Получится обычный массив с элементами-ассоциативными массивами с персонами.

## loop of persons DONE
Сделайте цикл, который выводит весь массив `persons` в форме объектов `console.log(persons[i])`

## loop of fields loop of persons DONE
Сделайте цикл, который выводит весь массив `persons`, но только Имя и Фамилию каждой персоны. Используйте вложенный
`for` для вывода полей персоны, и проверку на то, что ключ - имя или фамилия, а не что-то другое.

## loop of loop of keys DONE
Сделайте цикл, который выводит весь массив `persons`, но только Имя и Фамилию каждой персоны. Используйте `Object.keys`
и вложенный `for` для вывода полей персоны

## loop of loop with optional fields DONE
Сделайте цикл, который выводит весь массив `persons`, при этом проверяет наличие других полей (кроме `name` и `surname`),
и выводит дополнительные сообщения с этими полями. Первые два выводимых поля - `name` и `surname`

## fullName DONE
Сделайте цикл, которых добавляет поле `fullName` в каждый объект, содержащий ФИО. Учтите, что поле `fathername` не
является обязательным.

## serialize DONE
Создайте `JSON`-строку из `persons`

## deserialize DONE
Создайте ассоциативный массив с одной персоной из `JSON`-строки. Добавьте её в `persons`

## HTML
Сделайте цикл, который выводит весь массив `persons`, в форме HTML-таблицы. Имя и Фамилия - колонки.

## HTML optional fields
Сделайте цикл, который выводит весь массив `persons`, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии.

## HTML tr color
Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга `tr`.

## HTML th optional
Переработайте вывод `persons` в HTML с поиском всех возможных колонок во всех записях, выводом названий колонок в
заголовок HTML-таблицы.
Для решения этой задачи вначале узнайте множество полей (ключей) во всех записях, выведите HTML-заголовок используя тэги
`<th>`, а потом выводите все
записи.

## jQ HTML th optional

Сделайте предыдущее задание, используя jQuery

## jQ HTML th optional inputs

Сделайте предыдущее задание, используя jQuery с полями ввода для значение объектов. Используйте `input` разных типов в
зависимости от типа данных значения поля.

## Задание на синий пояс.

Сделать HTML-конструктор из деревянной структуры, которая была на прошлом занятии:

```javascript
var someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
                    tagName: "tr",
                    subTags: [
                        {
                            tagName: "td",
                            text: "some text",
                        },
                        {
                            tagName: "td",
                            text: "some text 2",
                        }
                    ]
        }
    ],
    attrs:
    {
        border: 1,
    },
}
```

Для начала сделайте конструктор для верхнего уровня (в примере - `table`). Потом с помощью копипасты сделайте то же
самое с вложенным уровнем `nestedTags` (`tr`).
Аналогично для уровня `td`.

Конструктор должен поддерживать вложенность до 3его уровня (как в примере). В результате работы конструктора из примера
выше должен получиться следующий
HTML(в строке `str`):

```HTML
<table border=1>
    <tr>
        <td>some text</td>
        <td>some text 2</td>
    </tr>
</table>
```
Переносы строк и отступы в результате не принципиальны, главное - структура HTML
Проверьте ваш код на других структурах.


## Задание на черный пояс

Сделать предыдущее задание на черный пояс в упрощенном виде: не использовать четырехмерный массив для хранения истории,
а использовать ассоциативный массив:
Например, если пользователь ввел `1212` за последние четыре хода, то мы ищем то, что было введено последний раз после
такой последовательности:
```javascript
var history      = "1212"
var predictValue = predictArray[history] // в predictValue то, что ввел последний раз пользователь после нажатий 1212
var newValue     = prompt("введите 1 или 2","");
predictArray[history] = newValue         //сохраняем новый ввод
//сдвигаем историю */

// 3 persons
var a = {
    name : true,
    surname : true,
    age : true
};

var b = {
    name : true,
    surname : true,
    sex : true
};

var c = {
    name : true,
    surname : true,
    fathername: true
};

//fields check
if ("age" in a) alert("This property is an object A - age:"+a.age);
if ("sex" in b) alert("This property is an object B - sex:"+b.sex);
if ("fathername" in c) alert("This property is an object C - city:"+c.city);

//array of persons
var persons = [a, b, c];
var person = {
    a,
    b,
    c
};

//loop of persons
for(let i=0; i<=persons.length-1; i++)
{
    console.log(persons[i]);
}

// loop of fields loop of persons
for(let key in persons){
    if(key == 'name')
    {
        alert('Persons name'+persons[key]);
    }
    else if(key == 'surname')
    {
        alert('Persons surname'+persons[key]);
    }
}

//loop of loop of keys
for(let i=0; i<=persons.length-1;i++)
{
    if(Object.keys(persons)=='name')
    {
        alert('Persons name'+persons.name);
    }
    else if(Object.keys(persons)=='surname')
    {
        alert('Persons surname'+persons.surname);
    }
}

//loop of loop with optional fields
for(let key in persons){
switch(key)
{
    case 'name':
        alert('Name - '+key);
        break;
    case 'surname':
        alert('Surname - '+key);
        break;
    case 'age':
        alert('Age - '+key);
        break;
    case 'sex':
        alert('Sex -'+key);
        break;
    case 'fathername':
        alert('Fathername - '+key);
        break;
}}

//fullName
function fan_fullname(obj) {
    if(('name'in obj)&&('surname' in obj)&&('fathername' in obj))
    {
        obj.fullname = true;
    }
}

//serialize
var strJSON = JSON.stringify(persons);
alert(strJSON);

//deserialize
var eventJSON = JSON.parse(strJSON);
persons.eventJSON = true;

