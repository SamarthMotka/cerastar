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

// dynamicall adding cards

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".portfolio-items");
  
    // Define an array of card data
    const cardData = [
      {
        imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadUrl: "#",
        viewUrl: "#"
      },
      // Add more card data objects as needed
    ];
  
    // Function to create a card element
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.querySelector(".portfolio-items");
    
        // Define an array of card data
        const cardData = [
            {
                imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
                viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
                category: "category-name" // Add your category name here
            },
            {
                imageUrl: "https://res.cloudinary.com/da5crwlqh/image/upload/v1718292543/Khoj/Wearables/Kids/luaca1bx8ocn7ho6st9r.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                downloadUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
                viewUrl: "../media/products/pdf/Glossy_800x1600MM.pdf",
                category: "category-name" // Add your category name here
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
            cardData.forEach((data) => {
                const cardElement = createCard(data);
                container.appendChild(cardElement);
            });
        }
    
        // Initialize the cards
        initCards();
    });
})


function toggleModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.toggle('active');
}
