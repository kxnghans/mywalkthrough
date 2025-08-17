import React from 'react';
import Section from '../components/ui/Section';
import DetailModal from '../components/modals/DetailModal';
import { educationData } from '../data/education';

const EducationPage = () => {
    const [selectedItem, setSelectedItem] = React.useState(null);

    return (
        <Section title="Education">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((edu, index) => (
                    <div key={index} className="bg-gray-200 dark:bg-[#181818] rounded-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 bevel-light dark:bevel-dark" onClick={() => setSelectedItem(edu)}>
                        <img src={edu.imageUrl} alt={edu.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2 text-red-500 dark:text-red-400 truncate">{edu.title}</h3>
                            <div className="text-gray-600 dark:text-gray-400 text-sm h-20 overflow-hidden space-y-1">
                                {edu.highlights.map((highlight, i) => (
                                    <p key={i} className="truncate">
                                        <span className="font-semibold">{highlight.label}:</span> {highlight.value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedItem && <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </Section>
    );
};

export default EducationPage;