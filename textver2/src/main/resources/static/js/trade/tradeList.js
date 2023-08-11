function right(num){
    alert("right click"+num);
}
function left(num){
    alert("left click"+num);
}
window.onload = function () {
    //list는 실제 개시글 갯수르 넣응면 됨 뒤에 .length를 넣으셈
    var list = 2;
    var i = 0;
    for(i=0; i<list; i++){
        $('#FeedList').append(
            '<div>' +
            <!-- 1. 피드 contents - 프로필 이름, 사진, 시간-->
            '<div class="FeedList-ProfileWrapper">' +
            '<div class="UserProfileWrapper">' +
            '<div class="ProfileImageWrapper">' +
            '<div class="ProfileImage-Wrapper">' +
            '<img class="ImageLoader" width="36" height="36"   src="../../static/img/trade/피드(3).jpg">' +
            '<div class="Fade-Wrapper" style="opacity: 1; display: block">' +
            '<div class="Ratio" style="display: block">' +
            '<div class="Ratio-ratio" style=" height: 0px;position: relative;width: 100%; padding-top: 100%;">'+
            '<div class="Ratio-content" style="height: 100%; left: 0px;   position: absolute; top: 0px; width: 100%;">'+
            '<img class="StyledImage" width="36px" height="36px"   src="../../static/img/trade/피드(3).jpg">'+
            ' </div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            ' </div>'+
            ' </div>'+
            '<div class="ProfileTextWrapper">'+
            '<p class="Profile-Name">김밥</p>'+
            '<div class="Profile-Time">1시간전</div>'+
            '</div>'+
            '</div>'+
            '<button class="UserProfileButton">'+
            // ' <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='17' viewBox='0 0 4 17'%3E %3Cpath fill='%23999' fill-rule='evenodd' d='M1.57 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3z'/%3E %3C/svg%3E" alt="더보기">'+
            ` <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='17' viewBox='0 0 4 17'%3E %3Cpath fill='%23999' fill-rule='evenodd' d='M1.57 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3z'/%3E %3C/svg%3E" alt="더보기">`+
            ' </button>'+
            ' </div>'+

            <!-- 2. 피드 contents - 사진 -->
            ' <div class="FeedList-ImageWrapper" style="display: block">'+
            ' <div class="Ratio-ratio" style="height: 0px; position: relative; width: 100%; padding-top: 100%">'+
            '<div class="Ratio-content" style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%">'+
            '<div class="Slider-Wrapper">'+
            '<div class="slick-slider">'+
            <!-- 왼쪽버튼 -->
            ` <img data-role="none" class="slick-Button-left" onclick="left(`+ i +`)" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E %3Cpath fill='none' fill-rule='evenodd' stroke='%23FFF' stroke-width='2' d='M21 17l8 8.014L21.028 33'/%3E %3C/svg%3E" alt="" style="display: block;">`+
            <!-- 사진들어가는거 -->
            ' <div class="slick-list">'+

            <!-- 사진목록 슬라이드목록 -->
            ' <div class="slick-track" style="opacity: 1; transform: translated3d(0px, 0px, 0px); width: 688px;">'+
            ' <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 344px">'+
            '<div>'+
            '  <div class="FeedImage-wrapper2">'+
            '  <div class="FeedImage-ImageLoader">'+
            ' <img  src="../../static/img/trade/피드여행(5).jpg">'+
            ' </div>'+
            '   <div class="Fade-Wrapper" style=" opacity: 1; display: block;">'+
            ' <div>'+
            ' <img   src="../../static/img/trade/피드여행(5).jpg">'+
            '   </div>'+
            '  </div>'+
            '  </div>'+
            '  </div>'+
            '   </div>'+
            '  <div data-index="1" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 344px">'+
            ' <div>'+
            '  <div class="FeedImage-wrapper2">'+
            '  <div class="FeedImage-ImageLoader">'+
            '    <img   src="../../static/img/trade/피드여행(4).jpg">'+
            '   </div>'+
            '  <div class="Fade-Wrapper" style=" opacity: 1; display: block;">'+
            ' <div>'+
            ' <img   src="../../static/img/trade/피드여행(4).jpg">'+
            ' </div>'+
            '   </div>'+
            '   </div>'+
            '    </div>'+
            '  </div>'+
            '  </div>'+
            '</div>'+
            <!-- 오른쪽 버튼 -->
            ` <img data-role="none" class="slick-Button-right" id="right` + i + `" onclick="right(` + i + `)" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E %3Cpath fill='none' fill-rule='evenodd' stroke='%23FFF' stroke-width='2' d='M21 17l8 8.014L21.028 33'/%3E %3C/svg%3E" alt="" style="display: block;">`+
            <!-- 밑에 사진 장수만큼 쩜쩜쩜 -->
            '  <ul class="slick-dots">'+
            '  <li class="slick-active">'+
            '  <button></button>'+
            '  </li>'+
            ' <li>'+
            ' <button></button>'+
            '  </li>'+
            '  </ul>'+
            ' </div>'+
            '</div>'+
            ' </div>'+
            ' </div>'+
            ' </div>'+

            <!-- 3. 피드 contents - a태그 -->
            '  <a class="FeedList-LinkCardWrapper" href="">'+
            ' <div class="maybe-category">[분류]</div>'+
            ' <div class="ContentTitle">a링크 안에'+ '</div>'+
            ' </a>'+
            <!-- 4. 피드 contents - 본문내용 discription -->
            ' <div class="FeedList-Description">'+
            '<span class="Content-Description">안녕하세요 투르크메니스탄에 여행왔는데 좋네요 중앙아시아 여행 쉽지않군요</span>'+
            ' <button class="Description-ExpendButton">더보기</button>'+
            ' </div>'+
            <!-- 5. 피드 contents - 하트, 댓글 -->
            ' <div class="FeedList-ActionGroup">'+
            '  <button type="button" class="ActionGroup-heart">'+
            `  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='18' viewBox='0 0 21 18'%3E %3Cpath fill='none' stroke='%234E5968' stroke-width='1.5' d='M15.657.75c-1.226 0-2.379.485-3.246 1.365l-1.91 1.94-1.912-1.94C7.722 1.235 6.57.75 5.343.75s-2.378.485-3.245 1.365C1.198 3.028.75 4.227.75 5.425c0 1.199.448 2.398 1.348 3.31l8.425 8.504 8.379-8.504c.9-.912 1.348-2.111 1.348-3.31 0-1.198-.448-2.397-1.347-3.31-.867-.88-2.02-1.365-3.246-1.365z'/%3E %3C/svg%3E" alt="좋아요~">` +
            ' <span class="ActionGroup-Score">100</span>'+
            '  </bu   tton>'+
            '   <a class="ActionGroup-ReplyLink" href="">'+
            `     <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='18' viewBox='0 0 21 18'%3E %3Cpath fill='none' stroke='%234E5968' stroke-width='1.5' d='M20.25.75H.75v11.818h3.842v4.015l5.9-4.015h9.758V.75z'/%3E %3C/svg%3E" alt="댓글"> `                  +
            ' <span class="ActionGroup-Score">30</span>'+
            '     </a>'+
            '  </div>'+
            ' </div>'
        );
    }
}
