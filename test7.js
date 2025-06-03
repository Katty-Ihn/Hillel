var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
var pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
console.log(arr + pattern.test(arr));

for (var i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i].email)) {
        console.log(arr[i].email);
    }
}

var text = "Wonderful Joyful Happiness Time Task Apple";

var pattern = /\b[^Aa\s]{6,}/g;
var matches = text.match(pattern);
console.log(matches);