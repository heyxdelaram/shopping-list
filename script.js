/********Shopping list********/

//CACHING SELECTORS
var input = document.getElementById("item");
var button = document.getElementById("add");
var ul = document.getElementsByTagName("ul")[0];

//return the length of input
//to check if it's not empty in other funcs
function inputLength(){
    return input.value.length;
}

//creating a list node to add to the ul
//once the input is entered
function createListNode(){
    var liNode = document.createElement("li");
    var textNode = document.createTextNode(input.value + "   ");
    liNode.setAttribute("id", input.value);
    liNode.appendChild(textNode);
    ul.appendChild(liNode);

    //resets the input once it's added to the list
    input.value = "";
}

//creates a button that appears whenever the user clicks on the list item
//to permanently remove the item
function createDeleteBtn(){
    var delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    return delbtn;
}

//add item after the "Add" button is clicked
function addAfterClick(){
    if(inputLength() > 0){
        createListNode();
    }
}

//add item to list after the enter key is pressed
//checks that the input isn't empty and the "Enter" key is pressed
function addAfterEnter(event){
    if(inputLength() > 0 && event.key === "Enter"){
        createListNode();
    }
}

//this variable lets us know about the state of the list item(whether it's crossed or not)
//to know when to add the delete button
var onToggle;


//to crossed out or evantually remove the item
function doneAfterClick(id){
    //gets the id of the li so it can be used to select it
    var id = id.target.innerHTML;
    onToggle = document.querySelector("#"+id).classList.toggle("done");
    if(onToggle){
        delbtn = createDeleteBtn();
        delbtn.appendChild(document.createTextNode("Delete"));
        var li = document.getElementById(id);
        li.appendChild(delbtn);

        delbtn.addEventListener("click", function(){
            this.parentElement.remove();
        })
    }else{
        this.getElementsByClassName("delete")[0].remove();
        document.querySelector("#"+id).style.textDecoration="none";
    }
}

//event listeners
button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterEnter);
ul.addEventListener("click", doneAfterClick);
