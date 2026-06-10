$(function() {
	//Triangular Prism start
  var deg = 0;
  $(".rotateF").click(function() {
    deg -= 120;
    $("#triangularPrism").css("transform", "rotateX(" + deg + "deg)");

  });
  $(".rotateB").click(function() {
    deg += 120;
    $("#triangularPrism").css("transform", "rotateX(" + deg + "deg)");

  });
  //Triangular Prism end
  //navigation start
  $("div.navigator").html("");
  var navSwitch = false;
  $("div.navigator").click(function() {
    if (navSwitch) {
      navSwitch = false;
      $(this).html("");
      $(this).addClass("nSel");
    } else {
      navSwitch = true;
      $(this).removeClass("nSel");
      $(this).html(`
				<a href="#top">
          <div class="smallerBall navTop">
            Top
          </div>
        </a>
        <a href="#navAbt">
          <div class="smallerBall aboutMe">
            About Me
          </div>
        </a>
        <a href="#navPK">
          <div class="smallerBall pKnowledge">
            Programming Knowledge
          </div>
        </a>
        <a href="#navMK">
          <div class="smallerBall mKnowledge">
            Multimedia Knowledge
          </div>
        </a>
        <a href="#recentWorks">
          <div class="smallerBall navProjects">
            Projects
          </div>
        </a>
  		`);
    }
  });
  //navigatio end

});
