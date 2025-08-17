import React from 'react';

const DetailModal = ({ item, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-gray-100 dark:bg-[#181818] rounded-lg max-w-2xl w-full relative transform transition-all duration-300 bevel-light dark:bevel-dark">
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white text-3xl z-10">&times;</button>
            <div className="p-6">
                <h2 className="text-3xl font-bold mb-2 text-red-500">{item.title}</h2>
                {item.subtitle && <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">{item.subtitle}</p>}
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    {Array.isArray(item.details) ? item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    )) : <li>{item.details}</li>}
                </ul>
            </div>
        </div>
    </div>
);

export default DetailModal;