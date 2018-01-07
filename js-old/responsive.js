$(document).ready(function($) {
	$('<meta name="viewport" content="width=device-width, initial-scale=0.7">').appendTo('head');
	$("body").removeClass("bg").wrapInner("<div class='bg'></div>");
	$("body").append("<div class='blackout'></div>");

	$(".usernav").addClass('zoom');

	var footer = $(".footer").detach();
	footer.appendTo("body");

	// var create = $(".usernav__create a").clone();
	// $(".header__panel").prepend("<div class='userpanel__create'></div>");
	// create.prependTo(".userpanel__create");

	// var logout = $(".userpanel__logout").clone();
	// $(".usernav__list").append('<li class="logout__li sub"></li>');
	// logout.appendTo(".logout__li");

	// var messages = $("#userpanel__messages").clone();
	// $(".header__panel").prepend("<div class='userpanel__messages'></div>");
	// messages.appendTo(".userpanel__messages");

	// var alerts = $("#menu-icon-notifications").clone();
	// $(".header__panel").prepend("<div class='userpanel__alerts'></div>");
	// alerts.appendTo(".userpanel__alerts");

	$(".header__logo").before("<div class='header__nav'><div class='menu__button'></div></div>");

	$("#travel-search-form").prepend("<div class='mob__formline'><input type='text' placeholder='Откуда' class='mob__from'><input type='text' placeholder='Куда' class='mob__to'></div><div class='mob__date'></div>");

	var submitBtn = $("#travel-search-button").val("Найти").clone();
	$(".mob__date").after(submitBtn.addClass("mob__submit"));

	$("#search-form-city").parent().wrapInner("<div class='popup__city__form popuprt'></div>");
	$("#search-form-resort").parent().wrapInner("<div class='popup__resort__form popuprt'></div>");
	$(".search__form__date").wrapInner("<div class='popup__date__form popuprt'></div>");

	$(".menu__button").click(function() {
		$(this).toggleClass('active');
		$(".sidebar").fadeToggle();
		$(".blackout").fadeToggle();
	});

	$(".blackout").click(function() {
		$(this).fadeOut();
		$(".menu__button").removeClass('active');
		$(".sidebar").fadeOut();
		$(".popup__city__form").fadeOut();
		$(".popup__resort__form").fadeOut();
		$(".popup__date__form").fadeOut();
	});


	headerBg();
	$(window).scroll(function(){
		headerBg();
	});

	$(".mob__from").click(function() {
		$(".popup__city__form").fadeToggle().toggleClass('active');
		$(".blackout").fadeToggle();
		return false;
	});

	$(".mob__to").click(function() {
		$(".popup__resort__form").fadeToggle().toggleClass('active');
		$(".blackout").fadeToggle();
		return false;
	});

	$(".mob__date").click(function() {
		$(".popup__date__form").fadeToggle().toggleClass('active');
		$(".blackout").fadeToggle();
		return false;
	});

	// var langs = $("<div class='header__langs'><a href='#' class='lang_ru active'></a><a href='#' class='lang_en'></a><a href='#' class='lang_de'></a><a href='#' class='lang_fr'></a><a href='#' class='lang_es'></a><a href='#' class='lang_pt'></a></div>");

	// $(".main_header .wrap").append(langs);
	// $(".inside .footer__logo").after(langs);
});

function headerBg() {
	var windowScroll = $(document).scrollTop();
	if(windowScroll > 0) {
		$(".header").addClass("scroll");
	} else {
		$(".header").removeClass("scroll");
	}
}