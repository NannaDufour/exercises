/* opgave 1 */
console.log(Math.ceil(Math.random() * 100));

/* opgaave 2 */
const randomnumber = Math.ceil(Math.random() * 100);

document.querySelector("#randomnumber").textContent = randomnumber;

/* opgave 3 optimering af ovenstående */
const randomnumber2 = Math.ceil(Math.random() * 50);

document.querySelector("#randomnumber2").textContent = randomnumber2;
