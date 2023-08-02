    // 검색 변수
    const $search = $("#head .search");
    const $searchInput = $("#head .search input[type=text]");
    const $searchLayer = $(".search-layer");
    const $searchLayerBg = $(".search-layer .bg");
    const $delBtn = $(".search .del_btn");
    // 카테 변수
    const $cateBtn = $(".cate");
    const $cateLayer = $(".cate-layer");
    const $cateLayerBg = $(".cate-layer .bg");

    // 검색 레이어 오픈
    $($searchInput).on("click",()=>{
        $search.addClass("active");
        $searchLayer.fadeIn("fast");
        $cateLayer.fadeOut("fast");
    });
    // 검색 배경 클릭 시 레이어 close
    $($searchLayerBg).on("click",()=>{
        $searchLayer.fadeOut("fast");
        $search.removeClass("active");
    })
    // 검색 x버튼 클릭 시 입력값 삭제
    $delBtn.on("click",()=>{
        $searchInput.val("");
    })

    // 카테고리 레이어 오픈
    $($cateBtn).on("click",()=>{
        $cateLayer.fadeIn("fast");
        $searchLayer.fadeOut("fast");
    });
    $($cateLayerBg).on("click",()=>{
        $cateLayer.fadeOut("fast");
    });