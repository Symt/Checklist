var id = "";
var table;
var task;
var id_p;
var index = 0;
$(document).ready( function () {
    table = document.getElementById("checklist");

    $("#new_element").keydown(function (e) { 
        var key = e.which;
        if (key == 13) {
            add_element($("#new_element").text());
            $("#new_element").text("");
        }
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function set_id(the_id) {
    id = "#task" + the_id;
    id_p = "#task_p" + the_id;
    toggle();
}
async function toggle() {
    $(id).toggle("");
    await sleep(500);
    $(id).toggleClass("complete");
    $(id_p).toggleClass("strikethrough");
    $(id).toggle("");
}

async function add_element(text="") {
    task = table.insertRow(table.rows.length);
    task.insertCell(table.rows[table.rows.length - 1].cells.length).innerHTML = "<button id='task" + ++index + "' onclick=\"set_id('" + index + "')\"></button>";
    task.insertCell(table.rows[table.rows.length - 1].cells.length).innerHTML = "<p onclick=\"set_id('" + index + "')\"> " + index + ". <span id='task_p" + index + "'>"+ text + "</span></p>";
    await sleep(1);
    $("#new_element").text("");
}

function remove_element(elem) {
    table.deleteRow(elem);
}