const ulElement = document.querySelector('.days ul'); // Var olan ul elementini seçin

for (let j = 1; j <= 31; j++) {
    const listItem = document.createElement('li');
    listItem.textContent = j.toString();
    ulElement.appendChild(listItem);
}

const forwardButton = document.createElement('span');
forwardButton.textContent = 'İleri';
forwardButton.classList.add('navigation-button', 'forward-button');

const backwardButton = document.createElement('span');
backwardButton.textContent = 'Geri';
backwardButton.classList.add('navigation-button', 'backward-button');

const daysList = document.querySelector('.month ul');

forwardButton.addEventListener('click', () => {
    // İleri tuşuna tıklandığında yapılacak işlemleri burada tanımlayabilirsiniz.
    // Örneğin, bir sonraki ayı veya tarihi göstermek gibi.
    console.log('İleri tuşuna tıklandı.');
});

backwardButton.addEventListener('click', () => {
    // Geri tuşuna tıklandığında yapılacak işlemleri burada tanımlayabilirsiniz.
    // Örneğin, bir önceki ayı veya tarihi göstermek gibi.
    console.log('Geri tuşuna tıklandı.');
});

daysList.appendChild(backwardButton);
daysList.appendChild(forwardButton);
