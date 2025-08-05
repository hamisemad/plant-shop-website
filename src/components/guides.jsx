import React from 'react';
import { Link } from 'react-router-dom';


const guides = [
  {
    id: 'choosing-plant',
    title: 'How to Choose the Right Plant for Your Home',
    image: '/images/guides/vase-plant-with-outdoor-patio.jpg',
  },
  {
    id: 'indoor-care',
    title: 'Indoor Plant Care Tips',
    image: '/images/guides/holding-plants.jpg',
  },
  {
    id: 'growing-flowers',
    title: 'Growing Flowers from Seeds',
    image: '/images/guides/growing-flowers.jpg',
  },
  {
    id: 'gardening-tools',
    title: 'Essential Gardening Tools for Beginners',
    image: '/images/guides/Ferry Morse Home Gardening.jpeg',
  },
  {
    id: 'repotting-plants',
    title: 'How to Repot a Plant Without Stressing It',
    image: '/images/guides/Step-by-Step Guide_ How to Repot a Plant Easily.jpeg',
  },
  {
    id: 'plant-pests',
    title: 'Dealing with Common Plant Pests Naturally',
    image: '/images/guides/5 Of The Best Plant-Safe Bug Sprays And Bug Bombs.jpeg',
  },
];

function Guides() {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold mb-10 text-center text-green-900">Guides & Tips</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
        {guides.map((guide, index) => (

        <Link to={`/guides/${guide.id}`} key={guide.id}>
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-semibold text-green-950">{guide.title}</h2>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Guides;
