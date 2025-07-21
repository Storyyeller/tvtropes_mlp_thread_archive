function toggleinline(e) {
    for (const child of e.getElementsByClassName('inlinefolder')) {
        if (child.style.display === "") {
            child.style.display = "none";
        } else {
            child.style.display = "";
        }
    }
}