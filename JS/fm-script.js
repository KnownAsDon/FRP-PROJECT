function searchFile() {
    let i, a, txtValue;
    let input = document.getElementById('fm-search');
    let filter = input.value.toUpperCase();
    let ul = document.getElementsByClassName('fm-item');
    let li = document.getElementsByClassName('fm-item');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
}