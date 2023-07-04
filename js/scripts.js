import projects from './assets/projects.json' assert { type: 'json' };

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Append the projects to the project section
    projectDetailsLink = 'details#'

    container = document.body.querySelector('#projectsContainer');
    projects.forEach(element => {
        sourceHTML = `<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"><a href="${projectDetailsLink + element.details}">${element.name}</a></h3>
                            <div class="subheading mb-3">${element.company}</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">${element.year}</span></div>
                    </div>`
        container.innerHTML += sourceHTML;
    }); 

});
