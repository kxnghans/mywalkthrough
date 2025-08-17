import React from 'react';
import Section from '../components/ui/Section';
import DetailModal from '../components/modals/DetailModal';
import { workData } from '../data/work';

const WorkExperiencePage = () => {
    const [selectedItem, setSelectedItem] = React.useState(null);
    
    return (
        <Section title="Work Experience">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workData.map((job, index) => (
                       <div key={index} className="bg-gray-200 dark:bg-[#181818] rounded-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 bevel-light dark:bevel-dark" onClick={() => setSelectedItem(job)}>
                        <img src={job.imageUrl} alt={job.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h4 className="text-xl font-bold text-red-500 dark:text-red-400 truncate">{job.title}</h4>
                             <div className="text-gray-600 dark:text-gray-400 text-sm h-20 overflow-hidden space-y-1 mt-2">
                                {job.highlights.map((highlight, i) => (
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

export default WorkExperiencePage;