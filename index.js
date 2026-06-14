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

        
        const statsSection = document.getElementById('statsSection');
        const counters = document.querySelectorAll('.counter');
        let counterActivated = false;

        function startCounters() {
            counters.forEach(counter => {
                counter.innerText = '0';
                const target = +counter.getAttribute('data-target');
                const increment = target / 50; 

                const updateCounter = () => {
                    const count = +counter.innerText.replace('k+', '').replace('+', '');
                    if (count < target) {
                        let nextValue = Math.ceil(count + increment);
                        if (nextValue >= target) {
                            counter.innerText = target === 3000 ? '3k+' : target + '+';
                        } else {
                            counter.innerText = nextValue;
                            setTimeout(updateCounter, 25);
                        }
                    } else {
                        counter.innerText = target === 3000 ? '3k+' : target + '+';
                    }
                };
                updateCounter();
            });
        }

        window.addEventListener('scroll', () => {
            if (!counterActivated && statsSection) {
                const sectionPos = statsSection.getBoundingClientRect().top;
                const screenPos = window.innerHeight / 1.2;
                if (sectionPos < screenPos) {
                    startCounters();
                    counterActivated = true;
                }
            }
        });
