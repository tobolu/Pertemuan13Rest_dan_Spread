// Rest dan Spread Operator

// Spread Operator
// contoh variable array
// Memecah array
// duplicat array
//const angka = [1, 2, 3, 4, 5];
// const angka2 = [...angka]

// angka[0] = 10;
// console.log(angka);
// console.log(...angka2);
// // console.log(angka);
// // console.log(...angka);

//gabungkan array
// const angka = [1, 2, 3, 4, 5];
// const angka2 = [6, 7, 8, 9, 10];
// const angka3 = [12, 13];

// const gabung5 = [...angka, ...angka2, ...angka3];
// console.log(gabung5);

// const gabung6 = [...angka, ...angka2, ...angka3];
// console.log(gabung6);

//Menambah Properti Objek 
const orang = {
      nama: "Jhon",
      umur: 33,
}

orang = {...orang, pekerjaan: "Gurun", pendidikan: "S2"};
console.log(orang);