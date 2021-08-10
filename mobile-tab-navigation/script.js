console.log("script file");
var menuItem = document.getElementsByClassName("menu-item");
// console.log(menuItem);
function openTab(x){
    console.log("open tab", x, x.innerText);
    console.log("pages", document.getElementsByClassName("pages")[0].children)
    pagesChildren = document.getElementsByClassName("pages")[0].children;
    for(i=0; i<pagesChildren.length; i++){
        var singlePage = pagesChildren[i];
        console.log("singlePage", singlePage);
        if(singlePage.classList.contains("open-tab")){
            console.log("has open tab class");
            singlePage.classList.toggle("open-tab");
            break;
        }
    }
    // var singlePage = 
    function openPage(i){
        console.log("openPage", document.getElementsByClassName("pages")[0].children[i]);
        document.getElementsByClassName("pages")[0].children[i].classList.toggle("open-tab");
    }
    switch(x.innerText.trim()){
        
        case "Home":
            console.log("It's Home");
            openPage(0);
            break;
        case "Work":
            console.log("It's Work");
            openPage(1);
            break;
        case "Blog":
            console.log("It's Blog");
            openPage(2);
            break;
        case "About Us":
            console.log("It's About Us");
            openPage(3);
            break;
    }
    // var menuItem = ls;
}