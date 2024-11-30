var bookmarkName=document.getElementById("bookmarkName");
var bookmarkURL=document.getElementById("bookmarkURL");
var booklist=[];
if(localStorage.getItem("books")!=null){
    booklist=JSON.parse(localStorage.getItem("books"));
    displaybook(booklist);
}
// !!addbook
function addbook(){
if(validation(bookmarkName)==true&&validation(bookmarkURL)==true){
    books={
        name:bookmarkName.value,
        url:bookmarkURL.value
    }
    booklist.push(books);
    localStorage.setItem("books",JSON.stringify(booklist))
    displaybook(booklist);
    clear();
    console.log(booklist)

}
}
// !!displaybook
function displaybook(list){
    var carton=``;
    for(var i=0;i<booklist.length;i++){
        carton+=`
        <thead>
            <tr>
            <th class="text-capitalize">index</th>
            <th class="text-capitalize">Website Name</th>
            <th class="text-capitalize">Visit</th>
            <th class="text-capitalize">Delete</th>
            </tr>
        </thead>
        <tbody id="tableContent">
            <tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>              
            <td>
                <button class="btn  btn-success" onclick="openURL('${list[i].url}')" >
                <i class="fa-solid fa-eye pe-2"></i>Visit
                </button>
            </td>
            <td>
                <button class="btn btn-danger pe-2"onclick="deletbook(${i})" >
                <i class="fa-solid fa-trash-can"></i>
                Delete
                </button>
            </td>
        </tr>
            </tbody>`
    }
    document.getElementById("getdata").innerHTML=carton
}
// !!deletbook
function deletbook(index){
    booklist.splice(index,1);
    localStorage.setItem("books",JSON.stringify(booklist))
    displaybook(booklist);
    
}
// !!clear
function clear(){
    bookmarkName.value=null
    bookmarkURL.value=null
}
// !!openURL
function openURL(url){
    window.open(url, '_blank');
}
// !!validation
function validation(elemet){
    var regax={
        bookmarkName:/^[A-Za-z 0-9]{3,12}$/,
        bookmarkURL:/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/gm,
    }
    if(regax[elemet.id].test(elemet.value)==true){

        elemet.classList.add("is-valid")
        elemet.classList.remove("is-invalid")
        elemet.nextElementSibling.classList.add("d-none")
        return true
    }
    else{
        elemet.classList.remove("is-valid")
        elemet.classList.add("is-invalid")
        elemet.nextElementSibling.classList.remove("d-none")
        return false
    }
}