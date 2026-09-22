const form = document.querySelector('.inquiry-form');
const topic = document.querySelector('#interest');
const requested = new URLSearchParams(location.search).get('interest');
if ([...topic.options].some(option => option.value === requested)) topic.value = requested;
const intros = {
 discovery: ['A little conversation.<br><em>No commitment.</em>', 'Request a free discovery call to ask questions and get a feel for working with me. I’ll email you to arrange a time. This is separate from a paid coaching session.'],
 couples: ['A little more room<br><em>for each other.</em>', 'Tell me a little about what you’re looking for. Couples sessions are $250 for 60 minutes online; we’ll discuss fit and find a time together.'],
 weekend: ['Let’s make room<br><em>for a weekend.</em>', 'Coaching in my Detroit home, a stay across the street, and thoughtful hospitality throughout. We’ll discuss fit, dates, and the details before you decide.'],
 speaking: ['An honest conversation.<br><em>A room full of possibility.</em>', 'Tell me about your audience, event, and what you hope people take away. We’ll discuss the format, availability, and fee.']
};
function updateTopic() {
 const copy = intros[topic.value] || ['Tell me what<br><em>brings you here.</em>', 'A few words are enough. I’ll follow up by email to discuss the next step.'];
 document.querySelector('#contact-title').innerHTML = copy[0];
 document.querySelector('#contact-intro').textContent = copy[1];
 form.querySelector('button').textContent = topic.value === 'discovery' ? 'Request a free call ↗' : 'Send your inquiry ↗';
}
topic.addEventListener('change', updateTopic); updateTopic();
form.addEventListener('submit', async event => {
 event.preventDefault();
 const button = form.querySelector('button');
 const error = document.querySelector('#form-error');
 button.disabled = true; error.hidden = true;
 try {
  const response = await fetch('/', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:new URLSearchParams(new FormData(form)).toString()});
  if (!response.ok) throw new Error('Submission failed');
  location.assign('/thank-you');
 } catch (_) {
  error.textContent = 'Your inquiry could not be confirmed. Your details are still here. Please try again or email jcbatton@gmail.com.';
  error.hidden = false; button.disabled = false;
 }
});
