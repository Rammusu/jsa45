// tao danh sach chua lyrics
const lyrics = [ "skibidi sigma" ];
// tao lap in loi bai hat => in len html file
// tao element cho html (DOM)
const word = document.getElementById("words");
function createElement(lyrics) {
        word.innerHTML += `<p>${lyrics}</p>` ;

}
// setTimeout
// tao loi bai hat lien tuc
lyrics.forEach((element) => {
    setInterval(function() {
        createElement(element);
    },1000);
    
});
