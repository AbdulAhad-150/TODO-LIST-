var input = document.getElementById("inp");
var list = document.getElementById("lists");

function adding() {
    if (input.value ==='') {
        alert("Write some thing!")
    } else {
        
        // li banai phir

        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);

        // phir ma ny btn banay(delete wala)

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        li.appendChild(deleteBtn);

        // phir input ko clear kiya matlab saaf kiya

        input.value= "";

        li.querySelector("button").addEventListener("click",remove)
        function remove() {
            li.remove()
        } 

        let editbtn = document.createElement("edit");
        editbtn.innerHTML = "Edit";
        li.appendChild(editbtn);

        
        li.querySelector("edit").addEventListener("click",editFunction)
        function editFunction() {
            let text = prompt("Editing Text")
            li.innerHTML=text.replace()
        }  
    }
  }
 