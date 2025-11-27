import React from 'react';

interface Pet {
  id: number;
  title: string;
  name: string;
}

const pets: Pet[] = [
  { id: 101, title: "dog", name: "Leo" },
  { id: 102, title: "cat", name: "Roger" },
];

export const MyView: React.FC = () => {


  return (
    <div className="p-4 border rounded">
      <h3>GG</h3>
      <ul>
        {/* map 的用法不變，但現在 TS 知道 'fruit' 是一個 string */}
        {pets.map((pet, index) => (
          <div key={pet.id}>
            <span>{pet.title}</span>
            <input type='text' value={pet.name} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparentplaceholder-gray-400 transition-all text-sm"
/>
            </div>
        ))}
      </ul>
    </div>
  );
};
