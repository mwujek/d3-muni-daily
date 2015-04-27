var $bars = $('.routeBar');
var routeID;


function viewRoute(routeID){
  // for hover effect
  var $routeSVG; // SVG element in map
  var $parentSVG = $('.svg-parent');  //selects parent container (used for 'z-index')

  $routeSVG = $parentSVG.find(".bus-line-"+routeID);
  $routeSVG.css('stroke','#2ecc71');
  $parentSVG.append($routeSVG);
}

function removeRoute(routeID){
  var $routeSVG; // SVG element in map
  var $parentSVG = $('.svg-parent'); 
  $routeSVG = $parentSVG.find(".bus-line-"+routeID);
  $routeSVG.css('stroke','');
}


  $(document).on({
    mouseenter: function () {
      var e = $(this);
      routeID = $(this).data("route-id");
      e.parent().addClass('hover-bar');

      viewRoute(routeID);
    },
    mouseleave: function () {
      var e = $(this);
      e.parent().removeClass('hover-bar');
      removeRoute(routeID);
    }
}, ".routeBar");


$(document).ready(function() {
  var moreInfoBtn = $('.more-btn');
  var moreInfoSection = $('.more-info');
  moreInfoBtn.click(function() {
    var el = $(this);
    if (el.hasClass('active-btn') ){
        moreInfoSection.velocity({opacity:0, height:0},{duration:500, visibility: 'hidden'});
        moreInfoBtn.text('More Info');
        el.toggleClass('active-btn');
    } else {
        moreInfoSection.velocity({opacity:1, height:161},{duration:500, visibility: 'visible'});
        moreInfoBtn.text('Close');
        el.toggleClass('active-btn');
    }

  });
});