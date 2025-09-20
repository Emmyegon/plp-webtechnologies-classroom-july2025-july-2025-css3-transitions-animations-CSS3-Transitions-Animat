   const cards = document.querySelectorAll('.card');
        const pulseBtn = document.getElementById('pulseBtn');
        const shakeBtn = document.getElementById('shakeBtn');
        const flipBtn = document.getElementById('flipBtn');
        const resetBtn = document.getElementById('resetBtn');
        
        // Function to remove all animation classes
        function removeAnimations() {
            cards.forEach(card => {
                card.classList.remove('pulse', 'shake', 'flip');
            });
        }
        
        // Function to apply animation to all cards
        function animateCards(animationName) {
            // Remove any existing animations first
            removeAnimations();
            
            // Apply the new animation to each card with a delay
            cards.forEach((card, index) => {
                // Using setTimeout to create a staggered effect
                setTimeout(() => {
                    card.classList.add(animationName);
                }, index * 100);
            });
        }
        
        // Function to handle the pulse animation
        function handlePulseAnimation() {
            animateCards('pulse');
        }
        
        // Function to handle the shake animation
        function handleShakeAnimation() {
            animateCards('shake');
        }
        
        // Function to handle the flip animation
        function handleFlipAnimation() {
            animateCards('flip');
        }
        
        // Function to reset all animations
        function resetAnimations() {
            removeAnimations();
        }
        
        // Function to handle card clicks - demonstrates parameters and return values
        function setupCardClicks() {
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    // Toggle a highlight effect on the card
                    toggleCardHighlight(this);
                });
            });
        }
        
        // Function to toggle card highlight - demonstrates parameters and return values
        function toggleCardHighlight(cardElement) {
            // Check if the card is already highlighted
            const isHighlighted = cardElement.classList.contains('highlighted');
            
            if (isHighlighted) {
                cardElement.classList.remove('highlighted');
                cardElement.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                return false; // Return value indicating card is not highlighted
            } else {
                cardElement.classList.add('highlighted');
                cardElement.style.boxShadow = '0 10px 30px rgba(46, 204, 113, 0.6)';
                return true; // Return value indicating card is highlighted
            }
        }
        
        // Function to initialize event listeners
        function initEventListeners() {
            pulseBtn.addEventListener('click', handlePulseAnimation);
            shakeBtn.addEventListener('click', handleShakeAnimation);
            flipBtn.addEventListener('click', handleFlipAnimation);
            resetBtn.addEventListener('click', resetAnimations);
            
            // Setup card click events
            setupCardClicks();
            
            // Add hover effect to control buttons using JavaScript
            const controlBtns = document.querySelectorAll('.control-btn');
            controlBtns.forEach(btn => {
                btn.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                });
                
                btn.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
        }
        
        // Initialize the application
        function init() {
            initEventListeners();
        }
        
        // Start the application when the DOM is loaded
        document.addEventListener('DOMContentLoaded', init);