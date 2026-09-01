const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);

function handleInput(event) {
  //   const email = event.target.elements.email.value.trim();
  //   const message = event.target.elements.message.value.trim();
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const localData = localStorage.getItem('feedback-form-state');
if (localData) {
  const savedData = JSON.parse(localData);

  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
  Object.assign(formData, savedData);
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
