document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq_item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq_header');
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      if (isActive) {
        item.classList.remove('active');
      } else {
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        setTimeout(() => {
          item.classList.add('active');
        }, 10); }
    });
  });
});