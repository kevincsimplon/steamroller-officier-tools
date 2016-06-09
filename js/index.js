$(document).ready(function() {
  $(function() {
    $( "#resizable" ).resizable({
      minHeight: 540,
      minWidth: 750,
      animate: true
    });
  });
  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
  var bg = 'body .wrap',
  // Games var
      games = 'wow d3 hs sc2 hots ip',
  // Filter var
      gamesblur = 'wowblur d3blur hsblur sc2blur hotsblur ipblur',
  // Game Wrap var
      gamewrap = '.game-wrap .wowcontainer, .hscontainer, .sc2container, .d3container, .hotscontainer, .ipcontainer';
  // Aside and Main Nav Active State
  $('.item').click(function() {
    var $siblings = $(this).parent().children();
    $siblings.removeClass('active');
    $(this).addClass('active');
  });
  $('nav ul li a').click(function() {
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });
  // Main Nac Selection
  var wrap = '.wrap-games, .wrap-shop, .wrap-news';
  $('nav ul li #games').click(function() {
    $(bg).removeClass(games);
    $(bg).addClass('sc2');
    $('.filter').addClass('sc2blur');
    $(wrap).removeClass('active');
    $('.wrap-games').addClass('active');
  });
  $('nav ul li #shop').click(function() {
    $('.filter').removeClass(gamesblur);
    $(bg).removeClass(games);
    $(wrap).removeClass('active');
    $('.wrap-shop').addClass('active');
  });
  $('nav ul li #news').click(function() {
    $('.filter').removeClass(gamesblur);
    $(bg).removeClass(games);
    $(wrap).removeClass('active');
    $('.wrap-news').addClass('active');
  });
  // Games item Click Event (Background change content add)
 $('.item.sc2').click(function() {
   $(bg).removeClass(games);
   $(bg).addClass('sc2');
   $('.filter').removeClass(gamesblur);
   $('.filter').addClass('sc2blur');
   $(gamewrap).removeClass('active');
   $('.game-wrap .sc2container').addClass('active');
   $('video').removeClass('active');
 });
 $('.item.wow').click(function() {
   $(bg).removeClass(games);
   $(bg).addClass('wow');
   $('.filter').removeClass(gamesblur);
   $('.filter').addClass('wowblur');
   $(gamewrap).removeClass('active');
   $('.game-wrap .wowcontainer').addClass('active');
   $('video').removeClass('active');
 });
 $('.item.d3').click(function() {
   $(bg).removeClass(games);
   $(bg).addClass('d3');
   $('.filter').removeClass(gamesblur);
   $('.filter').addClass('d3blur');
   $(gamewrap).removeClass('active');
   $('.game-wrap .d3container').addClass('active');
   $('video').removeClass('active');
 });
 $('.item.hs').click(function() {
   $(bg).removeClass(games);
   $(bg).addClass('hs');
   $('.filter').removeClass(gamesblur);
   $('.filter').addClass('hsblur');
   $(gamewrap).removeClass('active');
   $('.game-wrap .hscontainer').addClass('active');
   $('video').removeClass('active');
 });
 $('.item.hots').click(function() {
   $(bg).removeClass(games);
   $(bg).addClass('hots');
   $('.filter').removeClass(gamesblur);
   $('.filter').addClass('hotsblur');
   $(gamewrap).removeClass('active');
   $('.game-wrap .hotscontainer').addClass('active');
   $('video').addClass('active');
 });
 $('.item.ip').click(function() {
   $(bg).removeClass(games);
   $(bg).addClass('ip');
   $('.filter').removeClass(gamesblur);
   $('.filter').addClass('ipblur');
   $(gamewrap).removeClass('active');
   $('.game-wrap .ipcontainer').addClass('active');
   $('video').removeClass('active');
 });
 $('header .logo').hover(function() {
   $('.hover').toggle("slide");
 });
 $('header .logo').click(function() {
   $('aside').toggleClass('slide');
   $('.game-wrap').toggleClass('slide');
 });
});