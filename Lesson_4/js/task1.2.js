/*
    1.2
    (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
    видео -> 3 примеры наследования -> механика наследования),
    а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
    типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
    б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
    помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
    свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
    Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
    highlighted значение true.
*/

"use strict"

//                                               ФОРМАТ es5
//                                               a)
function Post_es5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post_es5.prototype.show = function () {
    alert(`author: ${this.author}\ntext: ${this.text}\ndate: ${this.date}`);
}

Post_es5.prototype.edit = function (text) {
    this.text = text;
}

let obj1 = new Post_es5("Mike", "first_text", "08.09.2021");
// obj1.show();
// obj1.edit("second_text");
// obj1.show();


//                                               б)
function AttachedPost_es5(author, text, date) {
    Post_es5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost_es5.prototype = Object.create(Post_es5.prototype);
AttachedPost_es5.prototype.constructor = AttachedPost_es5;

AttachedPost_es5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

AttachedPost_es5.prototype.show = function () {
    alert(`author: ${this.author}\ntext: ${this.text}\ndate: ${this.date}\nhighlighted: ${this.highlighted}`);
}

let obj2 = new AttachedPost_es5("Mike", "third_text", "08.09.2021");
// obj2.show();
// obj2.edit("fourth_text");
// obj2.makeTextHighlighted();
// obj2.show();



//                                               ФОРМАТ es6
//                                               a)
class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    show() {
        alert(`author: ${this.author}\ntext: ${this.text}\ndate: ${this.date}`);
    }

    edit(text) {
        this.text = text;
    }
}

let obj3 = new Post_es6("Mike", "first_text", "08.09.2021");
obj3.show();
obj3.edit("second_text");
obj3.show();

//                                               б)
class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    show() {
        alert(`author: ${this.author}\ntext: ${this.text}\ndate: ${this.date}\nhighlighted: ${this.highlighted}`);
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj4 = new AttachedPost_es6("Mike", "third_text", "08.09.2021");
obj4.show();
obj4.edit("fourth_text");
obj4.makeTextHighlighted();
obj4.show();