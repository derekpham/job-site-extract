let allRows = document.getElementsByTagName("tr");
for (var i = 0; i < allRows.length; i++) {
    var row = allRows[i];
    if (row.id.includes('posting')) {

    }
}

for (var i = 0; i < allLinks.length; i++) {
    let linkNode = allLinks[i];
    let onclickContent = linkNode.getAttribute('onclick');
    if (onclickContent != null && onclickContent != undefined) {
        //linkNode.setAttribute('href', onclickContent);
    }
}

console.log(tabs);

function checkIsJobListingPage(document) {
    let postingsTable = document.getElementById("postingsTable");
    return postingsTable != null && postingsTable != undefined;
}

function checkIsSingleJobInfoPage(document) {
    let postingDiv = document.getElementById("postingDiv");
    return postingDiv != null && postingDiv != undefined;
}

function injectFocus(onClickStr) {
    return onClickStr += "\nwindow.focus();";
}
