const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  item.addEventListener("mouseenter", () => {

    // Close all FAQ items
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    // Open the item under the cursor
    item.classList.add("active");

  });

});
