function sidebarFunc() {
    const sidebar = document.querySelector(".sidebar");
    const before = document.querySelector(".before");
    sidebar.classList.toggle("show");
    before.classList.toggle("drop");
}

function buildFunc() {
    const build = document.querySelector("#build");
    build.classList.toggle("dropbuild");
}

function runFunc() {
    const run = document.querySelector("#run");
    run.classList.toggle("droprun");
}

function analyticsFunc() {
    const run = document.querySelector("#analytics");
    run.classList.toggle("dropanalytics");
}