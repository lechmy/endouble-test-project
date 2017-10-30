$(document).on('click', '.js-file-upload', function(){
    $('.js-hidden-file-input[name="'+ $(this).data('name') +'"]').click();
})


$(document).on('focus', '.js-personal-info-field', function(){
    $(this).removeClass('valid invalid');
});

$(document).on('blur', '.js-personal-info-field', function(){
    if($(this).val() != ""){
        $(this).addClass('valid');
        return;
    }
    $(this).addClass('invalid');
});

$(document).on('change', '.js-hidden-file-input', function(){
    var file = $(this).val();
    var extension = file.split(".");
    extension = extension[extension.length - 1]
    switch(extension){
        case "doc":
        case "docx":
        case "pdf":
        case "txt":
        case "rtf":
            fileUpload();
            break;
        
        default:
            $('.js-file-error-message').removeClass('active');
            $('.js-file-error-message').text('Incorect '+ $(this).attr('name') +' file format').addClass('active');
            $(this).val(null);
            break;
    }
})

function fileUpload(){
    $('.js-file-error-message').removeClass('active');
    alert('bravo');
}