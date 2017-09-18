"use strict";

require(["config"], function () {
  require(["common"], function ($, router, temp, resources) {
    /*
      banner滚动
    */
    window.onload = function () {
      new ScrollImg({
        "boxid": "container",
        animation: true,
        nav: true,
        handle: true,
        "speed": 3000
      });
    };
  });
});