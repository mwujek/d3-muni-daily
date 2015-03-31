  var $bars = $('.routeBar');
var routeID;

  // function containerMargin (){
  //     var height = $(window).height();
  //     var $container = $('.container-lines');
  //     $container.css('margin-top', height/8);
  // }


function viewRoute(routeID){
  // for hover effect
  var $routeSVG; // SVG element in map
  var $parentSVG = $('.svg-parent');  //selects parent container (used for 'z-index')

  $routeSVG = $parentSVG.find(".bus-line-"+routeID);
  $routeSVG.css('stroke','#2ecc71');
  $parentSVG.append($routeSVG);
  //console.log($routeSVG);
}

//bus-line-

 function removeRoute(routeID){
//  // for hover effect

var $routeSVG; // SVG element in map
var $parentSVG = $('.svg-parent');  //selects parent container (used for 'z-index')

  $routeSVG = $parentSVG.find(".bus-line-"+routeID);
  $routeSVG.css('stroke','');

  }


  //$(document).ready(function(){

  
  //$allPaths =  $('.metro-path, .tep-path');


  $(document).on({
    mouseenter: function () {
      var e = $(this);
      routeID = $(this).data("route-id");
      e.parent().addClass('hover-bar');
      //console.log(e.parent());
      //console.log(routeID);
      console.log('yo');
      viewRoute(routeID);
    },
    mouseleave: function () {
      var e = $(this);
      e.parent().removeClass('hover-bar');
      removeRoute(routeID);
    }
}, ".routeBar");


