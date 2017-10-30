
$(document).ready(function(){
    $('.js-datepicker').datetimepicker({
        viewMode: 'years',
        format: 'DD/MM/YYYY',
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down",
            next: "fa fa-chevron-right",
            previous: "fa fa-chevron-left"
        }
    });
})