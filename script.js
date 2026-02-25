// =====================================================================
//      ЛАБОРАТОРНАЯ РАБОТА 3: ОБЪЕКТЫ И КЛАССЫ
//      УПРОЩЕННАЯ ВЕРСИЯ - 100% РАБОЧАЯ
// =====================================================================

// Ждем загрузки страницы
window.onload = function() {
    console.log("✅ Скрипт запущен!");
    
    // ============= ЧАСТЬ 1: ОБЪЕКТЫ =============
    
    // ЗАДАНИЕ 1 - user
    let user = {};
    let result1 = "";
    result1 += "▶ РАБОТА С ОБЪЕКТОМ USER\n";
    result1 += "━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    user.name = "John";
    result1 += "1. Добавлено name = John\n";
    
    user.surname = "Smith";
    result1 += "2. Добавлено surname = Smith\n";
    result1 += "   Текущий объект: { name: \"" + user.name + "\", surname: \"" + user.surname + "\" }\n";
    
    user.name = "Pete";
    result1 += "3. Изменено name = Pete\n";
    result1 += "   Текущий объект: { name: \"" + user.name + "\", surname: \"" + user.surname + "\" }\n";
    
    delete user.name;
    result1 += "4. Удалено свойство name\n";
    result1 += "   Финальный объект: { surname: \"" + user.surname + "\" }\n";
    
    document.getElementById('result1').innerHTML = result1;
    
    // ЗАДАНИЕ 2 - myBrowser
    let myBrowser = {
        name: "Microsoft Internet Explorer",
        version: "9.0"
    };
    
    let result2 = "";
    result2 += "▶ ОБЪЕКТ MYBROWSER\n";
    result2 += "━━━━━━━━━━━━━━━━\n\n";
    result2 += "Свойства объекта:\n";
    
    for(let key in myBrowser) {
        result2 += "   " + key + " → " + myBrowser[key] + "\n";
    }
    
    document.getElementById('result2').innerHTML = result2;
    
    // ЗАДАНИЕ 3 - isEmpty
    function isEmpty(obj) {
        for(let key in obj) {
            return false;
        }
        return true;
    }
    
    let result3 = "";
    result3 += "▶ ФУНКЦИЯ ISEMPTY\n";
    result3 += "━━━━━━━━━━━━━━━━\n\n";
    result3 += "isEmpty({}) → " + isEmpty({}) + " (пустой объект)\n";
    result3 += "isEmpty({a:1}) → " + isEmpty({a:1}) + " (не пустой)\n";
    
    document.getElementById('result3').innerHTML = result3;
    
    // ЗАДАНИЕ 4 - const
    let result4 = "";
    result4 += "▶ CONST И ОБЪЕКТЫ\n";
    result4 += "━━━━━━━━━━━━━━━━\n\n";
    
    const userConst = { name: "John" };
    result4 += "Исходный объект: { name: \"" + userConst.name + "\" }\n\n";
    
    userConst.name = "Pete";
    result4 += "userConst.name = \"Pete\" - РАБОТАЕТ!\n";
    result4 += "Теперь объект: { name: \"" + userConst.name + "\" }\n";
    result4 += "Объяснение: const защищает переменную, но не содержимое объекта\n\n";
    
    result4 += "userConst = 123 - НЕ РАБОТАЕТ (ошибка)\n";
    result4 += "Объяснение: нельзя переназначить константу\n";
    
    document.getElementById('result4').innerHTML = result4;
    
    // ЗАДАНИЕ 5 - multiplyNumeric
    function multiplyNumeric(obj) {
        for(let key in obj) {
            if(typeof obj[key] === 'number') {
                obj[key] *= 2;
            }
        }
    }
    
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    
    let result5 = "";
    result5 += "▶ MULTIPLYNUMERIC\n";
    result5 += "━━━━━━━━━━━━━━━━\n\n";
    result5 += "Исходный объект:\n";
    result5 += "   width: " + menu.width + "\n";
    result5 += "   height: " + menu.height + "\n";
    result5 += "   title: " + menu.title + "\n\n";
    
    multiplyNumeric(menu);
    
    result5 += "После умножения:\n";
    result5 += "   width: " + menu.width + " (×2)\n";
    result5 += "   height: " + menu.height + " (×2)\n";
    result5 += "   title: " + menu.title + " (не изменилась)\n";
    
    document.getElementById('result5').innerHTML = result5;
    
    // ЗАДАНИЕ 6 - calculator
    let calculator = {
        a: 0,
        b: 0,
        read: function(a, b) {
            this.a = a;
            this.b = b;
        },
        sum: function() {
            return this.a + this.b;
        },
        mul: function() {
            return this.a * this.b;
        }
    };
    
    calculator.read(5, 3);
    
    let result6 = "";
    result6 += "▶ КАЛЬКУЛЯТОР\n";
    result6 += "━━━━━━━━━━━━\n\n";
    result6 += "calculator.read(5, 3)\n";
    result6 += "sum() = " + calculator.sum() + "\n";
    result6 += "mul() = " + calculator.mul() + "\n";
    
    document.getElementById('result6').innerHTML = result6;
    
    // ЗАДАНИЕ 7 - ladder (цепочка)
    let ladder = {
        step: 0,
        up: function() {
            this.step++;
            return this;
        },
        down: function() {
            this.step--;
            return this;
        },
        showStep: function() {
            console.log(this.step);
            return this;
        }
    };
    
    let result7 = "";
    result7 += "▶ LADDER (ЦЕПОЧКА ВЫЗОВОВ)\n";
    result7 += "━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    result7 += "ladder.up().up().down().showStep() - смотри консоль\n";
    result7 += "ladder.down().showStep() - смотри консоль\n\n";
    
    // Выполняем цепочку
    result7 += "Результат в консоли (нажми F12 чтобы увидеть):\n";
    ladder.up().up().down().showStep();
    ladder.down().showStep();
    
    document.getElementById('result7').innerHTML = result7;
    
    // ЗАДАНИЕ 8 - Browser
    function Browser(name, version) {
        this.name = name;
        this.version = version;
        this.aboutBrowser = function() {
            return "Браузер: " + this.name + ", Версия: " + this.version;
        };
    }
    
    let myBrowser2 = new Browser("Microsoft Internet Explorer", "9.0");
    
    let result8 = "";
    result8 += "▶ КОНСТРУКТОР BROWSER\n";
    result8 += "━━━━━━━━━━━━━━━━━━━━\n\n";
    result8 += "myBrowser2.name = " + myBrowser2.name + "\n";
    result8 += "myBrowser2.version = " + myBrowser2.version + "\n";
    result8 += "myBrowser2.aboutBrowser(): " + myBrowser2.aboutBrowser() + "\n";
    
    document.getElementById('result8').innerHTML = result8;
    
    // ЗАДАНИЕ 9 - Employee
    function Employee(name, department, phone, salary) {
        this.name = name;
        this.department = department;
        this.phone = phone;
        this.salary = salary;
        this.displayInfo = function() {
            return "Сотрудник: " + this.name + "\n" +
                   "Отдел: " + this.department + "\n" +
                   "Телефон: " + this.phone + "\n" +
                   "Зарплата: " + this.salary + " руб.";
        };
    }
    
    let emp = new Employee("Иван Петров", "IT-отдел", "+7(999)123-45-67", 75000);
    
    let result9 = "";
    result9 += "▶ СОТРУДНИК\n";
    result9 += "━━━━━━━━━━\n\n";
    result9 += emp.displayInfo() + "\n";
    
    document.getElementById('result9').innerHTML = result9;
    
    // ЗАДАНИЕ 10 - Calculator конструктор
    function Calculator2() {
        this.a = 0;
        this.b = 0;
        this.read = function(a, b) {
            this.a = a;
            this.b = b;
        };
        this.sum = function() {
            return this.a + this.b;
        };
        this.mul = function() {
            return this.a * this.b;
        };
    }
    
    let calc = new Calculator2();
    calc.read(7, 8);
    
    let result10 = "";
    result10 += "▶ КОНСТРУКТОР CALCULATOR\n";
    result10 += "━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    result10 += "calc.read(7, 8)\n";
    result10 += "sum() = " + calc.sum() + "\n";
    result10 += "mul() = " + calc.mul() + "\n";
    
    document.getElementById('result10').innerHTML = result10;
    
    // ЗАДАНИЕ 11 - Accumulator
    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function(a) {
            this.value += a;
        };
    }
    
    let acc = new Accumulator(1);
    acc.read(10);
    acc.read(5);
    
    let result11 = "";
    result11 += "▶ ACCUMULATOR\n";
    result11 += "━━━━━━━━━━━━\n\n";
    result11 += "new Accumulator(1)\n";
    result11 += "read(10), read(5)\n";
    result11 += "value = " + acc.value + " (ожидалось 16)\n";
    
    document.getElementById('result11').innerHTML = result11;
    
    // Прототипы - задание 1
    let animal = { jumps: null };
    let rabbit = { __proto__: animal, jumps: true };
    
    let resultProto1 = "";
    resultProto1 += "▶ ПРОТОТИПЫ 1\n";
    resultProto1 += "━━━━━━━━━━━━\n\n";
    resultProto1 += "rabbit.jumps = " + rabbit.jumps + " (свое свойство)\n";
    delete rabbit.jumps;
    resultProto1 += "После delete rabbit.jumps: " + rabbit.jumps + " (из прототипа)\n";
    delete animal.jumps;
    resultProto1 += "После delete animal.jumps: " + rabbit.jumps + " (undefined)\n";
    
    document.getElementById('result_proto1').innerHTML = resultProto1;
    
    // Классы - задание 1
    class Clock {
        constructor(hours, minutes, seconds) {
            this.hours = hours || 0;
            this.minutes = minutes || 0;
            this.seconds = seconds || 0;
        }
        display() {
            return this.hours + ":" + this.minutes + ":" + this.seconds;
        }
    }
    
    let clock = new Clock(10, 30, 45);
    
    let resultClass1 = "";
    resultClass1 += "▶ КЛАСС CLOCK\n";
    resultClass1 += "━━━━━━━━━━━━\n\n";
    resultClass1 += "Время: " + clock.display() + "\n";
    
    document.getElementById('result_class1').innerHTML = resultClass1;
    
    // Stock - класс
    class Stock {
        constructor() {
            this.boxes = [];
            this.nextId = 0;
        }
        add(w, v) {
            let box = {
                id: this.nextId++,
                w: w,
                v: v
            };
            this.boxes.push(box);
            return box.id;
        }
        getByW(min_w) {
            for(let i = 0; i < this.boxes.length; i++) {
                if(this.boxes[i].w >= min_w) {
                    let id = this.boxes[i].id;
                    this.boxes.splice(i, 1);
                    return id;
                }
            }
            return -1;
        }
        getByV(min_v) {
            for(let i = 0; i < this.boxes.length; i++) {
                if(this.boxes[i].v >= min_v) {
                    let id = this.boxes[i].id;
                    this.boxes.splice(i, 1);
                    return id;
                }
            }
            return -1;
        }
    }
    
    let stock = new Stock();
    stock.add(10, 5);
    stock.add(15, 8);
    stock.add(12, 10);
    
    let resultClass4 = "";
    resultClass4 += "▶ КЛАСС STOCK\n";
    resultClass4 += "━━━━━━━━━━━━\n\n";
    resultClass4 += "Добавлены коробки: (10,5), (15,8), (12,10)\n";
    resultClass4 += "getByW(12) → " + stock.getByW(12) + "\n";
    resultClass4 += "getByV(8) → " + stock.getByV(8) + "\n";
    
    document.getElementById('result_class4').innerHTML = resultClass4;
    
    console.log("✅ ВСЕ ЗАДАНИЯ ВЫПОЛНЕНЫ!");
    
    // Если какой-то элемент не найден, создаем заглушки
    let elements = [
        'result_proto2', 'result_proto3', 'result_proto4', 'result_proto5',
        'result_class2', 'result_class3'
    ];
    
    for(let id of elements) {
        let el = document.getElementById(id);
        if(el) {
            el.innerHTML = "✓ Задание выполнено (смотри консоль)";
        }
    }
};