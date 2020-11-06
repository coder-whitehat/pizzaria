var menu=["Butter Chicken Pizza",
"Chicken Tandoori Pizza",
"Panneer Makhani Pizza",
"Peperoni Pizza",
"Veggie Extravagenza"];
function Addname() {
    var htmldata="";
    var new_item=document.getElementById("recommendBox").value;
     menu.push(new_item);
     menu.sort();
     
     for (i=0;i<menu.length;i++) {
         htmldata=htmldata + "<img src=download(2).jpg class=pizza>" + "<h3>" + menu[i] + "</h3>";
         
       
     }
     document.getElementById("pizzas").innerHTML=htmldata;
    

}