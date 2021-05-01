import "./sass/style.scss";
import "./css/style.css";
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "@fortawesome/fontawesome-free/js/all";
import "jquery-validation";
$(document).ready(function () {
    console.log('asd');
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('showme');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).removeClass('showme');
            }
        });
    });
    $(".login-validation").validate();
});