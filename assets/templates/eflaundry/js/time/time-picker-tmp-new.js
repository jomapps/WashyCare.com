var timePikerTMP='<\
<% if(goBack != \'homeCleaning\') {%>\
            <div class="action-bar" style="display: inline-block;width:100%;border-bottom: 1px solid #dce1e5;margin-bottom: 20px;">\
            <label for="room_bath-styled">Pickup</label>\
            <div class="input-group half" style="margin-top:0px;  margin-bottom:0; margin-right:4%;margin-bottom: 10px;left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="day-start" id="day-start" onchange="checkSameDay()">\
                                <%\
                                    for(var i in PickUp) echo(\'<option value="\'+i+\'">\'+PickUp[i]["day_info"]["text"]+\'</option>\');\
                                %>\
                            </select>\
                <span class="meta-time select-time">date</span>\
            </div>\
        </div>\
        <div class="input-group half" style="margin-top:0px; margin-bottom:0; left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="time-start" id="time-start" onchange="checkSameDay()">\
                                <%\
                                for(var i in PickUp[0]["work_times"]) {\
                                echo(\'<option value="\'+PickUp[0]["day_info"]["value"]+\' \'+PickUp[0]["work_times"][i]["value"]+\'">\'+PickUp[0]["work_times"][i]["text"]+\'</option>\');\
                                }\
                                %>\
                            </select>\
                <span class="meta-time select-time">time</span>\
            </div>\
        </div>\
            </div>\
        <div class="action-bar" style="width:100%">\
            <label for="room_bath-styled" style="white-space: normal;">Delivery</label>\
            <div class="input-group half" style="margin-top:0px; margin-bottom:0; margin-right:4%;left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="day-end" id="day-end" onchange="checkSameDay()">\
                                <%\
                                for(var i in DropOff) echo(\'<option value="\'+i+\'">\'+DropOff[i]["day_info"]["text"]+\'</option>\');\
                                %>\
                            </select>\
                <span class="meta-time select-time">date</span>\
            </div>\
        </div>\
        <div class="input-group half" style="margin-top:0px; margin-bottom:0; left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="time-end" id="time-end" onchange="checkSameDay()">\
                                <%\
                                for(var i in DropOff[0]["work_times"]) {\
                                echo(\'<option value="\'+DropOff[0]["day_info"]["value"]+\' \'+DropOff[0]["work_times"][i]["value"]+\' ">\'+DropOff[0]["work_times"][i]["text"]+\'</option>\');\
                                }\
                                %>\
                            </select>\
                <span class="meta-time select-time">time</span>\
            </div>\
        </div>\
        </div>\
            <% } else { %>\
        <div class="action-bar" style="display: inline-block;width:100%;border-bottom: 1px solid #dce1e5;margin-bottom: 20px;">\
            <label for="room_bath-styled">Starting Time</label>\
            <div class="input-group half" style="margin-top:0px;  margin-bottom:0; margin-right:4%;margin-bottom: 10px;left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="day-start" id="day-start" onchange="checkSameDay()">\
                                <%\
                                    for(var i in PickUp) echo(\'<option value="\'+i+\'">\'+PickUp[i]["day_info"]["text"]+\'</option>\');\
                                %>\
                            </select>\
                <span class="meta-time select-time">date</span>\
            </div>\
        </div>\
        <div class="input-group half" style="margin-top:0px; margin-bottom:0; left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="time-start" id="time-start" onchange="checkSameDay()">\
                                <%\
                                for(var i in PickUp[0]["work_times"]) {\
                                    echo(\'<option value="\'+PickUp[0]["day_info"]["value"]+\' \'+PickUp[0]["work_times"][i]["value"]+\'">\'+PickUp[0]["work_times"][i]["text"]+\'</option>\');\
                                }\
                                %>\
                            </select>\
                <span class="meta-time select-time">time</span>\
            </div>\
        </div>\
            </div>\
        <div class="action-bar" style="visibility:hidden; overflow:hidden; position:absolute; left:-200%; width:100%">\
            <label for="room_bath-styled" style="white-space: normal;">Delivery</label>\
            <div class="input-group half" style="margin-top:0px; margin-bottom:0; margin-right:4%;left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="day-end" id="day-end" onchange="checkSameDay()">\
                                <%\
                                for(var i in DropOff) echo(\'<option value="\'+i+\'">\'+DropOff[i]["day_info"]["text"]+\'</option>\');\
                                %>\
                            </select>\
                <span class="meta-time select-time">date</span>\
            </div>\
        </div>\
        <div class="input-group half" style="visibility:hidden; overflow:hidden; position:absolute; left:-200%; margin-top:0px; margin-bottom:0; left: 0;">\
            <div class="selected-items-body">\
                <select class="new_schedule" name="time-end" id="time-end" onchange="checkSameDay()">\
                                <%\
                                for(var i in DropOff[0]["work_times"]) {\
                                echo(\'<option value="\'+DropOff[0]["day_info"]["value"]+\' \'+DropOff[0]["work_times"][i]["value"]+\' ">\'+DropOff[0]["work_times"][i]["text"]+\'</option>\');\
                                }\
                                %>\
                            </select>\
                <span class="meta-time select-time">time</span>\
            </div>\
        </div>\
        </div>\
        <% } %>\
';