const prompt = require('prompt-sync')();
function Info() {
    let name = prompt("Nhap ten: ");
    let age = prompt("Nhap tuoi: ");
    console.log("Ten: " + name + ", " + age + " tuoi");
}
Info();

function calculateAge() {
    let currentYear = new Date().getFullYear();
    let birthYear = prompt("Nhap nam sinh: ");
    let age = currentYear - birthYear;
    console.log("Tuoi cua ban la: " + age);
}
calculateAge();
