
window.addEventListener('load', function () {


    var form = document.getElementById('customs-form'),
        submit = document.getElementById('submit');

    if (form) {

        form.addEventListener('submit', function () {

            submit.disabled = 'true';
            submit.textContent = 'Sending Request...'

            return false;
        });
    }
});
