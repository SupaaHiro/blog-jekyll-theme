document.querySelectorAll('pre code').forEach(block => {
  const btn = document.createElement('button');
  btn.classList.add('copy-btn');
  btn.innerHTML = '<span class="material-symbols-rounded">content_copy</span>';
  block.parentElement.insertBefore(btn, block);

  btn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(block.innerText);
    btn.innerHTML = '<span class="material-symbols-rounded">check</span>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<span class="material-symbols-rounded">content_copy</span>';
      btn.classList.remove('copied');
    }, 1200);
  });
});

document.addEventListener('click', async e => {
  const pre = e.target.closest('pre');
  if (!pre) return;

  const code = pre.querySelector('code');
  if (!code) return;

  await navigator.clipboard.writeText(code.innerText);

  pre.classList.add('copied');
  setTimeout(() => pre.classList.remove('copied'), 1200);
});
