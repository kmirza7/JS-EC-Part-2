//selections
let checkAllDiv = document.getElementById("check-all")
let uncheckAllDiv = document.getElementById("uncheck-all")

let checkAll = document.getElementById("checkboxes-control1")
let uncheckAll = document.getElementById("checkboxes-control2")

let allCheckboxes = document.getElementsByClassName("checkboxes")

//event listeners
checkAll.addEventListener("click",function(){

    //checking all of the checkboxes when the check all option is selected
    for(let i =0; i < allCheckboxes.length; i++){
        allCheckboxes[i].checked = true 
    }
    checkAll.checked = false
    //show the uncheck all button and hide the check all button
    checkAllDiv.style.display = "none"
    uncheckAllDiv.style.display = "block"
})

uncheckAll.addEventListener("click",function(){

    //unchecking all of the options after the uncheck all button is selected
    for(let i =0; i < allCheckboxes.length; i++){
        allCheckboxes[i].checked = false 
    }
    uncheckAll.checked = false
    //show the check all button and hide the uncheck all button
    checkAllDiv.style.display = "block"
    uncheckAllDiv.style.display = "none"
})