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

    projects = [
        {
            "name": "Ask My AI",
            "company": "Arbisoft", 
            "year": "Mar 2023 - Oct 2023", 
            "details": "askmyai"
        },
        {
            "name": "Reki Movie Recommendations",
            "company": "Arbisoft", 
            "year": "Aug 2023 - Oct 2023", 
            "details": "reki"
        },
        {
            "name": "Outset Style",
            "company": "Toptal", 
            "year": "Sep 2023 - Feb 2024", 
            "details": "outset"
        },
        {
            "name": "CodeKer - Arbisoft",
            "company": "Arbisoft", 
            "year": "Jul 2023 - Feb 2024", 
            "details": "codeker"
        },
        {
            "name": "Menus Recipe - Burger Index",
            "company": "Arbisoft", 
            "year": "Jan 2024 - Present", 
            "details": "menu"
        },
        {
            "name": "Call-Analyzer Bearsight.io",
            "company": "Toptal", 
            "year": "Aug 2023 - Jan 2024", 
            "details": "callanalyzer"
        },
        {
            "name": "Store Matching - Burger Index",
            "company": "Arbisoft", 
            "year": "December 2023 - Present", 
            "details": "storematching"
        },
        {
            "name": "Product Matching - Burger Index",
            "company": "Arbisoft", 
            "year": "Jan 2024 - Present", 
            "details": "productmatching"
        },
        {
            "name": "Retail Products Extraction – Burger Index",
            "company": "Arbisoft", 
            "year": "September 2023 - Jan 2024", 
            "details": "productextraction"
        },
        {
            "name": "Type 2 Diabetes Prediction Using Routine EHR Data",
            "company": "CureMD", 
            "year": "Jul 2021 - Jan 2023", 
            "details": "diabetes"
        },
        {
            "name": "Face ID Patient Tracking",
            "company": "CureMD", 
            "year": "Oct 2021 - Jan 2023", 
            "details": "face"
        },
        {
            "name": "Smart Recruit",
            "company": "CureMD", 
            "year": "Jan 2022 - Feb 2023", 
            "details": "smart"
        },
        {
            "name": "MD – Appointment Scheduling",
            "company": "CureMD", 
            "year": "Aug 2021 - May 2022", 
            "details": "appointment"
        },
        {
            "name": "Common Black College Application",
            "company": "Toptal", 
            "year": "Jun 2023 - Sep 2023", 
            "details": "college"
        },
        {
            "name": "MD – Clinical Assistance Recommendation System",
            "company": "CureMD", 
            "year": "May 2021 - Jan 2022", 
            "details": "clinical"
        },
        {
            "name": "MD – Medication Sig Recommendation System",
            "company": "CureMD", 
            "year": "Feb 2021 - Dec 2021", 
            "details": "sig"
        },
        {
            "name": "MD – Billing Form Data Migration",
            "company": "CureMD", 
            "year": "Oct 2020 - Mar 2021", 
            "details": "form"
        },
        {
            "name": "MD – Intelligent Customer Service Quality Control",
            "company": "CureMD", 
            "year": "Oct 2021 - Jan 2021", 
            "details": "support"
        },
        {
            "name": "NOVATRAQ",
            "company": "Nextbridge", 
            "year": "Sep 2019 - Oct 2020", 
            "details": "nova"
        },
        {
            "name": "FUNDINGTRAQ",
            "company": "Nextbridge", 
            "year": "Sep 2019 - Oct 2020", 
            "details": "fund"
        },
        {
            "name": "Self-Service Terminal",
            "company": "Nextbridge", 
            "year": "Mar 2019 - Sep 2019", 
            "details": "self"
        },
        {
            "name": "NextHRM",
            "company": "Nextbridge", 
            "year": "Jan 2019 - Jul 2019", 
            "details": "hrm"
        },
        {
            "name": "HealthCare IoT",
            "company": "Nextbridge", 
            "year": "Oct 2018 - Dec 2018", 
            "details": "iot"
        },
        {
            "name": "Vicenna - HealthCloud",
            "company": "Techlogix", 
            "year": "Aug 2017 - May 2018", 
            "details": "health"
        },
        {
            "name": "Pharmacist.com.pk",
            "company": "Artificial Intelligence and Multidisciplinary (AIM) Research Laboratory", 
            "year": "Jun 2016 - Jul 2017", 
            "details": "pharma"
        },
        {
            "name": "Efficient CRNN: A Novel Approach for Low Resource Urdu Text Recognition",
            "company": "Independent Research", 
            "year": "December 2021 - December 2023", 
            "details": "crnn"
        },
        {
            "name": "MMU-OCR-20",
            "company": "M.Phils Thesis", 
            "year": "September 2019 - Jul 2020", 
            "details": "mmu"
        },
        {
            "name": "Bird Species Classifier",
            "company": "Freelance", 
            "year": "Jan 2019 - Jul 2019", 
            "details": "bird"
        },
        {
            "name": "KendoGridFASMS (Kendo-Grid-Filtering-Aggregation-Sorting-Mapping-Server)",
            "company": "Open Source", 
            "year": "Nov 2019 - Present", 
            "details": "fasms"
        },
    ]

    container = document.body.querySelector('#projectsContainer');
    projects.forEach(element => {
        sourceHTML = `<div class="d-flex flex-column flex-md-row justify-content-between mb-2">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"><a href="${projectDetailsLink + element.details}">${element.name}</a></h3>
                            <div class="subheading mb-2">${element.company}</div>
                        </div>
                        <div class="flex-shrink-0 mb-5"><span class="text-primary">${element.year}</span></div>
                    </div><hr/>`
        container.innerHTML += sourceHTML;
    }); 

});

