function displayAndroidVersions() {
    document.getElementById("dropdown-container").classList.toggle("dropdown-container-show");
}

window.onclick = function(event) {
    if (!event.target.matches('#version-selector')) {
        let dropdowns = document.getElementsByClassName("dropdown-container");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropdown-container-show')) {
            openDropdown.classList.remove('dropdown-container-show');
            }
        }
    }
}

let ua = navigator.userAgent;
let androidversion;

window.onload = function() {
    if (ua.indexOf("Android") >= 0 ) {
        androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)).toFixed(1);
        if (androidversion >= 5.0) {
            document.getElementById("android-version").innerHTML = androidversion;

            if (androidversion >= 5.0 && androidversion < 6.0){
                document.getElementById("recommended-files").setAttribute("href", "Files/android_versions/v5.zip");
            } 

            if (androidversion >= 6.0 && androidversion < 7.0){
                document.getElementById("recommended-files").setAttribute("href", "Files/android_versions/v6.zip");
            }

            if (androidversion >= 7.0 && androidversion < 8.0){
                document.getElementById("recommended-files").setAttribute("href", "Files/android_versions/v7.zip");
            }

            if (androidversion >= 8.0 && androidversion < 9.0){
                document.getElementById("recommended-files").setAttribute("href", "Files/android_versions/v8.zip");
            }

            if (androidversion >= 9.0 && androidversion < 10.0){
                document.getElementById("recommended-files").setAttribute("href", "Files/android_versions/v9.zip");
            }
            
            if (androidversion >= 10.0){
                document.getElementById("recommended-files").setAttribute("href", "Files/android_versions/v10.zip");
            }

        } else {
            document.getElementById("android-version").innerHTML = "Null";
        }
    } else {
        document.getElementById("android-version").innerHTML = "Not Android";
    }
    return androidversion;
}

function searchFile() {
    let i, a, txtValue;
    let input = document.getElementById('fm-search');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('launchers-ul');
    let li = document.getElementsByTagName('li');

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