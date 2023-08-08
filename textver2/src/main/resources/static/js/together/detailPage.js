//팔로우 상태 값
let fStatus = 0;
//좋아요 상태 값
let like = 0;

console.log(fStatus);

function heart() {
    if (fStatus == 0) {
        fStatus = 1;

        $('.heart').addClass("heartOn");
        $('.heart').text('팔로우 중');
    }else {
        fStatus = 0;

        $('.heart').removeClass("heartOn");
        $('.heart').text('팔로우');
    }
}

function likeOn() {
    if (like == 0) {
        like = 1;
        $('.xi-heart-o').attr("class","xi-heart");
    } else {
        like = 0;
        $('.xi-heart').attr("class","xi-heart-o");
    }
}
