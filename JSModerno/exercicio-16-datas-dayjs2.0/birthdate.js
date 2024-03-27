import dayjs from "dayjs";

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the birthdate input element
  const birthdateInput = document.getElementById('birthdateInput');
  const userBirthdate = birthdateInput.value;

  if (!userBirthdate) {
    alert('Por favor, insira uma data de nascimento válida.');
    return;
  }

  // Perform calculations using dayjs
  const birthdate = dayjs(userBirthdate);
  const today = dayjs();
  const ageInYears = today.diff(birthdate, 'year');
  const nextBday = birthdate.add(ageInYears + 1, 'year');
  const daysToNextBirthday = nextBday.diff(today, 'day') + 1;

  // Display the results on the webpage
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `
    <p>Idade: ${ageInYears}</p>
    <p>Próximo aniversário: ${nextBday.format('DD/MM/YYYY')}</p>
    <p>Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}</p>
  `;
});


