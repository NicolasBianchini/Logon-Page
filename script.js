const passwordInput = document.getElementById('password');
        const togglePasswordButton = document.getElementById('toggle-password');
        const eyeIcon = togglePasswordButton.querySelector('i');

        togglePasswordButton.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Icone para ver senha
            if (type === 'password') {
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        });

const passwordInput1 = document.getElementById('password2');
    const togglePasswordButton1 = document.getElementById('toggle-password2');
    const eyeIcon1 = togglePasswordButton.querySelector('i');

    togglePasswordButton1.addEventListener('click', function () {
        const type = passwordInput1.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput1.setAttribute('type', type);

            // Icone para ver senha
            if (type === 'password') {
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            var dateInput = document.getElementById('date');
        
            dateInput.addEventListener('input', function() {
                if (dateInput.value) {
                    dateInput.classList.add('has-value');
                } else {
                    dateInput.classList.remove('has-value');
                }
            });
        });
        