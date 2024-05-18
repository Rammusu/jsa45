// //Tao data
// var obj1 = { 
//     name:'skibidi toilet',
//     age : 1000,
// }
// var obj2 = { 
//     name:'skibidi toile',
//     age: 100,
// }
// var obj3 = { 
//     name:'skibidi toil',
//     age: 10,
// }
// var obj4 = { 
//     name:'skibidi toi',
//     age: 1,
// }
// var obj5 = { 
//     name:'skibidi to',
//     age: 0,
// }
// const data_list = [obj1 , obj2 , obj3 , obj4 , obj5]
// function getRequest() {
//     const request = prompt("nhap gi cung duoc...")
//     return request.trim().toLowerCase();

// }

// function searchDatabyReq(req) { 
//     let result_list = [];
//     data_list.map((object) => {
//     for (const key in object) {
//         if (object[key].toString().toLowerCase().indexOf(req) != -1) {
//             result_list.push(object);
//         }
//      }
//     });
// return result_list;
//  }
// function createHTMLCode(lis) {
//     const list_container = document.querySelector("#data-list");
//     lis?.forEach(element => {
//         list_container.innerHTML += `<li>${JSON.stringify(element)}</li>`;
        
//     });
// }
// createHTMLCode(searchDatabyReq(getRequest()));
// Tien to prefix - hau to posfix
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm
// let a = 10;
// console.log(++a);
// console.log(a++);

// // chac chan co it nhat mot lan thuc hien lenh trong do
// do { 

// } while( i < 5);
// console.log(i);

let userInput = "";
 while (!userInput) {
 userInput = Number.parseInt(prompt("nhap nhap gi cung duoc..."));
    if(Number.isInteger(userInput) && Number.parseInt(userInput) > 0 ) {
        document.write(userInput)
    break;
 } else {
    userInput = "";

 }      
}