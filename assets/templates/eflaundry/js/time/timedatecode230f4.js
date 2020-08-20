$.get('https://www.WashyCare.com/time-schedule-new', { 'wash': wash[globalData['goBack']] }, function (r) {
	PickUp = JSON.parse(r.replace(/\,\]/gm, "]")); cacheFirstTimeDate = PickUp[0]["day_info"]["value"] + " " + PickUp[0]["work_times"][0]["value"];
    var query = window.location.search.substring(1);
    if(typeof parse_query_string !== 'undefined' && typeof parse_query_string === 'function'){
        var qs = parse_query_string(query);
        if(typeof qs !== 'undefined' && qs['corona_discount']){
            if(qs['corona_discount']=="yes"){
                var discount = "corona_discount";
                console.log("discount");
            }
        }
    }
	$.get('https://www.WashyCare.com/time-schedule-new', { 'pickup': cacheFirstTimeDate, 'wash': wash[globalData['goBack']], 'discount': discount }, function (d) {
		DropOff = JSON.parse(d.replace(/\,\]/gm, "]"));
		document.querySelector('.time_view').innerHTML = new Templater(timePikerTMP, { 'title': globalData['title'], 'goBack': globalData['goBack'], 'PickUp': PickUp, 'DropOff': DropOff }, document.querySelector('.time_view')).Render();

		//day-start
		if ($('.time-page-form [name="day-start"]').length > 0) {
			$('.time-page-form [name="day-start"]').change(styledSelector);
			styledSelector.call($('.time-page-form [name="day-start"]')[0]);
			$('.time-page-form [name="day-start"]').change(function () {
				var val = $(this).val(); var time = PickUp[val], options='';
				for (var i in time["work_times"]){
                    if(globalData['goBack'] == 'homeCleaning')
                    {
                        options += '<option value="' + time["day_info"]["value"] + ' ' + time["work_times"][i]["value"] + '"> ' + time["work_times"][i]["text"] + '</option>';
                    } else {
                        options += '<option value="' + time["day_info"]["value"] + ' ' + time["work_times"][i]["value"] + '"> ' + time["work_times"][i]["text"] + '</option>';   
                    }
                }
				$('.time-page-form [name="time-start"]').html(options);
				chengeDropOffDate($('.time-page-form [name="time-start"]').val());
				styledSelector.call($('.time-page-form [name="time-start"]')[0]);
			});
		}

		//time-start
		if ($('.time-page-form [name="time-start"]').length > 0) {
			$('.time-page-form [name="time-start"]').change(styledSelector);
			styledSelector.call($('.time-page-form [name="time-start"]')[0]);
			$('.time-page-form [name="time-start"]').change(function () {
				chengeDropOffDate($('.time-page-form [name="time-start"]').val());
				styledSelector.call($('.time-page-form [name="time-end"]')[0]);
			});
		}

		//day-end
		if ($('.time-page-form [name="day-end"]').length > 0) {
			$('.time-page-form [name="day-end"]').change(styledSelector);
			styledSelector.call($('.time-page-form [name="day-end"]')[0]);
			$('.time-page-form [name="day-end"]').change(function () {
				var val = $(this).val(); var time = DropOff[val], options = '';
				for (var i in time["work_times"]) options += '<option value="' + time["day_info"]["value"] + ' ' + time["work_times"][i]["value"] + '"> ' + time["work_times"][i]["text"] + '</option>';
				$('.time-page-form [name="time-end"]').html(options);
				styledSelector.call($('.time-page-form [name="time-end"]')[0]);
			});
		}

		//time-end
		if ($('.time-page-form [name="time-end"]').length > 0) {
			$('.time-page-form [name="time-end"]').change(styledSelector);
			styledSelector.call($('.time-page-form [name="time-end"]')[0]);
		}
		
		function selectFix(){
			$('select').map(function(){
				styledSelector.call(this);
			});
			
		}
		

		$('.step-end').click(function () {
			var cache = getFormData();
			globalData['data_time_info'] = cache;
		});
		
		//if(cordova.platformId!='android') $('.time-page .first-select,.time-page .second-select').css({width:'100%','margin-bottom':'10px'})
		
		$('.time-page .selected-items-body select').map(function(){
			$(this).css({'width':$(this).parent().width()+'px'});
		});
        if (typeof checkDates === 'function') {
            checkDates();
        }
	});
    
});
function getFormData() {
	var data = {
		'instruction': $('textarea[name="instructions"]').val(),
		'pickup': $('.time-page-form [name="time-start"]').val(),
		'pickup-day': $('.day-start-text').html(),
		'pickup-time': $('.time-start-text').html(),
		'pickup-title': 'PICK UP',
		'dropoff': 'DROP OFF'
	};
	if ($('.time-page-form [name="day-end"]').length > 0) {
		data['dropoff'] = $('.time-page-form [name="time-end"]').val();
		data['dropoff-day'] = $('.day-end-text').html();
		data['dropoff-time'] = $('.time-end-text').html();
		data['dropoff-title'] = 'DROP OFF';
	}
	if (globalData['goBack'] == 'homeCleaning') data['pickup-title'] = 'STARTING TIME';
	return data;

}
function styledSelector() {
	var $this = $(this); var value = [], selectedItems = $this.val(), $options = $this.find('option'), z = 0, text = '';
	if ($options.length > 0) {
		while (z < $options.length) {
			value.push({ 'text': $options.eq(z).html(), 'value': $options.eq(z).attr('value') });
			z++;
		}
		for (var d in value) {
			if (typeof selectedItems != 'object') {
				if (value[d]['value'] == selectedItems) {
					text = value[d]['text'];
				}
			} else {
				for (var i in selectedItems) {
					if (value[d]['value'] == selectedItems[i]) {
						text += ',' + value[d]['text'];
					}
				}
			}
		}
	} else {
		text = $this.val();
	}
	text = (text != null && text.indexOf(',') == 0 ? text.substr(1) : text);
	$this.parents('.selected-items-body').find('.selected-items .selected-items-text').html(text);
	if (text != '' && text != 'NONE') $this.parents('.selected-items-body').find('.selected-items .selected-items-text').addClass('selected');
	else $this.parents('.selected-items-body').find('.selected-items .selected-items-text').removeClass('selected');
    if (typeof checkSameDay === 'function') {
        checkSameDay();
    }
}
function chengeDropOffDate(val) {
    console.log('showing schedule for ' + globalData['goBack']);
    if(typeof parse_query_string !== 'undefined' && typeof parse_query_string === 'function'){
        var query = window.location.search.substring(1);
        var qs = parse_query_string(query);
        if(typeof qs !== 'undefined' && qs['corona_discount']){
            if(qs['corona_discount']=="yes"){
                var discount = "corona_discount";
                console.log("discount");
            }
        }
    }
	$.get('https://www.WashyCare.com/time-schedule-new', { 'pickup': val, 'airbnb': '0', 'wash': wash[globalData['goBack']], 'discount': discount  }, function (d) {
		DropOff = JSON.parse(d.replace(/\,\]/gm, "]"));
		var options = '';
		for (var i in DropOff) options += '<option value="' + i + '">' + DropOff[i]["day_info"]["text"] +'</option>';
		$('.time-page-form [name="day-end"]').html(options);
		styledSelector.call($('.time-page-form [name="day-end"]')[0]);
		options = '';
		for (var i in DropOff[0]["work_times"]) options += '<option value="' + DropOff[0]["day_info"]["value"] + ' ' + DropOff[0]["work_times"][i]["value"] + ' ">' + DropOff[0]["work_times"][i]["text"] +'</option>';
		$('.time-page-form [name="time-end"]').html(options);
		styledSelector.call($('.time-page-form [name="time-end"]')[0]);
	});
}