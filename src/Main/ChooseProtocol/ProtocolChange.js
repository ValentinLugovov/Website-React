let protocols = document.querySelector(".protocolName");
let val1 = document.querySelector("#val1");
let main = document.querySelector(".main");
let sterilityAssessment = document.querySelector(".tableName");

// Клонирование таблицы и изменение ее id
// let table = sterilityAssessment.cloneNode(true);
// table.id = "table123";
// main.appendChild(table);
// let d = document.querySelector("#table123");

// protocols.addEventListener("change", function () {
//   if (protocols.value == "val1") {
//     sterilityAssessment.style.display = "block";
//   } else {
//     sterilityAssessment.style.display = "none";
//   }
//   if (protocols.value == "val2") {
//     d.style.backgroundColor = "red";
//     d.style.display = "block";
//   } else {
//     d.style.display = "none";
//   }
// });

export function func() {
  if (protocols.value == "val1") {
    sterilityAssessment.style.display = "block";
  } else {
    sterilityAssessment.style.display = "none";
  }
  console.log(sterilityAssessment);
  // if (protocols.value == "val2") {
  //   d.style.backgroundColor = "red";
  //   d.style.display = "block";
  // } else {
  //   d.style.display = "none";
  // }
}
