Simple Material Tabs
===================

A simple jquery/css implementation of the horizontal scrolling tabs from the material angular library that is so epic!

I really, really like the way the tabs on the https://material.angularjs.org/latest/demo/tabs demo work, but I am not using this library in my project. I needed the same type of functionality, so with the help of the interwebs, I wrote this simple demo. Please fork and improve on it! 

### Demo

http://codepen.io/jasonflaherty/pen/qOGgmp
----------

> **Coming Soon Ideas:**

> - Arrow on left and right of tabs that slides tabs left and right when overflow happens.
> - Slide content left, right, up, down or whatever direction you would like to come from.
> - Clean up code and make it more better with a little help from my "community" here.

### Simple Implementation

Clone the repository and run on your localhost.

git clone https://github.com/jasonflaherty/simple-material-design-tabs.git

The javascript in place requires jquery, but has only a few lines of code (of which I am sure there can be a better more graceful implementation). 

    <script>
	    //hide all the divs with content except the 1st one.
        $("#tabcontent div").hide();
        $("#tabcontent div:eq('0')").show();
        
        //add active class to first li (tab)
        $("ul#tabs li:eq('0')").addClass("active");
        
		//on click hide any child divs that do not contain the same index as the current li. Show (fade in) the div with the same index.
        $("li").click(function() {
            var i = $(this).index();
            $("#tabcontent div:not(:eq(" + i + "))").hide();
            $("#tabcontent div:eq(" + i + ")").fadeToggle("slow", "linear");
            //get the ul and it's total outter width and then center the currently clicked on. Add active class.
            centerLI(this, 'ul#tabs');
            $("li").each(function() {
                $(this).removeClass('active');
            });
            $(this).addClass("active");

        });

         //Function from: http://stackoverflow.com/a/33296765/350421
         //centers the li in the screen
        function centerLI(target, outer) {
            var out = $(outer);
            var tar = $(target);
            //added -50 to center it better for me...
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
    </script>