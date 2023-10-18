// Kaç tane ul eklemek istediğinizi belirleyin
const ulCount = 1;

// Belirtilen sayıda ul eklemek için bir for döngüsü kullanın
const days = document.querySelector('.days');

for (let i = 1; i <= ulCount; i++) {
    // Yeni bir ul (unordered list) oluşturun
    const ulElement = document.createElement('ul');

    // Her ul'a liste öğeleri (li) ekleyin
    for (let j = 1; j <= 31; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = ` ${j}  `;
        ulElement.appendChild(listItem);
    }

    // Oluşturulan ul'ü HTML içeriğine ekleyin
    days.appendChild(ulElement);
}
