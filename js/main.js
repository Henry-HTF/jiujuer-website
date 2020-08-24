$(function () {
  // 首页 --------------------------------------------------------------
  // 头部轮播图
  $('.head-carousel').slick({
    dots: true,
    accessibility: false,
    autoplay: true,
    arrows: false
  });

  // 文化轮播图
  $('#culture > .carousel').slick({
    slide: 'div'
  });

  // 大事件轮播图
  $('.history > .carousel').slick({
    accessibility: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.history > .carousel2',
    slide: 'div'
  });
  $('.history > .carousel2').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.history > .carousel',
    arrows: false,
    infinite: false,
    accessibility: false,
    centerMode: true,
    focusOnSelect: true
  });

  $(".history .carousel2 .logo").eq(0).addClass('li-active');

  $('.history > .carousel').on('swipe', function (event, slick, direction) {
    var index = 0
    if (direction == 'left') {
      index++
      $('.history .carousel2 .logo').removeClass('li-active'); // 删除其他兄弟元素的样式
      $(".history .carousel2 .logo").eq(index).addClass('li-active'); // 添加当前元素的样式
    } else {
      $('.history .carousel2 .logo').removeClass('li-active'); // 删除其他兄弟元素的样式
      $(".history .carousel2 .logo").eq(index).addClass('li-active');
    }
  });

  $(".history .carousel2 .logo").click(function () {
    $('.history .carousel2 .logo').removeClass('li-active'); // 删除其他兄弟元素的样式
    $(this).addClass('li-active'); // 添加当前元素的样式
  });

  $(".menu-toggle").click(function () {
    $(".nav").toggleClass('show')
  })
})