// Atualiza modal com o livro selecionado
document.querySelectorAll('.btn-pix').forEach(button => {
  button.addEventListener('click', () => {
    const book = button.getAttribute('data-book');
    const price = button.getAttribute('data-price');
    document.getElementById('selectedBook').textContent = `Item: ${book} - ${price}`;
  });
});

// Copiar chave PIX
document.getElementById('copyPix').addEventListener('click', async () => {
  const key = document.getElementById('pixKey').value;
  try {
    await navigator.clipboard.writeText(key);
    const btn = document.getElementById('copyPix');
    btn.textContent = 'Copiado!';
    setTimeout(() => btn.textContent = 'Copiar', 1500);
  } catch {
    alert('Não foi possível copiar automaticamente. Copie manualmente: ' + key);
  }
});