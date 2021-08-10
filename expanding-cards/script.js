console.log("Script js file");
function openedTheme(x){
    var allThemes = document.getElementsByClassName("theme");
    console.log(allThemes);
    for(i = 0; i < allThemes.length; i++){
        console.log("i =", i);
        singleTheme = document.getElementsByClassName("theme")[i];
        if(singleTheme.classList.contains("opened")){
            console.log("singleTheme", singleTheme);
            singleTheme.classList.toggle("opened");
            break;
        }
    }
    x.classList.toggle("opened");
}