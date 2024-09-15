
console.log("this is console");


const banners = document.querySelector('.banners');
const page_element = document.querySelectorAll('.banner');
const page_width = 1540;
let current_index = 0;
let all_banners = page_element.length;

const first_clone = page_element[0].cloneNode(true);
banners.appendChild(first_clone);
all_banners++;

function page_image() {
    current_index++;

    page_element.forEach((banner, index) => {
        if (index === current_index) {
            banner.classList.add('active');
        } else {
            banner.classList.remove('active');
        }
    });

    banners.style.transform = `translateX(-${current_index * page_width}px)`;

    if (current_index === all_banners - 1) {
        setTimeout(() => {
            banners.style.transition = 'none';
            current_index = 0;
            banners.style.transform = `translateX(0)`;

            setTimeout(() => {
                banners.style.transition = 'transform 1s ease-in-out';
            }, 20);
        }, 1000);
    }
}

setInterval(page_image, 5000);

page_element[0].classList.add('active');
