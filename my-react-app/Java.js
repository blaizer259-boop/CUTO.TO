// Main movie site functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // All our movies data
    const movieList = [
        {
            title: "John Wick: Chapter 4",
            description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances.",
            trailerId: "qEVUtrk8_B4",
            thumbnail: "https://img.youtube.com/vi/qEVUtrk8_B4/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "6:45",
            available: true
        },
        {
            title: "Mission: Impossible 7",
            description: "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands.",
            trailerId: "avz06PDqDbM",
            thumbnail: "https://img.youtube.com/vi/avz06PDqDbM/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:22",
            available: true
        },
        {
            title: "The Batman",
            description: "When a killer targets Gotham's elite with a series of sadistic machinations, Batman must uncover the culprit and bring justice to the city.",
            trailerId: "mqqft2x_Aa4",
            thumbnail: "https://img.youtube.com/vi/mqqft2x_Aa4/maxresdefault.jpg",
            genre: "Action",
            year: "2022",
            duration: "6:15",
            available: true
        },
        {
            title: "Dune: Part Two",
            description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
            trailerId: "U2Qp5pL3ovA",
            thumbnail: "https://img.youtube.com/vi/U2Qp5pL3ovA/maxresdefault.jpg",
            genre: "Sci-Fi",
            year: "2024",
            duration: "7:38",
            available: true
        },
        {
            title: "Avatar: The Way of Water",
            description: "Jake Sully lives with his newfound family formed on Pandora. When a familiar threat returns, he must work with Neytiri and the army of the Na'vi race to protect their home.",
            trailerId: "d9MyW72ELq0",
            thumbnail: "https://img.youtube.com/vi/d9MyW72ELq0/maxresdefault.jpg",
            genre: "Sci-Fi",
            year: "2022",
            duration: "6:52",
            available: true
        },
        {
            title: "Oppenheimer",
            description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
            trailerId: "uYPbbksJxIg",
            thumbnail: "https://img.youtube.com/vi/uYPbbksJxIg/maxresdefault.jpg",
            genre: "Drama",
            year: "2023",
            duration: "7:15",
            available: true
        },
        {
            title: "Spider-Man: Across the Spider-Verse",
            description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
            trailerId: "shW9i6k8cB0",
            thumbnail: "https://img.youtube.com/vi/shW9i6k8cB0/maxresdefault.jpg",
            genre: "Animation",
            year: "2023",
            duration: "6:47",
            available: true
        },
        {
            title: "Black Panther: Wakanda Forever",
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            trailerId: "RlOB3UALvrQ",
            thumbnail: "https://img.youtube.com/vi/RlOB3UALvrQ/maxresdefault.jpg",
            genre: "Action",
            year: "2022",
            duration: "7:01",
            available: true
        },
        {
            title: "The Super Mario Bros. Movie",
            description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.",
            trailerId: "TnGl01FkMMo",
            thumbnail: "https://img.youtube.com/vi/TnGl01FkMMo/maxresdefault.jpg",
            genre: "Animation",
            year: "2023",
            duration: "6:33",
            available: true
        },
        {
            title: "Guardians of the Galaxy Vol. 3",
            description: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own.",
            trailerId: "u3V5KDHRQvk",
            thumbnail: "https://img.youtube.com/vi/u3V5KDHRQvk/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:18",
            available: true
        },
        {
            title: "Fast X",
            description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
            trailerId: "eoOaKN4qCKw",
            thumbnail: "https://img.youtube.com/vi/eoOaKN4qCKw/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "6:29",
            available: false
        },
        {
            title: "The Little Mermaid",
            description: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water.",
            trailerId: "kpGo2_d3oYE",
            thumbnail: "https://img.youtube.com/vi/kpGo2_d3oYE/maxresdefault.jpg",
            genre: "Fantasy",
            year: "2023",
            duration: "6:55",
            available: false
        },
        {
            title: "Transformers: Rise of the Beasts",
            description: "Optimus Prime and the Autobots take on their biggest challenge yet in this action-packed adventure.",
            trailerId: "itnqEauWQZM",
            thumbnail: "https://img.youtube.com/vi/itnqEauWQZM/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:12",
            available: false
        },
        {
            title: "Barbie",
            description: "Barbie suffers a crisis that leads her to question her world and her existence in this live-action adventure.",
            trailerId: "pBk4NYhWNMM",
            thumbnail: "https://img.youtube.com/vi/pBk4NYhWNMM/maxresdefault.jpg",
            genre: "Comedy",
            year: "2023",
            duration: "6:41",
            available: false
        },
        {
            title: "The Flash",
            description: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes.",
            trailerId: "hebWYacbdvc",
            thumbnail: "https://img.youtube.com/vi/hebWYacbdvc/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:05",
            available: false
        }
    ];

    // Get movies that are available to watch
    function getAvailableMovies() {
        return movieList.filter(movie => movie.available !== false);
    }

    // Variables for trailer controls
    let currentVolume = 50;
    let currentVideo = null;
    let currentZoom = 130;
    let currentMovie = null;

    // Create the trailer modal
    const modal = document.createElement('div');
    modal.id = 'trailerModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            
            <div class="movie-title-display" id="movieTitleDisplay">
                <h2 id="currentMovieTitle">Movie Title</h2>
            </div>

            <div class="navigation-controls">
                <button class="nav-btn" id="prevMovie">
                    <i class='bx bx-skip-previous'></i>
                    <span class="nav-tooltip">Previous Movie</span>
                </button>
                
                <button class="nav-btn" id="nextMovie">
                    <i class='bx bx-skip-next'></i>
                    <span class="nav-tooltip">Next Movie</span>
                </button>
            </div>

            <div class="zoom-controls">
                <button class="zoom-btn" id="zoomOut">
                    <i class='bx bx-zoom-out'></i>
                </button>
                <span id="zoomValue">${currentZoom}%</span>
                <button class="zoom-btn" id="zoomIn">
                    <i class='bx bx-zoom-in'></i>
                </button>
                <button class="zoom-btn" id="resetZoom">
                    <i class='bx bx-reset'></i>
                </button>
            </div>

            <div class="trailer-container">
                <div id="trailerPlayer"></div>
            </div>

            <div class="bottom-controls">
                <div class="control-group">
                    <div class="volume-controls">
                        <button class="control-btn" id="volumeDown">
                            <i class='bx bx-volume-mute'></i>
                        </button>
                        <div class="volume-slider-container">
                            <input type="range" id="volumeSlider" min="0" max="100" value="${currentVolume}" class="volume-slider">
                            <span id="volumeValue">${currentVolume}%</span>
                        </div>
                        <button class="control-btn" id="volumeUp">
                            <i class='bx bx-volume-full'></i>
                        </button>
                    </div>
                </div>
                
                <div class="control-group">
                    <button class="modal-btn" id="theaterModeBtn">
                        <i class='bx bx-movie'></i> Theater
                    </button>
                    <button class="modal-btn" id="fullscreenBtn">
                        <i class='bx bx-fullscreen'></i> Fullscreen
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // Navigation between movies in modal
    function getCurrentMovieIndex() {
        const availableMovies = getAvailableMovies();
        return availableMovies.findIndex(movie => movie.trailerId === currentMovie.trailerId);
    }

    function goToMovie(direction) {
        const availableMovies = getAvailableMovies();
        const currentIndex = getCurrentMovieIndex();
        
        if (currentIndex === -1) return;
        
        let newIndex;
        
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % availableMovies.length;
        } else {
            newIndex = (currentIndex - 1 + availableMovies.length) % availableMovies.length;
        }
        
        const newMovie = availableMovies[newIndex];
        playMovieTrailer(newMovie);
    }

    function playMovieTrailer(movie) {
        currentMovie = movie;
        const trailerPlayer = document.getElementById('trailerPlayer');
        
        document.getElementById('currentMovieTitle').textContent = movie.title;
        
        trailerPlayer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        currentVideo = trailerPlayer.querySelector('iframe');
        
        setTimeout(() => {
            updateVideoVolume();
        }, 1000);
    }

    // Open trailer function
    function openTrailer(trailerId) {
        currentMovie = movieList.find(movie => movie.trailerId === trailerId);
        const trailerPlayer = document.getElementById('trailerPlayer');
        
        document.getElementById('currentMovieTitle').textContent = currentMovie.title;
        
        trailerPlayer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        currentVideo = trailerPlayer.querySelector('iframe');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        updateVolumeDisplay();
        updateZoomDisplay();
        
        setTimeout(() => {
            updateVideoVolume();
        }, 1000);
    }

    function closeTrailer() {
        modal.style.display = 'none';
        document.getElementById('trailerPlayer').innerHTML = '';
        currentVideo = null;
        document.body.style.overflow = 'auto';
        modal.classList.remove('fullscreen', 'theater-mode');
        resetZoom();
    }

    // Volume controls
    function updateVideoVolume() {
        if (currentVideo && currentVideo.contentWindow) {
            const currentSrc = currentVideo.src;
            const baseUrl = currentSrc.split('?')[0];
            const params = new URLSearchParams(currentSrc.split('?')[1] || '');
            
            params.set('volume', currentVolume);
            currentVideo.src = `${baseUrl}?${params.toString()}`;
        }
    }

    function updateVolume() {
        updateVolumeDisplay();
        updateVideoVolume();
    }

    function updateVolumeDisplay() {
        const volumeValue = document.getElementById('volumeValue');
        const volumeSlider = document.getElementById('volumeSlider');
        
        volumeValue.textContent = `${currentVolume}%`;
        volumeSlider.value = currentVolume;
    }

    function volumeUp() {
        if (currentVolume < 100) {
            currentVolume = Math.min(100, currentVolume + 10);
            updateVolume();
        }
    }

    function volumeDown() {
        if (currentVolume > 0) {
            currentVolume = Math.max(0, currentVolume - 10);
            updateVolume();
        }
    }

    // Zoom controls
    function updateZoomDisplay() {
        const zoomValue = document.getElementById('zoomValue');
        zoomValue.textContent = `${currentZoom}%`;
        
        const trailerPlayer = document.getElementById('trailerPlayer');
        trailerPlayer.style.transform = `scale(${currentZoom / 100})`;
    }

    function zoomIn() {
        if (currentZoom < 200) {
            currentZoom = Math.min(200, currentZoom + 10);
            updateZoomDisplay();
        }
    }

    function zoomOut() {
        if (currentZoom > 50) {
            currentZoom = Math.max(50, currentZoom - 10);
            updateZoomDisplay();
        }
    }

    function resetZoom() {
        currentZoom = 130;
        updateZoomDisplay();
    }

    // Theater and fullscreen modes
    function toggleFullscreen() {
        if (!modal.classList.contains('fullscreen')) {
            modal.classList.add('fullscreen');
            modal.classList.remove('theater-mode');
            document.getElementById('fullscreenBtn').innerHTML = '<i class="bx bx-exit-fullscreen"></i> Exit Fullscreen';
        } else {
            modal.classList.remove('fullscreen');
            document.getElementById('fullscreenBtn').innerHTML = '<i class="bx bx-fullscreen"></i> Fullscreen';
        }
    }

    function toggleTheaterMode() {
        if (!modal.classList.contains('theater-mode')) {
            modal.classList.add('theater-mode');
            modal.classList.remove('fullscreen');
            document.getElementById('theaterModeBtn').innerHTML = '<i class="bx bx-exit"></i> Exit Theater';
        } else {
            modal.classList.remove('theater-mode');
            document.getElementById('theaterModeBtn').innerHTML = '<i class="bx bx-movie"></i> Theater';
        }
    }

    // Modal event listeners
    document.querySelector('.close').addEventListener('click', closeTrailer);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeTrailer();
        }
    });

    // Volume control events
    document.getElementById('volumeUp').addEventListener('click', volumeUp);
    document.getElementById('volumeDown').addEventListener('click', volumeDown);
    document.getElementById('volumeSlider').addEventListener('input', (e) => {
        currentVolume = parseInt(e.target.value);
        updateVolume();
    });

    // Zoom control events
    document.getElementById('zoomIn').addEventListener('click', zoomIn);
    document.getElementById('zoomOut').addEventListener('click', zoomOut);
    document.getElementById('resetZoom').addEventListener('click', resetZoom);

    // Navigation events
    document.getElementById('prevMovie').addEventListener('click', () => goToMovie('prev'));
    document.getElementById('nextMovie').addEventListener('click', () => goToMovie('next'));

    // Mode events
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    document.getElementById('theaterModeBtn').addEventListener('click', toggleTheaterMode);

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'ArrowLeft':
                    goToMovie('prev');
                    break;
                case 'ArrowRight':
                    goToMovie('next');
                    break;
                case 'Escape':
                    closeTrailer();
                    break;
            }
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    function searchMovies(query) {
        if (!query.trim()) {
            hideSearchResults();
            return;
        }

        const results = movieList.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase()) ||
            movie.year.includes(query)
        );

        showSearchResults(results);
    }

    function showSearchResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No movies found</div>';
        } else {
            results.forEach(movie => {
                const resultItem = document.createElement('a');
                resultItem.href = '#';
                resultItem.className = `search-result-item ${movie.available === false ? 'unavailable' : ''}`;
                
                const unavailableBadge = movie.available === false ? 
                    '<div class="unavailable-badge">Not Available</div>' : '';
                
                resultItem.innerHTML = `
                    <img src="${movie.thumbnail}" alt="${movie.title}" class="search-result-img">
                    ${unavailableBadge}
                    <div class="search-result-info">
                        <div class="search-result-title">${movie.title}</div>
                        <div class="search-result-year">${movie.year} • ${movie.genre} • ${movie.duration}</div>
                    </div>
                `;
                
                resultItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (movie.available !== false) {
                        openTrailer(movie.trailerId);
                        hideSearchResults();
                        searchInput.value = '';
                    } else {
                        alert('This trailer is not available for playback on our site.');
                    }
                });
                
                searchResults.appendChild(resultItem);
            });
        }

        searchResults.classList.add('active');
    }

    function hideSearchResults() {
        searchResults.classList.remove('active');
    }

    // Search events
    searchInput.addEventListener('input', (e) => {
        searchMovies(e.target.value);
    });

    searchBtn.addEventListener('click', () => {
        searchMovies(searchInput.value);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            searchMovies(searchInput.value);
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            hideSearchResults();
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideSearchResults();
        }
        if (e.key === 'Enter') {
            searchMovies(searchInput.value);
            e.preventDefault();
        }
    });

    // Navigation buttons
    function setupNavButtons() {
        // Home button
        const homeButton = document.querySelector('.nav-link.active');
        homeButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // New & Popular button
        const newPopularButton = document.querySelectorAll('.nav-link')[1];
        newPopularButton.addEventListener('click', (e) => {
            e.preventDefault();
            const newReleasesSection = document.querySelector('.category:nth-child(2)');
            newReleasesSection.scrollIntoView({ behavior: 'smooth' });
        });

        // My List button
        const myListButton = document.querySelectorAll('.nav-link')[2];
        myListButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('My List feature coming soon! 🎬');
        });

        // Notification bell
        const notificationBell = document.querySelector('.bx-bell').parentElement;
        notificationBell.addEventListener('click', (e) => {
            e.preventDefault();
            alert('No new notifications 📢');
        });

        // User profile
        const userProfile = document.querySelector('.bx-user-circle').parentElement;
        userProfile.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Profile page coming soon! 👤');
        });

        // More Info button
        const moreInfoBtn = document.querySelector('.btn-secondary');
        moreInfoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentMovie = document.querySelector('.hero-title').textContent;
            alert(`More information about "${currentMovie}" coming soon! ℹ️`);
        });
    }

    // Random movies functionality
    function getRandomMovies(count, excludeTitle = null) {
        let availableMovies = getAvailableMovies();
        
        if (excludeTitle) {
            availableMovies = availableMovies.filter(movie => movie.title !== excludeTitle);
        }
        
        const shuffled = [...availableMovies].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function updateHeroMovie() {
        const randomMovie = getRandomMovies(1)[0];
        const heroSection = document.querySelector('.hero');
        const heroTitle = document.querySelector('.hero-title');
        const heroDescription = document.querySelector('.hero-description');
        const playBtn = document.querySelector('.btn-primary');
        
        heroTitle.textContent = randomMovie.title;
        heroDescription.textContent = randomMovie.description;
        heroSection.style.backgroundImage = `url('${randomMovie.thumbnail}')`;
        
        // Update play button to open trailer
        playBtn.onclick = (e) => {
            e.preventDefault();
            openTrailer(randomMovie.trailerId);
        };
        
        return randomMovie.title;
    }

    function fillCarousels() {
        const carousels = document.querySelectorAll('.movie-carousel');
        const currentHeroTitle = document.querySelector('.hero-title').textContent;
        
        carousels.forEach(carousel => {
            carousel.innerHTML = '';
            const randomMovies = getRandomMovies(5, currentHeroTitle);
            
            randomMovies.forEach(movie => {
                const movieItem = document.createElement('a');
                movieItem.href = '#';
                movieItem.className = `movie-item ${movie.available === false ? 'unavailable' : ''}`;
                movieItem.innerHTML = `
                    <img src="${movie.thumbnail}" alt="${movie.title}">
                    <p>${movie.title}</p>
                `;
                
                // Add click event to play trailer
                movieItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (movie.available !== false) {
                        openTrailer(movie.trailerId);
                    } else {
                        alert('This trailer is not available for playback on our site.');
                    }
                });
                
                carousel.appendChild(movieItem);
            });
        });
    }

    function addRandomButton() {
        const heroButtons = document.querySelector('.hero-buttons');
        
        if (document.querySelector('.randomize-btn')) return;
        
        const randomBtn = document.createElement('button');
        randomBtn.className = 'btn btn-secondary randomize-btn';
        randomBtn.innerHTML = '<i class="bx bx-shuffle"></i> Show Random Movies';
        
        randomBtn.addEventListener('click', function(e) {
            e.preventDefault();
            randomizeContent();
        });
        
        heroButtons.appendChild(randomBtn);
    }

    function randomizeContent() {
        const currentHeroTitle = updateHeroMovie();
        fillCarousels();
        
        const heroContent = document.querySelector('.hero-content');
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transition = 'opacity 0.5s ease';
        }, 300);
    }

    function initMovies() {
        updateHeroMovie();
        fillCarousels();
        addRandomButton();
    }

    // Start everything
    initMovies();
    setupNavButtons();

    // Auto randomize every 45 seconds
    setInterval(() => {
        randomizeContent();
    }, 45000);

    console.log("CUT.TO Movies website ready! All features working.");
});