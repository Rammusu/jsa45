// get user list (max: 10)
async function get_user(limit) {
  // goi den du lieu trong API
  const response = await fetch("https://fakestoreapi.com/users?limit=" + limit)
  // todo
}

function renderUserList(list, container) {
  list.forEach((element) => {
    // create row element for list
    const row = document.createElement("tr");
    // create properties elements
    const idCell = document.createElement("th"); // for id
    idCell.setAttribute("scope", "row"); // add a strange attribute
    const id = document.createTextNode(element.id);
    idCell.appendChild(id);

    const cell1 = document.createElement("td");
    const email = document.createTextNode(element.email);
    cell1.appendChild(email);

    const cell2 = document.createElement("td");
    const name = document.createTextNode(
      element.name.firstname + " " + element.name.lastname
    );
    cell2.appendChild(name);
    cell2.style.textTransform = "uppercase";

    const cell3 = document.createElement("td");
    const address = document.createTextNode(element.phone);
    cell3.appendChild(address);

    // add cells in row
    row.appendChild(idCell);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    // add in table body
    container.appendChild(row);
  });
}

if (!localStorage.getItem("users")) {
  // neu khong co du lieu -> add tu api
  // todo
}

// todo


function findUserByName(){ 
  const searchKey = "";
  if (searchKey.length) {
    // neu co ky tu moi bat dau tim
    const search_data = JSON.parse(localstorage.getItem("users"))?.filter(
      (u) =>
      u.name.firstname.toLowerCase().includes(searchKey) ||
      u.name.lastname.toLowerCase().includes(searchKey)
    );
      // render data cho man hinh
      document.querySelector("#user-list tbody").innerHTML = ` `;
      renderUserList(search_data, document.querySelector("#user-list tbody"));
    
    
    
  }
}