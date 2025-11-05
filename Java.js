document.addEventListener('DOMContentLoaded', function() {
    
    // --- Header Background Change on Scroll ---
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // --- MOVIE DATABASE WITH TRAILERS ---
    const moviesDatabase = [
        {
            title: "John Wick: Chapter 4",
            description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances.",
            trailerId: "qEVUtrk8_B4",
            thumbnail: "https://img.youtube.com/vi/qEVUtrk8_B4/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "6:45"
        },
        {
            title: "Mission: Impossible 7",
            description: "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands.",
            trailerId: "avz06PDqDbM",
            thumbnail: "https://img.youtube.com/vi/avz06PDqDbM/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:22"
        },
        {
            title: "The Batman",
            description: "When a killer targets Gotham's elite with a series of sadistic machinations, Batman must uncover the culprit and bring justice to the city.",
            trailerId: "mqqft2x_Aa4",
            thumbnail: "https://img.youtube.com/vi/mqqft2x_Aa4/maxresdefault.jpg",
            genre: "Action",
            year: "2022",
            duration: "6:15"
        },
        {
            title: "Dune: Part Two",
            description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
            trailerId: "U2Qp5pL3ovA",
            thumbnail: "https://img.youtube.com/vi/U2Qp5pL3ovA/maxresdefault.jpg",
            genre: "Sci-Fi",
            year: "2024",
            duration: "7:38"
        },
        {
            title: "Avatar: The Way of Water",
            description: "Jake Sully lives with his newfound family formed on Pandora. When a familiar threat returns, he must work with Neytiri and the army of the Na'vi race to protect their home.",
            trailerId: "d9MyW72ELq0",
            thumbnail: "https://img.youtube.com/vi/d9MyW72ELq0/maxresdefault.jpg",
            genre: "Sci-Fi",
            year: "2022",
            duration: "6:52"
        },
        {
            title: "Oppenheimer",
            description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
            trailerId: "uYPbbksJxIg",
            thumbnail: "https://img.youtube.com/vi/uYPbbksJxIg/maxresdefault.jpg",
            genre: "Drama",
            year: "2023",
            duration: "7:15"
        },
        {
            title: "Spider-Man: Across the Spider-Verse",
            description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
            trailerId: "shW9i6k8cB0",
            thumbnail: "https://img.youtube.com/vi/shW9i6k8cB0/maxresdefault.jpg",
            genre: "Animation",
            year: "2023",
            duration: "6:47"
        },
        {
            title: "Black Panther: Wakanda Forever",
            description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
            trailerId: "RlOB3UALvrQ",
            thumbnail: "https://img.youtube.com/vi/RlOB3UALvrQ/maxresdefault.jpg",
            genre: "Action",
            year: "2022",
            duration: "7:01"
        },
        {
            title: "The Super Mario Bros. Movie",
            description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.",
            trailerId: "TnGl01FkMMo",
            thumbnail: "https://img.youtube.com/vi/TnGl01FkMMo/maxresdefault.jpg",
            genre: "Animation",
            year: "2023",
            duration: "6:33"
        },
        {
            title: "Guardians of the Galaxy Vol. 3",
            description: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own.",
            trailerId: "u3V5KDHRQvk",
            thumbnail: "https://img.youtube.com/vi/u3V5KDHRQvk/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:18"
        },
        {
            title: "Fast X",
            description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
            trailerId: "eoOaKN4qCKw",
            thumbnail: "https://img.youtube.com/vi/eoOaKN4qCKw/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "6:29"
        },
        {
            title: "The Little Mermaid",
            description: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water.",
            trailerId: "kpGo2_d3oYE",
            thumbnail: "https://img.youtube.com/vi/kpGo2_d3oYE/maxresdefault.jpg",
            genre: "Fantasy",
            year: "2023",
            duration: "6:55"
        },
        {
            title: "Transformers: Rise of the Beasts",
            description: "Optimus Prime and the Autobots take on their biggest challenge yet in this action-packed adventure.",
            trailerId: "itnqEauWQZM",
            thumbnail: "https://img.youtube.com/vi/itnqEauWQZM/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:12"
        },
        {
            title: "Barbie",
            description: "Barbie suffers a crisis that leads her to question her world and her existence in this live-action adventure.",
            trailerId: "pBk4NYhWNMM",
            thumbnail: "https://img.youtube.com/vi/pBk4NYhWNMM/maxresdefault.jpg",
            genre: "Comedy",
            year: "2023",
            duration: "6:41"
        },
        {
            title: "The Flash",
            description: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes.",
            trailerId: "hebWYacbdvc",
            thumbnail: "https://img.youtube.com/vi/hebWYacbdvc/maxresdefault.jpg",
            genre: "Action",
            year: "2023",
            duration: "7:05"
        }
    ];

    // --- VOLUME CONTROL VARIABLES ---
    let currentVolume = 50; // Default volume (0-100)
    let currentIframe = null;
    let currentZoom = 130; // Increased default zoom level for better visibility
    let currentMovieIndex = 0;
    let currentMovie = null;

    // --- TRAILER MODAL FUNCTIONALITY ---
    const modal = document.createElement('div');
    modal.id = 'trailerModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            
            <!-- Movie Title Display -->
            <div class="movie-title-display" id="movieTitleDisplay">
                <h2 id="currentMovieTitle">Movie Title</h2>
            </div>

            <!-- Navigation Controls -->
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

            <!-- Zoom Controls -->
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

            <!-- Centered Trailer Player -->
            <div class="trailer-container">
                <div id="trailerPlayer"></div>
            </div>

            <!-- Bottom Controls -->
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

    // Add modal styles
    const modalStyles = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.95);
            animation: fadeIn 0.3s;
        }
        .modal-content {
            position: relative;
            margin: 2% auto;
            width: 95%;
            max-width: 1400px;
            background: #0a0a0a;
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
            display: flex;
            flex-direction: column;
            height: 90vh;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .close {
            position: absolute;
            top: 15px;
            right: 15px;
            color: white;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            z-index: 1001;
            background: rgba(0,0,0,0.7);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .close:hover {
            color: #e50914;
            background: rgba(255,255,255,0.1);
            transform: scale(1.1);
        }
        
        /* Movie Title Display */
        .movie-title-display {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1001;
            background: rgba(0,0,0,0.8);
            padding: 10px 20px;
            border-radius: 25px;
            border: 1px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
        }
        .movie-title-display h2 {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
            text-align: center;
            white-space: nowrap;
        }
        
        /* Navigation Controls */
        .navigation-controls {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            z-index: 1001;
        }
        .nav-btn {
            background: rgba(0,0,0,0.7);
            border: 2px solid rgba(255,255,255,0.3);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }
        .nav-btn:hover {
            background: #e50914;
            border-color: #e50914;
            transform: scale(1.1);
        }
        .nav-btn i {
            font-size: 1.5rem;
        }
        .nav-tooltip {
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.8rem;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        .nav-btn:hover .nav-tooltip {
            opacity: 1;
        }
        
        /* Zoom Controls */
        .zoom-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            padding: 10px;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            justify-content: center;
        }
        .zoom-btn {
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .zoom-btn:hover {
            background: #e50914;
            transform: scale(1.05);
        }
        .zoom-btn i {
            font-size: 1.1rem;
        }
        #zoomValue {
            color: white;
            font-size: 0.9rem;
            min-width: 40px;
            text-align: center;
            font-weight: 500;
        }
        
        /* Centered Trailer Container */
        .trailer-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            overflow: hidden;
            min-height: 500px;
        }
        
        /* Trailer Player - PROPERLY CENTERED AND LARGER */
        #trailerPlayer {
            position: relative;
            width: 100%;
            max-width: 1200px;
            height: 75vh;
            min-height: 500px;
            transition: all 0.3s ease;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0,0,0,0.7);
            transform: scale(1.3);
            margin: 0 auto;
        }
        #trailerPlayer iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }
        
        /* Bottom Controls */
        .bottom-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            margin-top: 15px;
            padding: 15px;
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
        }
        .control-group {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        /* Volume Controls */
        .volume-controls {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .control-btn {
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            padding: 8px 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .control-btn:hover {
            background: #e50914;
            transform: scale(1.05);
        }
        .control-btn i {
            font-size: 1.1rem;
        }
        .volume-slider-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .volume-slider {
            width: 100px;
            height: 5px;
            border-radius: 3px;
            background: #555;
            outline: none;
            -webkit-appearance: none;
        }
        .volume-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #e50914;
            cursor: pointer;
            border: 2px solid white;
        }
        .volume-slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #e50914;
            cursor: pointer;
            border: 2px solid white;
        }
        #volumeValue {
            color: white;
            font-size: 0.85rem;
            min-width: 40px;
            text-align: center;
            font-weight: 500;
        }
        
        /* Modal Buttons */
        .modal-btn {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 10px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
        }
        .modal-btn:hover {
            background: #e50914;
            transform: translateY(-2px);
        }
        .modal-btn i {
            font-size: 1rem;
        }
        
        /* Theater Mode */
        .modal.theater-mode .modal-content {
            width: 100%;
            max-width: none;
            margin: 0;
            border-radius: 0;
            height: 100vh;
            padding: 0;
        }
        .modal.theater-mode .trailer-container {
            margin: 0;
            height: 100vh;
        }
        .modal.theater-mode #trailerPlayer {
            max-width: none;
            width: 100%;
            height: 100vh;
            transform: scale(1);
            border-radius: 0;
        }
        .modal.theater-mode .bottom-controls {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1002;
            background: rgba(0,0,0,0.8);
            padding: 15px 25px;
            border-radius: 10px;
            width: auto;
        }
        .modal.theater-mode .zoom-controls {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1002;
            background: rgba(0,0,0,0.8);
            padding: 10px 20px;
            border-radius: 10px;
        }
        .modal.theater-mode .movie-title-display {
            top: 20px;
        }
        .modal.theater-mode .navigation-controls {
            padding: 0 50px;
        }
        
        /* Fullscreen Mode */
        .modal.fullscreen {
            padding: 0;
            background: #000;
        }
        .modal.fullscreen .modal-content {
            width: 100%;
            height: 100vh;
            margin: 0;
            border-radius: 0;
            padding: 0;
            max-width: none;
            background: #000;
        }
        .modal.fullscreen .trailer-container {
            margin: 0;
            height: 100vh;
            width: 100%;
        }
        .modal.fullscreen #trailerPlayer {
            max-width: none;
            width: 100%;
            height: 100vh;
            transform: scale(1);
            border-radius: 0;
            box-shadow: none;
        }
        .modal.fullscreen .bottom-controls {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1002;
            background: rgba(0,0,0,0.9);
            padding: 15px 30px;
            border-radius: 12px;
            width: auto;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .modal.fullscreen .zoom-controls {
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1002;
            background: rgba(0,0,0,0.9);
            padding: 12px 25px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .modal.fullscreen .movie-title-display {
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1002;
            background: rgba(0,0,0,0.9);
        }
        .modal.fullscreen .navigation-controls {
            position: fixed;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            padding: 0 50px;
            z-index: 1002;
        }
        .modal.fullscreen .close {
            position: fixed;
            top: 30px;
            right: 30px;
            background: rgba(0,0,0,0.9);
            border: 1px solid rgba(255,255,255,0.2);
            z-index: 1003;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .modal-content {
                width: 98%;
                height: 85vh;
                margin: 1% auto;
            }
            #trailerPlayer {
                height: 50vh;
                min-height: 300px;
                transform: scale(1.1);
            }
            .bottom-controls {
                flex-direction: column;
                gap: 15px;
            }
            .volume-slider {
                width: 80px;
            }
            .movie-title-display h2 {
                font-size: 1rem;
            }
            .nav-btn {
                width: 40px;
                height: 40px;
            }
            .nav-btn i {
                font-size: 1.2rem;
            }
            .navigation-controls {
                padding: 0 15px;
            }
            
            .modal.fullscreen .bottom-controls,
            .modal.theater-mode .bottom-controls {
                bottom: 20px;
                padding: 12px 20px;
            }
            .modal.fullscreen .zoom-controls,
            .modal.theater-mode .zoom-controls {
                top: 20px;
                padding: 10px 15px;
            }
            .modal.fullscreen .movie-title-display,
            .modal.theater-mode .movie-title-display {
                top: 20px;
            }
            .modal.fullscreen .close,
            .modal.theater-mode .close {
                top: 20px;
                right: 20px;
            }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Navigation functions
    function getCurrentMovieIndex() {
        return moviesDatabase.findIndex(movie => movie.trailerId === currentMovie.trailerId);
    }

    function navigateToMovie(direction) {
        const currentIndex = getCurrentMovieIndex();
        let newIndex;
        
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % moviesDatabase.length;
        } else {
            newIndex = (currentIndex - 1 + moviesDatabase.length) % moviesDatabase.length;
        }
        
        const newMovie = moviesDatabase[newIndex];
        loadMovieTrailer(newMovie);
    }

    function loadMovieTrailer(movie) {
        currentMovie = movie;
        const trailerPlayer = document.getElementById('trailerPlayer');
        
        // Update movie title
        document.getElementById('currentMovieTitle').textContent = movie.title;
        
        // Load new trailer
        trailerPlayer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        currentIframe = trailerPlayer.querySelector('iframe');
        
        // Update volume
        setTimeout(() => {
            updateYouTubeVolume();
        }, 1000);
    }

    // Modal functions
    function openTrailer(trailerId) {
        currentMovie = moviesDatabase.find(movie => movie.trailerId === trailerId);
        const trailerPlayer = document.getElementById('trailerPlayer');
        
        // Update movie title
        document.getElementById('currentMovieTitle').textContent = currentMovie.title;
        
        trailerPlayer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        currentIframe = trailerPlayer.querySelector('iframe');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Update volume and zoom displays
        updateVolumeDisplay();
        updateZoomDisplay();
        
        // Set initial volume
        setTimeout(() => {
            updateYouTubeVolume();
        }, 1000);
    }

    function closeTrailer() {
        modal.style.display = 'none';
        document.getElementById('trailerPlayer').innerHTML = '';
        currentIframe = null;
        document.body.style.overflow = 'auto';
        
        // Exit fullscreen and theater mode when closing
        modal.classList.remove('fullscreen', 'theater-mode');
        resetZoom();
    }

    // Volume control functions
    function updateYouTubeVolume() {
        if (currentIframe && currentIframe.contentWindow) {
            const currentSrc = currentIframe.src;
            const baseUrl = currentSrc.split('?')[0];
            const params = new URLSearchParams(currentSrc.split('?')[1] || '');
            
            // Update volume parameter
            params.set('volume', currentVolume);
            
            // Rebuild the URL
            currentIframe.src = `${baseUrl}?${params.toString()}`;
        }
    }

    function updateVolume() {
        updateVolumeDisplay();
        updateYouTubeVolume();
    }

    function updateVolumeDisplay() {
        const volumeValue = document.getElementById('volumeValue');
        const volumeSlider = document.getElementById('volumeSlider');
        
        volumeValue.textContent = `${currentVolume}%`;
        volumeSlider.value = currentVolume;
    }

    function increaseVolume() {
        if (currentVolume < 100) {
            currentVolume = Math.min(100, currentVolume + 10);
            updateVolume();
        }
    }

    function decreaseVolume() {
        if (currentVolume > 0) {
            currentVolume = Math.max(0, currentVolume - 10);
            updateVolume();
        }
    }

    // Zoom control functions
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
        currentZoom = 130; // Reset to larger default
        updateZoomDisplay();
    }

    // Fullscreen and theater mode functions
    function toggleFullscreen() {
        if (!modal.classList.contains('fullscreen')) {
            modal.classList.add('fullscreen');
            modal.classList.remove('theater-mode');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            fullscreenBtn.innerHTML = '<i class="bx bx-exit-fullscreen"></i> Exit Fullscreen';
        } else {
            modal.classList.remove('fullscreen');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            fullscreenBtn.innerHTML = '<i class="bx bx-fullscreen"></i> Fullscreen';
        }
    }

    function toggleTheaterMode() {
        if (!modal.classList.contains('theater-mode')) {
            modal.classList.add('theater-mode');
            modal.classList.remove('fullscreen');
            const theaterBtn = document.getElementById('theaterModeBtn');
            theaterBtn.innerHTML = '<i class="bx bx-exit"></i> Exit Theater';
        } else {
            modal.classList.remove('theater-mode');
            const theaterBtn = document.getElementById('theaterModeBtn');
            theaterBtn.innerHTML = '<i class="bx bx-movie"></i> Theater';
        }
    }

    // Modal event listeners
    document.querySelector('.close').addEventListener('click', closeTrailer);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeTrailer();
        }
    });

    // Volume control event listeners
    document.getElementById('volumeUp').addEventListener('click', increaseVolume);
    document.getElementById('volumeDown').addEventListener('click', decreaseVolume);
    document.getElementById('volumeSlider').addEventListener('input', (e) => {
        currentVolume = parseInt(e.target.value);
        updateVolume();
    });

    // Zoom control event listeners
    document.getElementById('zoomIn').addEventListener('click', zoomIn);
    document.getElementById('zoomOut').addEventListener('click', zoomOut);
    document.getElementById('resetZoom').addEventListener('click', resetZoom);

    // Navigation event listeners
    document.getElementById('prevMovie').addEventListener('click', () => navigateToMovie('prev'));
    document.getElementById('nextMovie').addEventListener('click', () => navigateToMovie('next'));

    // Fullscreen and theater mode listeners
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    document.getElementById('theaterModeBtn').addEventListener('click', toggleTheaterMode);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'ArrowLeft':
                    navigateToMovie('prev');
                    break;
                case 'ArrowRight':
                    navigateToMovie('next');
                    break;
                case 'Escape':
                    closeTrailer();
                    break;
            }
        }
    });

    // ... (rest of the code remains the same for search, navigation buttons, random movies functionality)

    // --- SEARCH BAR FUNCTIONALITY ---
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    function performSearch(query) {
        if (!query.trim()) {
            hideSearchResults();
            return;
        }

        const results = moviesDatabase.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase()) ||
            movie.year.includes(query)
        );

        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No movies found</div>';
        } else {
            results.forEach(movie => {
                const resultItem = document.createElement('a');
                resultItem.href = '#';
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <img src="${movie.thumbnail}" alt="${movie.title}" class="search-result-img">
                    <div class="search-result-info">
                        <div class="search-result-title">${movie.title}</div>
                        <div class="search-result-year">${movie.year} • ${movie.genre} • ${movie.duration}</div>
                    </div>
                `;
                
                resultItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    openTrailer(movie.trailerId);
                    hideSearchResults();
                    searchInput.value = '';
                });
                
                searchResults.appendChild(resultItem);
            });
        }

        searchResults.classList.add('active');
    }

    function hideSearchResults() {
        searchResults.classList.remove('active');
    }

    // Search event listeners
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            performSearch(searchInput.value);
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchResults();
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideSearchResults();
        }
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
            e.preventDefault();
        }
    });

    // --- NAVIGATION BUTTONS FUNCTIONALITY ---
    function setupNavigationButtons() {
        // Home button
        const homeButton = document.querySelector('.nav__link.active');
        homeButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // New & Popular button
        const newPopularButton = document.querySelectorAll('.nav__link')[1];
        newPopularButton.addEventListener('click', (e) => {
            e.preventDefault();
            const newReleasesSection = document.querySelector('.category:nth-child(2)');
            newReleasesSection.scrollIntoView({ behavior: 'smooth' });
        });

        // My List button
        const myListButton = document.querySelectorAll('.nav__link')[2];
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

        // More Info button in hero section
        const moreInfoBtn = document.querySelector('.btn--secondary');
        moreInfoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentMovie = document.querySelector('.hero__title').textContent;
            alert(`More information about "${currentMovie}" coming soon! ℹ️`);
        });
    }

    // --- RANDOM MOVIE FUNCTIONALITY ---
    function getRandomMovies(count, excludeTitle = null) {
        let availableMovies = [...moviesDatabase];
        
        if (excludeTitle) {
            availableMovies = availableMovies.filter(movie => movie.title !== excludeTitle);
        }
        
        const shuffled = [...availableMovies].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function updateHeroWithRandomMovie() {
        const randomMovie = getRandomMovies(1)[0];
        const heroSection = document.querySelector('.hero');
        const heroTitle = document.querySelector('.hero__title');
        const heroDescription = document.querySelector('.hero__description');
        const playBtn = document.querySelector('.btn--primary');
        
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

    function populateCarouselsWithRandomMovies() {
        const carousels = document.querySelectorAll('.movie-carousel');
        const currentHeroTitle = document.querySelector('.hero__title').textContent;
        
        carousels.forEach(carousel => {
            carousel.innerHTML = '';
            const randomMovies = getRandomMovies(5, currentHeroTitle);
            
            randomMovies.forEach(movie => {
                const movieItem = document.createElement('a');
                movieItem.href = '#';
                movieItem.className = 'movie-item';
                movieItem.innerHTML = `
                    <img src="${movie.thumbnail}" alt="${movie.title}">
                    <p>${movie.title}</p>
                `;
                
                // Add click event to play trailer
                movieItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    openTrailer(movie.trailerId);
                });
                
                carousel.appendChild(movieItem);
            });
        });
    }

    function addRandomizeButton() {
        const heroButtons = document.querySelector('.hero__buttons');
        
        if (document.querySelector('.randomize-btn')) return;
        
        const randomizeBtn = document.createElement('a');
        randomizeBtn.href = '#';
        randomizeBtn.className = 'btn btn--secondary randomize-btn';
        randomizeBtn.innerHTML = '<i class="bx bx-shuffle"></i> Show Random Movies';
        
        randomizeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            randomizeAllContent();
        });
        
        heroButtons.appendChild(randomizeBtn);
    }

    function randomizeAllContent() {
        const currentHeroTitle = updateHeroWithRandomMovie();
        populateCarouselsWithRandomMovies();
        
        const heroContent = document.querySelector('.hero__content');
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transition = 'opacity 0.5s ease';
        }, 300);
    }

    function initializeRandomMovies() {
        updateHeroWithRandomMovie();
        populateCarouselsWithRandomMovies();
        addRandomizeButton();
    }

    // Initialize everything
    initializeRandomMovies();
    setupNavigationButtons();

    // Auto-randomize every 45 seconds
    setInterval(() => {
        randomizeAllContent();
    }, 45000);

    console.log("CUT.TO MOVIES site loaded successfully with enhanced trailer controls and navigation!");
});