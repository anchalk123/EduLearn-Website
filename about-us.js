        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

     
        const appointmentModal = document.getElementById('appointmentModal');
        const closeModal = document.getElementById('closeModal');
        const appointmentForm = document.getElementById('appointmentForm');

        const openModalFunc = () => {
            appointmentModal.classList.add('active');
            navLinks.classList.remove('open');
        };

        document.getElementById('desktopAppointmentBtn').addEventListener('click', openModalFunc);
        document.getElementById('mainAppointmentBtn').addEventListener('click', openModalFunc);

        closeModal.addEventListener('click', () => {
            appointmentModal.classList.remove('active');
        });

        appointmentModal.addEventListener('click', (e) => {
            if(e.target === appointmentModal) {
                appointmentModal.classList.remove('active');
            }
        });

        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your appointment request has been submitted successfully.');
            appointmentModal.classList.remove('active');
            appointmentForm.reset();
        });
   