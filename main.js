function conflev() {
    var lev = Number(document.getElementById("lev").value);

    switch (lev) {
        case 1:
            document.getElementById("mode").innerHTML = "Level: Easy Mode";
            break;

        case 2:
            document.getElementById("mode").innerHTML = "Level: Normal Mode";
            break;

        case 3:
            document.getElementById("mode").innerHTML = "Level: Difficult Mode";
            break;

        default:
            alert("Invalid Level! Please enter 1, 2, or 3.");
    }
}