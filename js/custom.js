$(document).ready(function(){
    "user strict";
    
      $(".sidebar-tab a").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
      })
      $(".sm-menubar-btn, .close-sidebar-btn").on("click", function(){
        $(".leftsidebar").toggleClass("show");
        $("html").toggleClass("noscroll")
        $(".backdrop").toggleClass("show");
    
      })
      $(".collection-btn").on("click", function(){
        $(".leftsidebar").toggleClass("show");
        $(".collections-tab").addClass("active");
        $(".mission-tab").removeClass("active");
        $("html").addClass("noscroll")
        $(".backdrop").addClass("show");
      })
      $(".article-btn").on("click", function(){
        $(".leftsidebar").toggleClass("show");
        $(".collections-tab").removeClass("active");
        $(".mission-tab").addClass("active");
        $(".backdrop").addClass("show");
        $("html").addClass("noscroll")
      })
    
      $(".showcase-carousel").owlCarousel({
          margin:0,
          loop:true,        
          dots:true,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true,
          responsive:{
            0:{
              items:1
            },
            480:{
              items:1
            },
            768:{
              items:1
            },
            1024:{
              items:1
            }
          }
        })
        $(".product-carousel").owlCarousel({
          margin:0,
          loop:true,        
          dots:false,
          autoplay:false,
          autoplayTimeout:2000,
          autoplayHoverPause:true,
          responsive:{
            0:{
              items:1,
              dots:true
            },
            480:{
              items:2
            },
            768:{
              items:2
            },
            1024:{
              items:3
            }
          }
        })
        $(".products-carousel").owlCarousel({
          margin:0,
          loop:true,        
          dots:false,
          autoplay:false,
          autoplayTimeout:2000,
          autoplayHoverPause:true,
          responsive:{
            0:{
              items:1,
              dots:true
            },
            480:{
              items:2
            },
            768:{
              items:2
            },
            1024:{
              items:2
            }
          }
        })
    })
    
    window.onscroll = function(){stickyFunc()};
    
    
    let header = document.getElementById("topHeader");
    
    let sticky = header.offsetTop;
    
    const stickyFunc = () => {
      if(window.pageYOffset > sticky){
        header.classList.add("sticky");
      }else{
        header.classList.remove("sticky")
      }
    }
    
    document.addEventListener("DOMContentLoaded", function() {
      var lazyloadImages = document.querySelectorAll("img.lazy");    
      var lazyloadThrottleTimeout;
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
        
        lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length == 0) { 
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
      }
      
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    });
    var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
} 