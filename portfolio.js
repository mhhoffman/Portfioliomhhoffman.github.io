document.addEventListener('DOMContentLoaded', function () {
    // Navbar
    var navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {

            document.body.classList.remove('fade-in');
            var contentId = this.getAttribute('data-target');

            
            hideAllContentSections();

            
            setTimeout(function () {
                showContent(contentId);
                addFadeInClass();
            }, 1000);
        });
    });

    function hideAllContentSections() {
        var contentSections = document.querySelectorAll('.content-section');
        contentSections.forEach(function (section) {
            section.style.display = 'none';
        });
    }

    function showContent(contentId) {
        var selectedContent = document.getElementById(contentId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    }

    // Fade
    function addFadeInClass() {
        document.body.classList.add('fade-in');
    }
    
    addFadeInClass();
});

