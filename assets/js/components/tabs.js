document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function switchTab(tabId) {
      tabContents.forEach(content => {
        content.classList.add('hidden');
      });
      
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      document.getElementById(tabId).classList.remove('hidden');
      
      document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    }
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        switchTab(tabId);
      });
    });
    switchTab('forex');
  });