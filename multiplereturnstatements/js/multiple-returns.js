function isFieldEmpty() {
  const field = document.querySelector('#info');
  if (!field.value) {
    return true;
  } else {
    return false;
  }
}

const fieldTest = isFieldEmpty();

if (fieldTest) {
  alert('Please provide your information.');
}