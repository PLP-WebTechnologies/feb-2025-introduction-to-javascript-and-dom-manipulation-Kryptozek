// Wait for the DOM to be fully loaded before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Text Manipulation Section
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    const textOptions = [
        'JavaScript makes websites interactive and dynamic!',
        'DOM manipulation allows us to change content on the fly.',
        'With JS, we can respond to user actions in real-time.',
        'Learning JavaScript opens up endless possibilities!'
    ];
    
    let currentTextIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        // Change the text content
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        
        // Add animation effect
        dynamicText.style.opacity = '0';
        
        setTimeout(function() {
            dynamicText.textContent = textOptions[currentTextIndex];
            dynamicText.style.opacity = '1';
        }, 300);
    });
    
    // Style Manipulation Section
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    const changeSizeBtn = document.getElementById('change-size-btn');
    const changeShapeBtn = document.getElementById('change-shape-btn');
    
    const colors = ['#ff6b6b', '#48dbfb', '#1dd1a1', '#f368e0', '#ff9f43'];
    let currentColorIndex = 0;
    let isLarge = false;
    let isRound = false;
    
    changeColorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        colorBox.style.backgroundColor = colors[currentColorIndex];
    });
    
    changeSizeBtn.addEventListener('click', function() {
        if (isLarge) {
            colorBox.style.width = '100px';
            colorBox.style.height = '100px';
        } else {
            colorBox.style.width = '150px';
            colorBox.style.height = '150px';
        }
        isLarge = !isLarge;
    });
    
    changeShapeBtn.addEventListener('click', function() {
        if (isRound) {
            colorBox.style.borderRadius = '0';
        } else {
            colorBox.style.borderRadius = '50%';
        }
        isRound = !isRound;
    });
    
    // Element Manipulation Section
    const itemList = document.getElementById('item-list');
    const newItemInput = document.getElementById('new-item-input');
    const addItemBtn = document.getElementById('add-item-btn');
    const charCount = document.getElementById('char-count');
    
    // Set up delete buttons for existing items
    setupDeleteButtons();
    
    // Add new item
    addItemBtn.addEventListener('click', function() {
        addNewItem();
    });
    
    // Allow pressing Enter to add item
    newItemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addNewItem();
        }
    });
    
    // Update character count when typing
    newItemInput.addEventListener('input', function() {
        charCount.textContent = newItemInput.value.length;
    });
    
    function addNewItem() {
        const newItemText = newItemInput.value.trim();
        
        if (newItemText) {
            // Create new list item
            const li = document.createElement('li');
            
            // Create text content
            const textNode = document.createTextNode(newItemText);
            li.appendChild(textNode);
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            
            // Add delete button to list item
            li.appendChild(deleteBtn);
            
            // Add list item to the list with animation
            li.style.opacity = '0';
            itemList.appendChild(li);
            
            // Trigger animation
            setTimeout(function() {
                li.style.opacity = '1';
            }, 10);
            
            // Clear input and reset character count
            newItemInput.value = '';
            charCount.textContent = '0';
        }
    }
    
    function setupDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const listItem = button.parentElement;
                listItem.remove();
            });
        });
    }
    
    // Event Handling Section
    const hoverElement = document.getElementById('hover-element');
    
    hoverElement.addEventListener('mouseover', function() {
        this.classList.add('highlight');
        this.textContent = 'Amazing! You found the hover effect!';
    });
    
    hoverElement.addEventListener('mouseout', function() {
        this.classList.remove('highlight');
        this.textContent = 'highlighted text';
    });
    
    // Set current date in footer
    const dateDisplay = document.getElementById('date-display');
    const currentDate = new Date();
    dateDisplay.textContent = 'Today is: ' + currentDate.toLocaleDateString();
});
