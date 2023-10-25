var Sfc = (function () {
  "use strict";

  var handleMetisMenu = function () {
    if (jQuery("#menu").length > 0) {
      $("#menu").metisMenu();
    }
    jQuery(".metismenu > .mm-active ").each(function () {
      if (!jQuery(this).children("ul").length > 0) {
        jQuery(this).addClass("active-no-child");
      }
    });
  };

  var handleCurrentActive = function () {
    for (
      var nk = window.location,
        o = $("ul#menu a")
          .filter(function () {
            return this.href == nk;
          })
          .addClass("mm-active")
          .parent()
          .addClass("mm-active");
      ;

    ) {
      if (!o.is("li")) break;

      o = o.parent().addClass("mm-show").parent().addClass("mm-active");
    }
  };

  /* Function ============ */
  return {
    init: function () {
      handleMetisMenu();
      handleCurrentActive();
    },
  };
})();

/* Document.ready Start */
jQuery(document).ready(function () {
  $('[data-toggle="popover"]').popover();
  ("use strict");
  Sfc.init();
});

var Sfc2 = (function () {
  "use strict";

  var handleMetisMenu = function () {
    if (jQuery("#menu2").length > 0) {
      $("#menu2").metisMenu();
    }
    jQuery(".metismenu > .mm-active ").each(function () {
      if (!jQuery(this).children("ul").length > 0) {
        jQuery(this).addClass("active-no-child");
      }
    });
  };

  var handleCurrentActive = function () {
    for (
      var nk = window.location,
        o = $("ul#menu2 a")
          .filter(function () {
            return this.href == nk;
          })
          .addClass("mm-active")
          .parent()
          .addClass("mm-active");
      ;

    ) {
      if (!o.is("li")) break;

      o = o.parent().addClass("mm-show").parent().addClass("mm-active");
    }
  };

  /* Function ============ */
  return {
    init: function () {
      handleMetisMenu();
      handleCurrentActive();
    },
  };
})();

/* Document.ready Start */
jQuery(document).ready(function () {
  $('[data-toggle="popover"]').popover();
  ("use strict");
  Sfc2.init();
});

