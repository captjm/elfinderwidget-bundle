export class ELFinderWidget {
    constructor() {
        window.setValue = function (value, element_id) {
            document.querySelector(`[data-type="elfinder-input-field"][id="${element_id}"]`).value = value;
            document.getElementById(`${element_id}thumbnail`).src = value;
            document.querySelector(`#ea-lightbox-${element_id} img`).src = value;
        }
    }
    init() {
        document.querySelectorAll('.elfinder-widget').forEach((w)=>{
            w.querySelector('.browse-btn').onclick = () => {
                window.open(`${w.dataset.path}?id=${w.dataset.id}`, "popupWindow", "height=450, width=900");
            }
        });
    }
}

export const elFinderWidget = new ELFinderWidget();
addEventListener('DOMContentLoaded', (event) => {
    elFinderWidget.init();
});