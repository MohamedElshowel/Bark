const animationTime = 300;

/**
 * @description Bind Sign Up and Close Buttons Actions to open/close the sign up pop-up
 */
function bindSignUpActions() {
    // Sign Up Button in Landing Page
    $("#landing--sign-up-btn").click(() => {
        $("#sign-up-component").css("height", 0);
        $("#sign-up-component").show();
        $("#sign-up-component").animate({
            height: "100%"
        }, animationTime);
    });

    // Close Button in the Sign Up Pop-Up
    $(".sign-up--controller--close-btn").click(() => {
        $("#sign-up-component").animate({
            height: 0
        }, animationTime, () => {
            $("#sign-up-component").hide();
            $("#sign-up-component").css("height", "100%");
        });
    });

    // Sign Up Button in the Sign Up Pop-Up
    $(".sign-up--controller--btn").click(() => {
        $("#sign-up-component").animate({
            height: 0,
        }, animationTime, () => {
            $("#sign-up-component").hide();
            $("#sign-up-component").css("height", "100%");
        });
    });
}