

// dynamicall adding cards



const cardData = [
    {
        imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
        description: "600 x600",
        downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        category: "60" // Add your category name here
    },
    {
        imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        category: "12" // Add your category name here
    },
    {
        imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        category: "24" // Add your category name here
    },
    {
        imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        category: "16" // Add your category name here
    },
    {
        imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        category: "16" // Add your category name here
    },
    {
        imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
        category: "16" // Add your category name here
    },
    // Add more card data objects as needed
];

// Function to create a card element
function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("col-lg-3", "col-md-6", "portfolio-item", "isotope-item", "item", cardData.category);

    const cardContent = `
        <div class="portfolio-content">
            <img src="${cardData.imageUrl}" class="img-fluid" alt="">
        </div>
        <div class="desc-pdf text-center">
            <p class="mt-4 ">${cardData.description}</p>
        </div>
        <div class="display-btn">
            <a href="${cardData.downloadUrl}" download="filename.pdf">DOWNLOAD</a>
            <a href="${cardData.viewUrl}" target="_blank" class="view-pdf">VIEW</a>
        </div>
    `;
    card.innerHTML = cardContent;

    return card;
}

// Function to initialize the cards
function initCards() {
    const container = document.getElementById('portfolioo'); // Define the container variable here
    cardData.forEach((data) => {
        const cardElement = createCard(data);
        container.appendChild(cardElement);
    });
}

// Initialize the cards once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initCards);


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
    const modal = document.getElementById('contactModal');
    modal.classList.toggle('active');
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

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbarr");
    
    window.onscroll = function() {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };
});