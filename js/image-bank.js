const imageBank = {
  hero: [
    {
      url: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Ciclista urbano pedalando em uma cidade',
    },
    {
      url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1500&q=85',
      alt: 'Ciclista urbano com mochila de entrega',
    },
    {
      url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pessoa pedalando ao ar livre',
    },
  ],
  carga: [
    {
      url: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&w=1200&q=85',
      alt: 'Bicicleta de carga usada para entrega sustentável',
    },
    {
      url: 'https://images.pexels.com/photos/254887/pexels-photo-254887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Bicicleta estacionada em uma área verde',
    },
  ],
  cidade: [
    {
      url: 'https://images.pexels.com/photos/254887/pexels-photo-254887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Bicicleta estacionada em uma área verde',
    },
    {
      url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bicicleta urbana em um ambiente ao ar livre',
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