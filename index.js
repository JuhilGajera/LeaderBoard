
var counter=0
function list() {
    var alert = document.getElementById("alert")
    alert.innerText=""
    const firstname=document.getElementById("fname").value
    const lastname=document.getElementById("lname").value
    var fullname=firstname+" "+lastname
    const score=document.getElementById("score").value
    const countryname=document.getElementById("cname").value
    if(firstname=="" || lastname=="" || score=="" || countryname==""){
        alert.innerText="All Fields Are Required"
    }else{
        const maincontainerlower=document.getElementById("mainlower")
        maincontainerlower.innerHTML+=`
        <div id="row${counter}" class="row">
            <div class="name">
                <h3>${fullname}</h3>
            </div>
            <div class="countryname">
                <h3>${countryname}</h3>
            </div>
            <div class="score">
                <h3 id="index${counter}">${score}</h3>
            </div>
            <div class="button">
                <button onclick="deletePlayer(${counter})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                <button onclick="plus(${counter})" >+5</button>
                <button onclick="minus(${counter})" >-5</button>
            </div>
        </div>`
        counter++
    }

    

}
function deletePlayer(counter) {
    const row=document.getElementById(`row${counter}`)
    row.remove()
}
function plus(counter) {
    const plus=document.getElementById(`index${counter}`)
    plus.innerText=+plus.innerText+5
}
function minus(counter) {
    const plus=document.getElementById(`index${counter}`)
    plus.innerText=+plus.innerText-5
}