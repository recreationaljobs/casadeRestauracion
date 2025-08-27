 // JavaScript para el menú móvil
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav');
            
            if (menuToggle) {
                menuToggle.addEventListener('click', function() {
                    nav.classList.toggle('active');
                    
                    // Cambiar icono
                    const icon = this.querySelector('i');
                    if (nav.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            }
            
            // Cerrar menú al hacer clic en un enlace
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    nav.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
            });
            // Control de video
            const video = document.getElementById('heroVideo');
            const playPauseBtn = document.getElementById('playPauseBtn');
            const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');
            if (playPauseBtn) {
                playPauseBtn.addEventListener('click', function() {
                    if (video.paused) {
                        video.play();
                        this.innerHTML = '<i class="fas fa-pause"></i>';
                    } else {
                        video.pause();
                        this.innerHTML = '<i class="fas fa-play"></i>';
                    }
                });
            }
            if (muteUnmuteBtn) {
                muteUnmuteBtn.addEventListener('click', function() {
                    if (video.muted) {
                        video.muted = false;
                        this.innerHTML = '<i class="fas fa-volume-up"></i>';
                    } else {
                        video.muted = true;
                        this.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    }
                });
            }
        });