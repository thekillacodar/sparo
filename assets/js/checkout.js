
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Add event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      // Check if at least one checkbox is checked
      const checkedCount = Array.from(checkboxes).filter((cb) => cb.checked).length;
      if (checkedCount > 0) {
        // Show the checkout button
        document.getElementById('checkout-button-container').style.display = 'block';
      } else {
        // Hide the checkout button
        document.getElementById('checkout-button-container').style.display = 'none';
      }
    });
  });
  
  // Add event listener to the checkout button
  document.getElementById('checkout-button').addEventListener('click', () => {
    // Get all selected cards
    const selectedCards = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const card = checkbox.closest('.card-doctor');
        selectedCards.push(card);
      }
    });
  
    // Display the selected cards in the modal window
    const modalBody = document.getElementById('selected-cards-list');
    modalBody.innerHTML = '';
    selectedCards.forEach((card) => {
      const cardHTML = `
        <div class="card-doctor">
          <div class="header">
            <img src="${card.querySelector('img').src}" alt="">
          </div>
          <div class="body">
            <p class="text-xl mb-0">${card.querySelector('.body p').textContent}</p>
            <span class="text-sm text-grey">${card.querySelector('.body span').textContent}</span>
          </div>
        </div>
      `;
      modalBody.appendChild(htmlToElement(cardHTML));
    });
  
    // Show the modal window
    $('#selected-cards-modal').modal('show');
  });
  
  // Add event listener to the checkout button 2
  document.getElementById('checkout-button2').addEventListener('click', () => {
    // Gather the selected items
    const selectedItems = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const card = checkbox.closest('.card-doctor');
        selectedItems.push({
          name: card.querySelector('.body p').textContent,
          price: card.querySelector('.body span').textContent,
        });
      }
    });
  
    // Send the selected items as a list to WhatsApp
    const whatsappNumber = '09164156732';
    const whatsappMessage = `Order: ${selectedItems.map((item) => `${item.name} - ${item.price}`).join(', ')}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`);
  });
  
  // Helper function to convert HTML string to element
  function htmlToElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
  }
  