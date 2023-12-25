document.addEventListener("DOMContentLoaded", function () {
    const signoutLink = document.getElementById("signout-link");

    if (signoutLink) {
        signoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            signout();
        });
    }
});

function signout() {
    try {
        localStorage.removeItem("token");
        localStorage.removeItem("candidate");
        localStorage.removeItem("candidateId");
        localStorage.removeItem("companyEmail");
        localStorage.removeItem("companyId");

        location.assign("./index.html");
    } catch (error) {
        alert(error);
    }
}
