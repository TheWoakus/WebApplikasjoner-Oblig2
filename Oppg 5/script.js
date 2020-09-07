window.onload = startup;

function startup() {

    const selectAlternatives = [{id: 1, data: "Option1"},{id:2, data:"Option2"}];

    var body = document.getElementsByTagName("body")[0];

    var main = document.createElement("main");
    main.style.textAlign = "center";
    body.appendChild(main);

    var paragraph = document.createElement("p");
    paragraph.className = "firstP";
    paragraph.innerHTML = "Jeg trener på JavaScript";
    main.appendChild(paragraph);

    var selectBox = document.createElement("select");
    selectBox.style.maxWidth = "500px";
    main.appendChild(selectBox);

    for(i = 0; i < selectAlternatives.length; i++) {

        var selectOption = document.createElement("option");
        selectOption.value = selectAlternatives[i].id;
        selectOption.innerHTML = selectAlternatives[i].data;
        selectBox.appendChild(selectOption);
    }

    var testbtn = document.createElement("button");
    testbtn.innerHTML = "test";
    testbtn.addEventListener("click",testBtnFunc);
    main.appendChild(testbtn);

    var resetbtn = document.createElement("button");
    resetbtn.innerHTML = "reset";
    resetbtn.addEventListener("click",resetBtnFunc);
    main.appendChild(resetbtn);

    var ulList = document.createElement("ul");
    main.appendChild(ulList);

    function testBtnFunc() {

        var words = paragraph.innerHTML.split(" ");
        
        var newSentence = "";

        for(i = words.length-1; i >= 0; i--) {

            for(j = words[i].length-2; j >= 0; j--) {
                newSentence += words[i][j];
            }
            newSentence += " ";
        }

        paragraph.innerHTML = newSentence;
    }

    function resetBtnFunc() {
        ulList.innerHTML = "";

        for(i = 0; i < 4; i++) {

        var listElement = document.createElement("li");
        listElement.innerHTML = "This is a list item";

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete list Item";
        deleteButton.addEventListener("click",deleteListItem);
        listElement.appendChild(deleteButton);

        ulList.appendChild(listElement);
    }    
}

    function deleteListItem() {
        var parent = event.target.parentElement;
        parent.parentNode.removeChild(parent);
    }

    resetBtnFunc();
}