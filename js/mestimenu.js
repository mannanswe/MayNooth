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

// Profile Page JS Code
// Profile Page JS Code
// form open
const openPassForm = document.getElementById("openPassForm");
const formContainer = document.getElementById("formContainer");
const closeButton = document.getElementById("closeButton");
function toggleForm() {
  formContainer.classList.toggle("hidden");
}
openPassForm.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

// form open with margin

const openForm = document.getElementById("openForm");
const openFormContainer = document.getElementById("openFormContainer");
const openFormClose = document.getElementById("openFormClose");

openForm.addEventListener("click", function () {
  openFormContainer.classList.toggle("hidden");
  if (!openFormContainer.classList.contains("hidden")) {
    document.getElementById("otherDiv").classList.add("with-margin");
  } else {
    document.getElementById("otherDiv").classList.remove("with-margin");
  }
});

openFormClose.addEventListener("click", function () {
  openFormContainer.classList.add("hidden");
  document.getElementById("otherDiv").classList.remove("with-margin");
});
// End Profile Page JS Code
// End Profile Page JS Code
