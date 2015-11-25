 $("#tabcontent div").hide();
 $("#tabcontent div:eq('0')").show();
 $("ul#tabs li:eq('0')").addClass("active");

 $("li").click(function() {
     var i = $(this).index();
     $("#tabcontent div:not(:eq(" + i + "))").hide();
     $("#tabcontent div:eq(" + i + ")").fadeIn("slow", "linear");
     centerLI(this, 'ul#tabs');
     $("li").each(function() {
         $(this).removeClass('active');
     });
     $(this).addClass("active");

 });
 
 //http://stackoverflow.com/a/33296765/350421
 function centerLI(target, outer) {
     var out = $(outer);
     var tar = $(target);
     var x = out.width() - 50;
     var y = tar.outerWidth(true);
     var z = tar.index();
     var q = 0;
     var m = out.find('li');
     for (var i = 0; i < z; i++) {
         q += $(m[i]).outerWidth(true);
     }
     //out.scrollLeft(Math.max(0, q - (x - y)/2));
     out.animate({
         scrollLeft: Math.max(0, q - (x - y) / 2)
     }, 500);

 }