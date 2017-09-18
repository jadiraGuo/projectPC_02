"use strict";

require(["config"], function () {
      require(["jquery", "ajaxurl", "template", "resources", "common"], function ($, router, temp, resources) {
            $.ajax({ url: "http://localhost:8080/js/list.json", context: document.body, success: function success(data) {
                        for (var i = 0; i < data.length; i++) {
                              for (var j = 0; j < data[i]["plist"].length; j++) {
                                    var name = data[i]["plist"][j]["name"];
                                    var img = data[i]["plist"][j]["img"];
                                    var nprice = data[i]["plist"][j]["nprice"];
                                    var oprice = data[i]["plist"][j]["oprice"];
                                    var sales = data[i]["plist"][j]["sales"];
                                    var tag = data[i]["plist"][j]["tag"];
                                    var taglist = tag.split(",");
                                    console.log(name);
                              }
                        }
                        // $(".list_goods ul").append(temp(resources.list,data));		
                  } });
      });
});