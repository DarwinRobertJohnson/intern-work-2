/*
$(".store").hover(function(err){
    $(".store-content").slideToggle();
}
)


$(".mac").hover(function(err){
    $(".mac-content").slideToggle();
}
)

$(".ipad").hover(function(err){
    $(".mac-content").slideToggle();
}
)


$(".iphone").hover(function(err){
    $(".mac-content").slideToggle();
}
)


$(".iwatch").hover(function(err){
    $(".mac-content").slideToggle();
}
)


$(".airpods").hover(function(err){
    $(".mac-content").slideToggle();
}
)
*/
array=["store","iphone","ipad","mac","iwatch","airpods"];

for(let i=0;i<array.length;i++){
    $("."+array[i]).hover(function(){
        $("."+array[i]+"-content").slideToggle();
    }
    )
}

