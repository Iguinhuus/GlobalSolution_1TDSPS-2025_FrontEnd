document.addEventListener('DOMContentLoaded', () => {
    
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                header.querySelector('span').textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('span').textContent = '-';
            }
        });
    });

 
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            if (nome === '' || email === '') {
                alert('Preencha os campos obrigatórios.');
                return;
            }
            alert(`Mensagem de ${nome} enviada!`);
            form.reset();
        });
    }

   
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});