let taskDOM = document.getElementById("task")
let addDOM = document.getElementById("liveToastBtn")
let listDOM = document.getElementById("list")

// To-do işlemlerine tik atma
var list = document.querySelector('ul')
list.addEventListener('click', function(check) {
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked')
  }
})
// To-do işlemlerini silme (var olan)
var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement.remove()
    }
}
// To-do işlemi ekleme
addDOM.addEventListener("click", () => {
    if (taskDOM.value) {
        const listItem = document.createElement("li")
        const deleteItem = document.createElement("a")
        deleteItem.classList.add("close")
        deleteItem.innerHTML = "X"
        listItem.innerHTML = taskDOM.value
        listItem.append(deleteItem)
        listDOM.append(listItem)
        taskDOM.value = ""


        // To-do işlemlerini silme (yeni eklenen)
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement.remove()

            }
        }
        $(".success").toast("show");
    } else {
        $(".error").toast("show");

    }
})





