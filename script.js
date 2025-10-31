document.getElementById('waitlist-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for joining the waitlist!');
  this.reset();
});
