filterObjects("all");

function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("proj");
    if (c=="all") c = "";
    for (i=0; i<x.length; i++){
        removeClass(x[i], "show");
        removeClass(x[i], "hide");
        if (x[i].className.indexOf(c) > -1) {
          addClass(x[i], "show");
        }
        else {
          x[i].className = x[i].className + (" hide")
        };
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("buttons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// function customFilterObjects(category) {
//   var x, i;
//   x = document.getElementsByClassName("proj");
//   console.log(x);
//   for (i=0; i<x.length; i++){
//     console.log();
//     categories = x[i].className.split(" ");
//     console.log(categories);
//     if (categories.indexOf(category) > -1){
//       console.log("true");
//     }
//   }
// }
  