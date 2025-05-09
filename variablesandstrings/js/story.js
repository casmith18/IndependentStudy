const adjective = prompt('Please type an adjective.');
const verb = prompt('Please type a verb.');
const noun = prompt('Please type a noun.');

const sentence = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`;

document.querySelector('main').innerHTML = sentence;





