// dynamicall adding cards

const cardData = [
    {
        imageUrl:
            "../media/products/download jpg/Glossy_800x1600MM-images-7.jpg",
        description: "PGVT 600 x 600",
        downloadUrl:
            "https://cerastar.s3.ap-south-1.amazonaws.com/s3/WL_PGVT-3_Staturio_600x600mm.pdf",
        viewUrl:
            "https://cerastar.s3.ap-south-1.amazonaws.com/s3/WL_PGVT-3_Staturio_600x600mm.pdf",
        category: "60", // Add your category name here
    },
    {
        imageUrl:
            "../media/products/download jpg/Glossy_800x1600MM-images-63.jpg",
        description: "WL 600 x 600",
        downloadUrl:
            "https://cerastar.s3.ap-south-1.amazonaws.com/s3/WL_3D+Series_600x600mm.pdf",
        viewUrl:
            "https://cerastar.s3.ap-south-1.amazonaws.com/s3/WL_3D+Series_600x600mm.pdf",
        category: "60", // Add your category name here
    },
    {
        imageUrl:
            "../media/products/download jpg/Glossy_800x1600MM-images-53.jpg",
        description: "Rainbow 600 x 1200",
        downloadUrl:
            "https://cerastar.s3.ap-south-1.amazonaws.com/s3/High+Gloss_800x1600+MM.pdf",
        viewUrl:
            "https://cerastar.s3.ap-south-1.amazonaws.com/s3/High+Gloss_800x1600+MM.pdf",
        category: "12", // Add your category name here
    },
    {
        imageUrl:
            "../media/products/download jpg/Glossy_800x1600MM-images-65.jpg",
        description: "12 x 24",
        downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        category: "24", // Add your category name here
    },
    // Add more card data objects as needed
];

function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add(
        "col-lg-3",
        "col-md-6",
        "portfolio-item",
        "isotope-item",
        "item",
        cardData.category
    );

    const cardContent = `
        <div class="portfolio-content">
            <img src="${cardData.imageUrl}" class="img-fluid" alt="">
        </div>
        <div class="desc-pdf text-center">
            <p class="mt-4 ">${cardData.description}</p>
        </div>
        <div class="display-btn">



            <a href="${cardData.downloadUrl}" download="demo.pdf" >DOWNLOAD</a>
            <a href="${cardData.viewUrl}" target="_blank" class="view-pdf">VIEW</a>
        </div>
    `;
    card.innerHTML = cardContent;

    return card;
}

// document.body.appendChild(createCard(cardData));

// Function to initialize the cards
function initCards() {
    const container = document.getElementById("portfolioo"); // Define the container variable here
    cardData.forEach((data) => {
        const cardElement = createCard(data);
        container.appendChild(cardElement);
    });
}

// Initialize the cards once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initCards);

// filter buttons

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            portfolioItems.forEach((item) => {
                if (
                    filterValue === "all" ||
                    item.classList.contains(filterValue)
                ) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Toggle active class for buttons
            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        });
    });
});

function toggleModal() {
    const modal = document.getElementById("contactModal");
    modal.classList.toggle("active");
}

// preloader

var preloadTime;

function preloader() {
    preloadTime = setTimeout(showPage, 3000); // Adjust the timeout as needed
}

function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// on scroll change navbar bg

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbarr");
    var chg_size = document.getElementById("logo-sz");

    window.onscroll = function () {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
            chg_size.classList.add("change-size");
        } else {
            navbar.classList.remove("scrolled");
            chg_size.classList.remove("change-size");
        }
    };
});

/**
 * Portfolio details slider
 */
new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});

// zoom product

// const lens = document.querySelector(".magnify");
// const product_img = document.querySelectorAll(".zoom");
// const magnified_img = document.querySelector(".magnified");

// zoomImages.forEach((product_img) => {
//     product_img.addEventListener("mousemove", (e) => moveLens(e, product_img));
//     product_img.addEventListener("mouseout", leaveLens);
// });

// // function magnify(product_image, magnify) {
// //     lens.addEventListener("mousemove", moveLens);
// //     product_img.addEventListener("mousemove", moveLens);
// //     lens.addEventListener("mouseout", leaveLens);
// // }

const lens = document.querySelector(".magnify");
const magnified_img = document.querySelector(".magnified");
const zoomImages = document.querySelectorAll(".zoom");

zoomImages.forEach((product_img) => {
    product_img.addEventListener("mousemove", (e) => moveLens(e, product_img));
    product_img.addEventListener("mouseout", leaveLens);
});

function moveLens(e,product_img) {
    const product_image_rect = product_img.getBoundingClientRect();

    let x, y, cx, cy;
    x = e.pageX - product_image_rect.left - lens.offsetWidth / 2;
    y = e.pageY - product_image_rect.top - lens.offsetHeight / 2;

    let max_xpos = product_image_rect.width - lens.offsetWidth;
    let max_ypos = product_image_rect.height - lens.offsetHeight;

    if (x > max_xpos) x = max_xpos;
    if (x < 0) x = 0;

    if (y > max_ypos) y = max_ypos;
    if (y < 0) y = 0;

    lens.style.cssText = `top: ${y}px; left: ${x}px`;

    cx = magnified_img.offsetWidth / lens.offsetWidth;
    cy = magnified_img.offsetHeight / lens.offsetHeight;

    magnified_img.style.cssText = `
                background : url('${product_img.src}')
                -${x * cx}px -${y * cy}px /
                ${product_image_rect.width * cx}px ${
        product_image_rect.height * cy
    }px
                no-repeat
    `;
    lens.classList.add("active");
    magnified_img.classList.add("active");
}

function leaveLens() {
    lens.classList.remove("active");
    magnified_img.classList.remove("active");
}

magnify(product_img, magnify);
