function binMenuActions() {
    $(".nav--menu-icon").click(openMenu);
    $(".nav--close-icon").click(closeMenu);
}

function openMenu() {
    $("header nav").addClass("nav--block-screen");
    $(".nav--pages").css("height", 0);
    $(".nav--pages").css("display", "flex");
    $(".nav--pages").animate({
        height: "100%"
    }, 500);
    $(".nav--close-icon").show();
    $(".nav--menu-icon").hide();
}

function closeMenu() {
    $(".nav--pages").animate({
        height: 0,
    }, 500, () => {
        $(".nav--pages").hide();
        $(".nav--pages").css("height", "100%");
    });
    $("header nav").removeClass("nav--block-screen");
    $(".nav--close-icon").hide();
    $(".nav--menu-icon").show();
}