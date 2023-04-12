// 1- strore many values in a variable using array
var my_array = ["habibou", 1, "Moussa", "Daouda"];

// 2) Nest arrays within annother array
var multi_arry = [
  ["Habibou", 23],
  ["Moussa"],
  34,
  45,
  [1, 2, 3, ["Habibou", 23]],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

//3)Access Array Data with Indexes
const data = my_array[0];
//4) Modify Array Data With Indexes
my_array[0] = "Adamu";

// 5) Access Multi-Dimensional Arrays With Indexes
multi_arry[3][3][0];
