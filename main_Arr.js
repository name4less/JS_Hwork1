/* # задание: Ассоциативные массивы

## fullName
Сделайте цикл, которых добавляет поле `fullName` в каждый объект, содержащий ФИО. Учтите, что поле `fathername` не является обязательным.

## deserialize
Создайте ассоциативный массив с одной персоной из `JSON`-строки. Добавьте её в `persons`

## HTML
Сделайте цикл, который выводит весь массив `persons`, в форме HTML-таблицы. Имя и Фамилия - колонки.

## HTML optional fields
Сделайте цикл, который выводит весь массив `persons`, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии.

## HTML tr color
Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга `tr`.

## HTML th optional
Переработайте вывод `persons` в HTML с поиском всех возможных колонок во всех записях, выводом названий колонок в заголовок HTML-таблицы.
Для решения этой задачи вначале узнайте множество полей (ключей) во всех записях, выведите HTML-заголовок используя тэги `<th>`, а потом 
выводите все 
записи.

## jQ HTML th optional

Сделайте предыдущее задание, используя jQuery

## jQ HTML th optional inputs

Сделайте предыдущее задание, используя jQuery с полями ввода для значение объектов. Используйте `input` разных типов в зависимости от типа 
данных значения поля.

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
Для начала сделайте конструктор для верхнего уровня (в примере - `table`). Потом с помощью копипасты сделайте то же самое с вложенным 
уровнем `nestedTags` (`tr`). 
Аналогично для уровня `td`.

Конструктор должен поддерживать вложенность до 3его уровня (как в примере). В результате работы конструктора из примера выше должен 
получиться следующий
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

Сделать предыдущее задание на черный пояс в упрощенном виде: не использовать четырехмерный массив для хранения истории, а использовать 
ассоциативный массив:
Например, если пользователь ввел `1212` за последние четыре хода, то мы ищем то, что было введено последний раз после такой 
последовательности:
```javascript
var history      = "1212"
var predictValue = predictArray[history] // в predictValue то, что ввел последний раз пользователь после нажатий 1212
var newValue     = prompt("введите 1 или 2","");
predictArray[history] = newValue         //сохраняем новый ввод
//сдвигаем историю */

var a = {
    name : true,
    surname : true,
    age : true
}

var b = {
    name : true,
    surname : true,
    sex : true
}

var c = {
    name : true,
    surname : true,
    city : true
}

//property check 
if ("age" in a) alert("This property is an object A - age:"+a.age);
if ("sex" in b) alert("This property is an object B - sex:"+b.sex);
if ("city" in c) alert("This property is an object C - city:"+c.city);

//normal array
var persons = [a, b, c];

var person = {
    a,
    b,
    c
}

for(let i=0; i<=persons.length-1; i++)
{
    console.log(persons[i]);
}

// for and if
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

//for and oblect.keys and console.log or alert
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

//cycle not equal name and surname
for(let key in persons)
{
    if((key!='name')&&(key!='surname'))
    {
        alert(key);
    }
}

//JSON string of 'persons''
var strJSON = JSON.stringify(persons);
alert(strJSON);

//object 'person' of JSON string
var eventJSON = JSON.parse(strJSON);
alert(eventJSON);

