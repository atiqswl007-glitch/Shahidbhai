function showDetails(serviceName) {
    alert("You clicked on " + serviceName + ".\nMore details page can be added here.");
}

function scrollToServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}
