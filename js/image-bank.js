const imageBank = {
  hero: [
    {
      url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1500&q=85',
      alt: 'Ciclista urbano realizando uma entrega em uma cidade moderna',
    },
    {
      url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1500&q=85',
      alt: 'Ciclista urbano com mochila de entrega',
    },
  ],
  carga: [
    {
      url: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&w=1200&q=85',
      alt: 'Bicicleta de carga usada para entrega sustentável',
    },
  ],
  cidade: [
    {
      url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=85',
      alt: 'Bicicleta urbana pronta para uma entrega sustentável',
    },
  ],
};

const chooseImage = (images, slot) => {
  const index = Math.floor(Math.random() * images.length);
  const selected = images[index];
  const fallback = slot.getAttribute('src');

  slot.src = selected.url;
  slot.alt = selected.alt;
  slot.addEventListener('error', () => {
    slot.src = fallback;
  }, { once: true });
};

document.querySelectorAll('[data-image-bank]').forEach((slot) => {
  const images = imageBank[slot.dataset.imageBank];
  if (images?.length) chooseImage(images, slot);
});