import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const galleryImages = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    altText: 'Beautiful Landscape 1',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    altText: 'Beautiful Landscape 2',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/300',
    altText: 'Beautiful Landscape 3',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/300',
    altText: 'Beautiful Landscape 4',
  },
  {
    id: 5,
    imageUrl: 'https://via.placeholder.com/300',
    altText: 'Beautiful Landscape 5',
  },
  {
    id: 6,
    imageUrl: 'https://via.placeholder.com/300',
    altText: 'Beautiful Landscape 6',
  },
];

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {galleryImages.map((image) => (
      <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={image.imageUrl}
          alt={image.altText}
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Gallery;
