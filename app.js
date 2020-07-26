var list=document.getElementById("list");
// list
function addTodo(){
    var item= document.getElementById("todo");
    var li=document.createElement("li")
    var litext=document.createTextNode(item.value)
    li.appendChild(litext)
    if ( item.value == ""){
        alert("Enter a value");
        return false;
    }
    
    list.appendChild(li)
    item.value=" ";


    //delete button
    var delbtn=document.createElement("button")
    var deltext=document.createTextNode("")
    delbtn.setAttribute("class","fa fa-trash")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    // create edit button
    var edit=document.createElement('button');
    var edittext=document.createTextNode('');
    edit.appendChild(edittext)
    li.appendChild(edit)
    edit.setAttribute("class","fa fa-edit")
    edit.setAttribute("onclick","editItem(this)")
  

}

function deleteItem(e){

e.parentNode.remove()

}
function deleteAll(){
list.innerHTML=" "   
}
function editItem(e){
    var value1=e.parentNode.firstChild.nodeValue;
    var editvalue=prompt("Enter edit value",value1)
    e.parentNode.firstChild.nodeValue=editvalue;

}
