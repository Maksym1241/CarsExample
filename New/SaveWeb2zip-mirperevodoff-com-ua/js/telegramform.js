function showGoodMessage(text) {
    let messageGood = $('.good');
    messageGood.html(text).removeClass('hidden');
    setTimeout(() => {
        messageGood.html("").addClass('hidden');
    }, 4000);
}

function showBadMessage(text) {
    let messageBad = $('.bad');
    messageBad.html(text).removeClass('hidden');
    setTimeout(() => {
        messageBad.html("").addClass('hidden');
    }, 4000);
}

$(document).ready(function($) {
    $("#upload-form").submit(function(event) {
        event.preventDefault();
        let form = $(this);
        let fd = new FormData(form[0]);
        $.ajax({
            url: form.attr('action'),
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            beforeSend: () => {
                $(".preloader").removeClass("hidden");
            },
            success: function success(res) {
                $(".preloader").addClass("hidden");
                let respond = $.parseJSON(res);
                if (respond.status === "SUCCESS") {
                    showGoodMessage(respond.message);
                    form.trigger("reset");
                } else {
                    showBadMessage(respond.message);
                }
            },
            error: function error(res) {
                form.trigger("reset");
                $(".preloader").addClass("hidden");
            }
        });
    });
});