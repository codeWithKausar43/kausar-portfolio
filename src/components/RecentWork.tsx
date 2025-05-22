import { useEffect, useState } from 'react';
import bikeShop from '../assets/bikeshop.png';
import nothingStudio from '../assets/nothing studio.mp4';
import service from '../assets/service.png';
import hostel from '../assets/hostel-management.png';
import movie from '../assets/movie.png';
import nest from '../assets/nestmartbd.png';
import residential from "../assets/residentialrealestat.png"
interface Project {
    name: string;
    description: string;
    technologies: string[];
    liveLink: string;
    clientCode: string;
    serverCode?: string;
    image: string;
    isVideo?: boolean;
}
const RecentWork = () => {
    const projects = [
        {
            name: "Hostel Management",
            description: "A system to manage hostel operations like student info, meals, and reviews efficiently.",
            technologies: ["React", "Express", "MongoDB", "Firebase", "Tailwind"],
            liveLink: "https://hostel-management-4286f.web.app/",
            clientCode: "https://github.com/codeWithKausar43/Hostel-Management-Client",
            serverCode: "https://github.com/codeWithKausar43/Hostel-Management-Server",
            image: hostel
        },
        {
            name: "Service Review",
            description: "A platform for users to post and read honest service reviews, helping others make informed choices.",
            technologies: ["React", "Express", "MongoDB", "Tanstack", "Tailwind"],
            liveLink: "https://assignment-11-new-2c7ac.web.app/",
            clientCode: "https://github.com/codeWithKausar43/Service-Review-Client",
            serverCode: "https://github.com/codeWithKausar43/Service-Review-Server",
            image: service
        },
         {
            name: "Movie Portal",
            description: "A platform for users to post and read honest service reviews, helping others make informed choices.",
            technologies: ["React", "Express", "MongoDB", "Tanstack", "Tailwind"],
            liveLink: "https://movie-portal-3fbfe.web.app/",
            clientCode: "https://github.com/codeWithKausar43/Movie-Portal-Client",
            serverCode: "https://github.com/codeWithKausar43/Movie-Portal-Server",
            image: movie
        },
        
        {
            name: "Nothing Studio",
            description: "Nothing Studio is a responsive portfolio website using React and GSAP, featuring seamless animations and an engaging user experience.",
            technologies: ["UI", "GSAP", "React", "Tailwind"],
            liveLink: "https://noting-gilt.vercel.app/",
            clientCode: "https://github.com/codeWithKausar43/noting",
            isVideo: true,
            image: nothingStudio
        },
        {
            name: "Residential",
            description: "Real estate platform to discover, list, and explore apartments, townhouses, and vacation rentals.",
            technologies: ["React", "React Router", "Firebase", "Tailwind","UI"],
            liveLink: "https://residential-site.vercel.app/",
            clientCode: "https://github.com/codeWithKausar43/residential-real-estate",
            image: residential
        },
        
        {
            name: "Nest Mart BD",
            description: "User-friendly online store offering various products to enhance daily life and convenience",
            technologies: ["UI", "Framer Motion", "Tailwind"],
            liveLink: "https://nest-mart-bd.vercel.app/",
            clientCode: "https://github.com/codeWithKausar43/nest-mart-bd",
            image: nest
        },  
        {
            name: "Bike Shop",
            description: "A Bike Shop Landing Page Design Template ( Full Responsive )",
            technologies: ["UI", "Tailwind", "HTML"],
            liveLink: "https://bike-shop-ashen.vercel.app/",
            clientCode: "https://github.com/codeWithKausar43/bike-shop",
            image: bikeShop
        },
    ];
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [card, setCard] = useState(6)
    useEffect(() => {
        if (filter === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.technologies.includes(filter)));
        }
    }, [filter]);

    const handleFilterClick = (selectedFilter: string) => {
        setIsLoading(true);
        setFilter(selectedFilter);
        setTimeout(() => {
            setIsLoading(false);
        }, 900);
    };

    return (
        <div id='Work' className="relative py-10 md:py-20 overflow-hidden px-5">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-[#ddcdfdc7] to-primary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center w-full mb-8">
                    <h1 className="text-transparent bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                        My Recent Work
                    </h1>
                </div>
                <div>
                    {/* Filter Buttons */}
                    <div className="flex gap-2 w-full md:w-xl mx-auto p-3 bg-[#050709] justify-center rounded-full *:cursor-pointer my-8 text-xs md:text-lg">
                        <button
                            onClick={() => handleFilterClick('All')}
                            className={`px-6 py-2 rounded-full ${filter === 'All' ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-800 text-gray-400'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleFilterClick('MongoDB')}
                            className={`px-6 py-2 rounded-full ${filter === 'MongoDB' ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-800 text-gray-400'}`}
                        >
                            MERN
                        </button>
                         <button
                            onClick={() => handleFilterClick('UI')}
                            className={`px-6 py-2 rounded-full ${filter === 'UI' ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-800 text-gray-400'}`}
                        >
                            FrontEnd
                        </button>
                        <button
                            onClick={() => handleFilterClick('Express')}
                            className={`px-6 py-2 rounded-full ${filter === 'Express' ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-800 text-gray-400'}`}
                        >
                            BackEnd
                        </button>
                       
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="flex justify-center items-center h-40">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                        </div>
                    )}
                    {/* Projects Grid */}
                    {!isLoading && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProjects.slice(0, card).map((project, index) => (
                                    <div key={index} className="p-5 rounded-md bg-[#050709] border border-gray-800 hover:border-primary transition-all duration-300">
                                        {
                                            project.isVideo ? <div className=' mb-4'>
                                                <video loop src={project.image} autoPlay={true}></video>
                                            </div> : <div className="w-full image-container overflow-hidden mb-4">
                                                <img
                                                    className="rounded-md mb-4 w-full h-full"
                                                    src={project.image}
                                                    alt={project.name}
                                                />
                                            </div>
                                        }
                                        <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-2 md:px-4 py-2 text-xs md:text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:from-secondary hover:to-primary transition-all duration-300">Live</a>
                                            <a href={project.clientCode} target="_blank" rel="noopener noreferrer" className="px-2 md:px-4 py-2 text-xs md:text-sm bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300">Client Code</a>
                                            {project.serverCode && (
                                                <a href={project.serverCode} target="_blank" rel="noopener noreferrer" className="px-2 md:px-4 py-2 text-xs md:text-sm bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300">Server Code</a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='w-full flex justify-center items-center'>
                                <button onClick={() => {
                                    setCard(filteredProjects.length)
                                }} className={card < filteredProjects.length ? "px-6 py-3 mt-8 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-secondary hover:to-primary" : 'hidden'}>
                                    Load More
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecentWork;