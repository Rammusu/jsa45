
function CheckBrowser() {
if ('localStorage' in window && window['localStorage'] !== null) {
return true;
}else{
return false;
}   
}
//Dynamically populate the table with shopping list items
// Step below can be done via PHP and AJAX, too.
function doshowAll() {
if (CheckBrowser()) {
var key = "";
var list = "str>sth>Item</th>sth>Values/th>s/tr>\n";
var i= 0;
//For a more advanced feature, you can set a cap on max items in the cart.
for (i=0; i <= localstorage.length-1; i++) {
key = localStorage.key(i);
list += "<trostd>" + key + "</td>\n<td>"
localStorage.getItem(key) + "</td></tr>\n";
}
//If no item exists in the cart
if (list == "<tr><th>Item</th><th>values/th></tr>n") {
list += "<tr>std><i>empty</i>s/td>\n<td>si>empty</i></td></tr>\n";
}
//Bind the data to HTML table.
//You can use jQuery, too
document.getElementById('list').innerHTML = list;
} else {    
alert('Cannot save shopping list as your browser does not support HTML 5');
}
}
localStorage.setItem('propertyName','value');
localStorage.getItem('propertyName');
localStorage.removeItem('propertyName');
function SaveItem() {
    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doshowAll();
}
//Change an existing key-value in HTML5 storage.
function ModifyItem() {
    var namel = document.forms.Shoppinglist.name.value;
    var datal = document.forms.ShoppingList.data.value;
    //check if namel is already exists
    //Check if key exists.
    if (localStorage.getItem(name1) !=null)
    {
    //update
    localStorage.setItem(namel,datal);
    document.forms.ShoppingList.data.value = localStorage.getItem(namel);
    }
    doshowAll();
}
function RemoveItem( )
{
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=localStorage.removeItem(name);
doshowAll();
}
function ClearALL() {
localStorage.clear();
doShowAZL();
}