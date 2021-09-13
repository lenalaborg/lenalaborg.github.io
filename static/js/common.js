/*******************************************************************************
 * browser support fix
 ******************************************************************************/

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

/*******************************************************************************
 * document ready
 ******************************************************************************/

$(document).ready(function() {
	/* for lang - sidebar */
	$('#solution-list').hover(function () {
		$(".solution-list").toggleClass('arrow');
		$("#solution-list-layer").toggleClass('hidden');
	});
	
});

$(window).on("load", function (e) {
	//$('.loading').fadeOut(100);
});

/*******************************************************************************
 * Common Utils
 ******************************************************************************/

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    var sParameterName;
    var i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
	}
}
var sidebar_open = function(){
	$('#sidebar').toggleClass('on');
	$('.hamber_btn').toggleClass('on');
	$('.overlay').fadeToggle(300);
	$('body').toggleClass('scroll-off');
}

var sidebar_close = function(){
	$('#sidebar').removeClass('on');
	$('.hamber_btn').removeClass('on');
	$('.overlay').fadeOut(300);
	$('body').removeClass('scroll-off');
}


/*******************************************************************************
 * Utils for popup.tags
 ******************************************************************************/
var openLayerPopup=function(id){
	switch(id) {
    case "policy-privacy-popup":
    	eulaLazyLoading(id);
        break;
    case "policy-termofuse-popup":
    	eulaLazyLoading(id);
        break;
    case "policy-email-popup":
    	eulaLazyLoading(id);
        break;
    case "policy-eula-popup":
    	eulaLazyLoading(id);
        break;
	}	
	
	$('#'+id).toggleClass('on');
}

var closeLayerPopup=function(id){
	$('#'+id).removeClass('on');
}

var eulaLazyLoading=function(id){
	var oPopup = $('#'+id + " div.eula");
	var text = oPopup.html().trim();
	if (text.length == 0) {
    	console.log("lazy-loading : " + id);	
		$.ajax({
	        type : "GET",
	        url : "/legal-notice/" + id,
	        success : function(data) {
	        	oPopup.html(data);
	        }
	    });
		
	}
}

$(document).ready(function(){
	$(document).keyup(function(e){
		if (e.which == 27){
			console.log('esc');
			closeLayerPopup('policy-privacy-popup');
			closeLayerPopup('policy-email-popup');
			closeLayerPopup('policy-termofuse-popup');
			closeLayerPopup('policy-eula-popup');
		}
	});	
});


/*******************************************************************************
 * Utils for popup.tags
 ******************************************************************************/

function fnLocaleChange(url) {
	$.ajax({
        type : "GET",
        url : url,
        dataType : 'json',
        success : function(data) {
       	    location.reload();
        }
    });
}

function encrypt(password) {
	if(!password) return "";
	
	var exponent = "10001";
	var modules = "cf23edf44918afa4f6c75ee855dce42040eb11ef52b9234085626d5a734b43647cd544ec2a76099fc2a44458896ceefd83d1d79b3c5cecb70fb7b6b84075e645ae0a699c1fc83ea7b5b53eadd849750dc09a5d5d6a31af8278c2640bd537336fbf43b0adb78415d672177f7bea4e108f5fb6f0e3da5357642d8849aca7bd0505c0a5efaa89ed39d6c9909318fbed722bd2609c4552865d217e1179b55e4b9c0cef594229956122d7d307af8b4475548257c1fdf470666298cfc76119390c36d6b6b6a354f65107a33ac487610dd9dda105b020d888af48aa9e35adc23d905e89512e8d65eb1a88eed3816f70813f9023ff6609e1a7989ab744a086b5ef42ab81";
  	var rsa = new RSAKey();
  rsa.setPublic(modules, exponent);
  return rsa.encrypt(password);
}

/*******************************************************************************
 * LGCNS UX Team Hyun Hyun Lee (17.06.14)
 ******************************************************************************/
$(document).ready(function() {
    var ww, wh, ch = 0;
    $(window).resize(function() {
    	
    if (!document.getElementById('support-main')) {
    	//console.log("not main");
    	return;
    }
        ww = $(window).width();
        wh = $(window).height();
        sh = document.body.scrollHeight;
        var fh = $('#footer').outerHeight();
        var bh = $('#wrap').outerHeight();
        if (ww >= 768) {
            $('#wrap').css('top', (((wh - fh) / 2) - bh / 2 ) - 300 );
        } else {
            $('#wrap').css('top', 0);
            $('#support-main').css('background-size', 'auto ' + (sh - fh) + 'px');
        };
        $('#sidebar').css('height', wh);
    });
    $(window).resize();
});
