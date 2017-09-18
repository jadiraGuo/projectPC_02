"use strict";

require(["config"], function () {
  require(["jquery", "ajaxurl", "template", "resources", "scroll"], function ($, s, temp, resources) {

    /*
    加载通用顶部
    */
    $("#header").load("head.html", function (response, status, xhr) {
      $('#header').html(response);
      /*
      顶部广告关闭
      */
      $("#closetop").on("click", function () {
        $(".top").hide();
      });
    });
    /*
    	分类导航
    */
    $.ajax({ url: "http://localhost:8080/js/json.json", type: "get", dataType: "json", context: document.body, success: function success(data) {
        $(".topnav_l01_menu").append(temp(resources.category, data));
        $(".topnav_l01_menu dl").on("mouseover", function () {
          $(".nav-aside").hide();
          $(".topnav_l01_menu dl").removeClass("current");
          $(this).addClass("current");
          $(this).find(".nav-aside").show();
          $(this).on("mouseout", function () {
            $(".topnav_l01_menu dl").removeClass("current");
            $(".nav-aside").hide();
          });
        });
      } });
  });
});