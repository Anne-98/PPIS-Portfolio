
// color changing of navbar when scrolling...........

window.addEventListener('scroll', function() {
    var myNav = document.getElementById("navScroll");
                
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
});

// Achievements carousel...........................................
var title;
var description;
var date;
var count; 

window.addEventListener('load', function(){
  this.setInterval(dynamicAchievement, 2000);
    count = 0;
})

var achievements = [{heading:"1 st Place", paragraph:"Behance Annual Design Competition", day:"2019/01/02"},{heading:"2 nd Place", paragraph:"Extreme Hackathon version 2.0", day:"2020/12/12"},{heading:"3 rd Place", paragraph:"Designing Competition", day:"2018/12/2"}];

function dynamicAchievement() {

  title = document.getElementById("achievement-title");
  description = document.getElementById("achievement-description");
  date = document.getElementById("achievement-date");

  if (count < achievements.length) {
    title.innerText = achievements[count].heading
    description.innerText = achievements[count].paragraph
    date.innerText = achievements[count].day
    count ++;
  }else{
    count = 0;
    title.innerText = achievements[count].heading
    description.innerText = achievements[count].paragraph
    date.innerText = achievements[count].day
  }
}