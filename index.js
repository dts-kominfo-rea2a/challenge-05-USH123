const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = function (arrayNama, sortingLogic) {
  let sortedArrayWithNumber = [];
  const sortedArray = sortingLogic(arrayNama);
  for (let index = 0; index < sortedArray.length; index++) {
    sortedArrayWithNumber[index] = `${index + 1}. ${sortedArray[index]}`;
  }
  return sortedArrayWithNumber;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = function (arrayNama) {
  const sortedArrayNama = arrayNama.sort();
  return sortedArrayNama;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = function (arrayNama) {
  const reverseSortedArrayNama = arrayNama.sort().reverse();
  return reverseSortedArrayNama;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
