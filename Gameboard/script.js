var main = function () {
  $(".notification").on("click", () => {
    $(event.currentTarget).toggleClass("active");
  });

  $(".more-btn").on("click", () => {
    $(event.currentTarget).next().toggle();
  });

  $(".share").on("click", () => {
    $(event.currentTarget).next().toggle();
  });
};

$(document).ready(main);