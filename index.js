const prompt = require('prompt-sync')();
const alert = require('alert');
function Info() {
    let name = prompt("Nhap ten: ");
    let age = prompt("Nhap tuoi: ");
    console.log("Ten: " + name + ", " + age + " tuoi");
}
Info();