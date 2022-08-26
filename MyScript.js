    function openMenu(menuName) {       
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("table-content");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }


        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(menuName).style.display = "block";

    }

    function collapse(menuNum) {
        const elements = document.getElementsByClassName('collapsible');
        let i;

        elements[menuNum].classList.toggle("active");
        const content = elements[menuNum].nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    }