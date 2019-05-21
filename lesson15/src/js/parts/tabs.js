function tabs() {
    function tabs(tabsTitle, tabsWrapper, tabsContent) {

        let tab = document.getElementsByClassName(tabsTitle),
            info = document.getElementsByClassName(tabsWrapper)[0],
            tabContent = document.getElementsByClassName(tabsContent);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains(tabsTitle)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    tabs('info-header-tab', 'info-header', 'info-tabcontent');
}

module.exports = tabs;