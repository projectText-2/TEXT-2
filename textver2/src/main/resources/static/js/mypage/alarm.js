// function feed() {
//     document.getElementById("feed").className = "select";
//     document.getElementById("together").className = "other";
//     document.getElementById("mytogether").className = "other";
//     document.getElementById("trade").className = "other";
//     document.getElementById("mytrade").className = "other";
// }
// function together() {
//     document.getElementById("feed").className = "other";
//     document.getElementById("together").className = "select";
//     document.getElementById("mytogether").className = "other";
//     document.getElementById("trade").className = "other";
//     document.getElementById("mytrade").className = "other";
// }
// function mytogether() {
//     document.getElementById("feed").className = "other";
//     document.getElementById("together").className = "other";
//     document.getElementById("mytogether").className = "select";
//     document.getElementById("trade").className = "other";
//     document.getElementById("mytrade").className = "other";
// }
// function trade() {
//     document.getElementById("feed").className = "other";
//     document.getElementById("together").className = "other";
//     document.getElementById("mytogether").className = "other";
//     document.getElementById("trade").className = "select";
//     document.getElementById("mytrade").className = "other";
// }
// function mytrade() {
//     document.getElementById("feed").className = "other";
//     document.getElementById("together").className = "other";
//     document.getElementById("mytogether").className = "other";
//     document.getElementById("trade").className = "other";
//     document.getElementById("mytrade").className = "select";
// }

function select(id) {
    var class_id = $('.select').attr('id');
    document.getElementById(class_id).className = "other";
    document.getElementById(id).className = "select";
}

//new 추가용 function(정보 처음 불러올 때 용으로 쓰면 됨)
window.onload = function () {
    // db에서 조회수를 가져와서 넣으면 됨
    var views = 0;
    
    //여기서 조회수를 체크해서 new를 삽입 함으로 제거는 알아서 됨
    if(views < 1){
        const classnm = document.getElementsByClassName('lititle');
        const addspan = document.createElement('span');

        addspan.setAttribute('class','check');
        addspan.innerHTML = "New";

        //조회수가 0인 애들을 가져와서 for문으로 돌려야 함 지금은 처음만 적용시킴
        classnm[0].appendChild(addspan);
    }
}