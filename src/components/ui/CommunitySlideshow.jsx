import React from 'react';
import Section from './Section';
import DetailModal from '../modals/DetailModal';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';
import { communityData } from '../../data/community';

const CommunitySlideshow = () => {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const slideshowRef = React.useRef(null);

    const scroll = (scrollOffset) => {
        slideshowRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };

    return (
        <Section title="Community Involvement" className="flex-1 flex flex-col min-h-0 !p-0 md:!p-2 lg:!p-4">
            <div className="relative flex-1 flex items-center">
                <button onClick={() => scroll(-320)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10">
                    <ChevronLeftIcon />
                </button>
                <div ref={slideshowRef} className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scrollbar-hide h-full items-center px-12">
                    {communityData.map((item, index) => (
                        <div key={index} className="snap-start flex-shrink-0 w-72 md:w-80 bg-gray-200 dark:bg-[#181818] rounded-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-transform duration-300 bevel-light dark:bevel-dark" onClick={() => setSelectedItem(item)}>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white truncate">{item.title}</h3>
                                <div className="text-gray-600 dark:text-gray-400 text-sm h-16 overflow-hidden space-y-1">
                                    {item.highlights.map((highlight, i) => (
                                        <p key={i} className="truncate">
                                            <span className="font-semibold">{highlight.label}:</span> {highlight.value}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={() => scroll(320)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-10">
                    <ChevronRightIcon />
                </button>
            </div>
            {selectedItem && <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </Section>
    );
}

export default CommunitySlideshow;