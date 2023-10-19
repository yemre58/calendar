
    const ulElement=document.createElement('ul');
    
    const days = document.querySelector('.days');


        for (let j = 1; j <= 31; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = `     ${   j } `;
            ulElement.appendChild(listItem);
        }

        
        days.appendChild(ulElement);

        if (!days.querySelector('ul')) {
            days.appendChild(ulElement);
        }