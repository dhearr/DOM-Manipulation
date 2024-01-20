// =====================================================================================================
// // DOM MANIPULATION
// // appenChild()
// // Membuat Element baru dan menyimpan nya di ahir parent element
// Membuat Element baru dan membuat isi untuk Element baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("paragraf baru");
// Menyatukan Element baru dan isi Element baru
pBaru.appendChild(textPBaru);

// Menyeleksi tempat yg akan di isikan element baru
const sectionA = document.getElementById("a");
// Menyimpan element baru ke tempat yang sudah di seleksi
sectionA.appendChild(pBaru);

// // insertBefore()
// //  Membuat element baru dan menyisipkan element di tempat yang kita inginkan
// Membuat Element baru dan membuat isi untuk Element baru
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("item baru");
// Menyatukan Element baru dan isi Element baru
liBaru.appendChild(textLiBaru);

// Menyeleksi tempat yg akan di isikan element baru
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
// Menyimpan element baru ke tempat yang sudah di seleksi
ul.insertBefore(liBaru, li2);

// =====================================================================================================
