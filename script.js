// FYJC Exam Notice interactions

const streamSelect = document.getElementById('stream');
const printBtn = document.getElementById('printBtn');
const cards = document.querySelectorAll('.exam-card');

streamSelect.addEventListener('change', e => {
  const val = e.target.value;
  cards.forEach(card => {
    card.querySelectorAll('.science,.commerce,.arts').forEach(div => {
      div.classList.remove('hidden-stream');
      if (val !== 'all' && !div.classList.contains(val)) {
        div.classList.add('hidden-stream');
      }
    });
  });
});

printBtn.addEventListener('click', () => window.print());
