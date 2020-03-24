const animationTime = 300;

/**
 * @description Bind Sign Up and Close Buttons Actions to open/close the sign up pop-up
 */
function bindSignUpActions() {
    // Sign Up Button in Landing Page
    $("#landing--sign-up-btn").click(openSignUpForm);
    // Sign Up Button in Footer - Contact
    $(".links--contact--sign-up").click(openSignUpForm);
    // Close Button in the Sign Up Pop-Up
    $(".sign-up--close-btn").click(closeSignUpForm);
    // Sign Up Button in the Sign Up Pop-Up
    $(".sign-up--controller--btn").click(closeSignUpForm);
}


function openSignUpForm() {
    $("#sign-up-component").css("height", 0);
    $("#sign-up-component").show();
    $("#sign-up-component").animate({
        height: "100%"
    }, animationTime);
}

function closeSignUpForm() {
    $("#sign-up-component").animate({
        height: 0,
    }, animationTime, () => {
        $("#sign-up-component").hide();
        $("#sign-up-component").css("height", "100%");
    });
}