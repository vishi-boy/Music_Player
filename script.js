  class MusicPlayer {
            constructor() {
                this.audio = document.getElementById('audioPlayer');
                this.playBtn = document.getElementById('playBtn');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                this.progressBar = document.getElementById('progressBar');
                this.progress = document.getElementById('progress');
                this.currentTimeEl = document.getElementById('currentTime');
                this.durationEl = document.getElementById('duration');
                this.volumeSlider = document.getElementById('volumeSlider');
                this.volumeValue = document.getElementById('volumeValue');
                this.songTitle = document.getElementById('songTitle');
                this.artistName = document.getElementById('artistName');
                this.albumArt = document.getElementById('albumArt');
                this.playlistContainer = document.getElementById('playlistContainer');
                this.autoplayToggle = document.getElementById('autoplayToggle');
                this.lyricsText = document.getElementById('lyricsText');

                this.isPlaying = true;
                this.currentSongIndex = 0;
                this.autoplay = false;
                this.currentLyricIndex = 0;
                this.lyricsInterval = null;
                this.useRealAudio = true; // Set to true when you have real audio files

                // Enhanced playlist with high-quality images and audio file paths
                this.playlist = [
                    {
                        title: "Paaro",
                        artist: "Aditiya Rikhari",
                        duration: "2:33",
                        durationSeconds: 153,
                        audioFile: "audio/Paaro.mp3", // Replace with actual file path
                        image: "image/paaro.jpeg",
                        lyrics: [
                            { time: 0, text: "Ke ab kuchh hosh nahin hai" },
                            { time: 10, text: "Tu mujhko pila degi kya?" },
                            { time: 15, text: "Main peekar jo bhi kahunga" },
                            { time: 23, text: "Tu subah bhula degi kya?" },
                            { time: 30, text: "Tu baahon mein rakh le do pal" },
                            { time: 35, text: "Phir chaahe duur hata de" },
                            { time: 40, text: "Main gaud mein rakh loon agar sar" },
                            { time: 45, text: "Tu mujhko sula degi kya?" },
                            { time: 50, text: "Jaati nahin teri yaadein" },
                            { time: 63, text: "Kasam se, ke dil ka bharam hai tu" },
                            { time: 70, text: "Baaki nahin ab koi sharam" },
                            { time: 75, text: "Jaana, ek dharam hai tu" },
                            { time: 80, text: "Jo kehti thi, Mat piyo na" },
                            { time: 85, text: "Meri jaan, zehar hai ye" },
                            { time: 90, text: "Use dekhta hoon koi gair chhuye" }
                        ]
                    },
                    {
                        title: "Millionaire",
                        artist: "Yo Yo Honey Singh",
                        duration: "3:19",
                        durationSeconds: 200,
                        audioFile: "./audio/Millionaire.mp3", // Replace with actual file path
                        image: "image/millionare.jpeg",
                        lyrics: [

                            { time: 0, text: "Italy di maid, fat cigars" },
                            { time: 12, text: "Pull up like a sheikh, chauffeured cars" },
                            { time: 24, text: "Tailored suits, lakkhan de pair" },
                            { time: 36, text: "I'm a motherfucking millionaire" },
                            { time: 48, text: "Foreign di deals, mote dinars" },
                            { time: 60, text: "I got dirty money, super powers" },
                            { time: 72, text: "Munda ae rare, karda nahi care" },
                            { time: 84, text: "I'm a motherfucking millionaire" },
                            { time: 96, text: "Italy di maid, fat cigars" },
                            { time: 108, text: "Pull up like a sheikh, chauffeured cars" },
                            { time: 120, text: "Tailored suits, lakkhan de pair (yeah)" },
                            { time: 132, text: "I'm a motherfucking millionaire (uh-uh)" },
                            { time: 144, text: "Munda top da brand, agg laggi hoi ae stocks nu" },
                            { time: 156, text: "Red Bull naal ae glassy, khambh lagge mere thoughts nu" },
                            { time: 168, text: "Das saal ho gaye, ajj vi ohna de zehen 'ch main rent free" },
                            { time: 180, text: "Pole dance roz main karaunda, billo, unglaan 'te opps nu" },
                            { time: 192, text: "Oh chaunde reply, munda dinda nahiyo shit koi" },
                            { time: 204, text: "Mere naa' muqable 'ch hunda nahiyo fit koi" },
                            { time: 216, text: "Oh ajj vi ne label'an di rehnde juth chatde" },
                            { time: 228, text: "Taan vi mere zikar bina na geet hit koi" }


                        ]
                    },
                    {
                        title: "BAAWE",
                        artist: "Raftar X Badshah",
                        duration: "2:39",
                        durationSeconds: 160,
                        audioFile: "./audio/BAAWE.mp3", // Replace with actual file path
                        image: "image/baawe.jpeg", lyrics: [
                            { time: 0, text: "Kami koi, hai Nai baawe" },
                            { time: 16, text: "Nai paise waale bande, pushtaini baawe" },
                            { time: 32, text: "Chrono automatic, Chrome mera semi baawe" },
                            { time: 48, text: "Banda aar-paar dekhe, aankhe paini baawe" },
                            { time: 64, text: "Enemy, many baawe" },
                            { time: 80, text: "Gaane sar chadh bolein jaise fanny baawe" },
                            { time: 96, text: "Gaadi India mein teen guna mehengi baawe" },
                            { time: 112, text: "Banda aar-paar dekhe, aankhe paini baawe" },
                            { time: 128, text: "Vision clear mera jabse beeta 2020" },
                            { time: 144, text: "Baawe chhati chaudi kr, babu ki kardi knees weak" },
                            { time: 160, text: "G5 se overseas skinny martinis bees neez" },
                            { time: 176, text: "Paise upar sau feesadi, qalaa se maine fees di" },
                            { time: 192, text: "\"Keys, Please\" valet mein hote scene veen" },
                            { time: 208, text: "Jis gaadi mein R lage do, rakhi wo teen-teen" },
                            { time: 224, text: "Yamraj flow, khaun rappers jaise heem cream" },
                            { time: 240, text: "Kamra band hote hi baby khule jaise seam" },
                            { time: 256, text: "Zim Zima, hamne beamer li, tum lena beema" },
                            { time: 272, text: "Shah bola, \"ruk\", mene scene kara dheema" },
                            { time: 288, text: "Beef de dikhaayi to shaahi banega keema" },
                            { time: 304, text: "BHAIYA TRAILER CHAL RHI HAI, ABHI BAAKI HAI CINEMAA!!" },
                            { time: 320, text: "CUT! To hai dede kya gifat" },
                            { time: 336, text: "Chatakte hain launde to, sooje hai buttocks" },
                            { time: 352, text: "Raa aur Shah, inn dono naamon ko ratt" },
                            { time: 368, text: "Jo ye do jane judein, inki do mein jaaye batt (that's fixed)" },
                            { time: 384, text: "Kami koi, hai Nai baawe" },
                            { time: 400, text: "Nai paise waale bande pushtaini baawe" },
                            { time: 416, text: "Chrono automatic, Chrome mera semi baawe" },
                            { time: 432, text: "Banda aar-paar dekhe, aankhe paini baawe" },
                            { time: 448, text: "Enemy many baawe" }
                        ]
                    },
                    {
                        title: "FAREBI",
                        artist: "Chaar Diwaar x Raftar",
                        duration: "5:04",
                        durationSeconds: 304,
                        audioFile: "./audio/FAREBI.mp3", // Replace with actual file path
                        image: "image/farebi.jpeg", lyrics: [
                            { time: 0.0, text: "Downtown Mein Lagi Aag" },
                            { time: 7.3, text: "Sabhi Bhaage (Bhaage Bhaage)" },
                            { time: 14.6, text: "Building Se Nikle Dhuan" },
                            { time: 21.9, text: "Abe Sab Jal Gaya" },
                            { time: 29.3, text: "Toh Sabhi Bhaage (Bhaage Bhaage)" },
                            { time: 36.6, text: "Public Mein Mache Hahakaar" },
                            { time: 43.9, text: "Mujrim Faraar" },
                            { time: 51.2, text: "Gaya Vo Kahan Pe? Na Jaane" },
                            { time: 58.5, text: "Hai Peeche Peeche Police Mere" },
                            { time: 65.8, text: "Jaldi Jaldi" },
                            { time: 73.2, text: "Bhaagta Main Aage" },
                            { time: 80.5, text: "Basta Bachaa Ke (Haan)" },
                            { time: 87.8, text: "Jisme Chori Ka Maal" },
                            { time: 95.1, text: "Kisi Ka Dil Rakhaa" },
                            { time: 102.4, text: "Khichta Hai" },
                            { time: 109.7, text: "Mujhe Tujh Tak" },
                            { time: 117.1, text: "Jaane Kon Farishta" },
                            { time: 124.4, text: "Aa Gaya Main" },
                            { time: 131.7, text: "Tere Ghar Par" },
                            { time: 139.0, text: "Dar-Ba-Dar Tha" },
                            { time: 146.3, text: "Bhataktaa" },
                            { time: 153.6, text: "Mil Gayi Hai" },
                            { time: 161.0, text: "Teri Bhoori Bhoori" },
                            { time: 168.3, text: "Dono Aakhein" },
                            { time: 175.6, text: "Aakhon Se Meri" },
                            { time: 182.9, text: "Ho Gaya Vo" },
                            { time: 190.2, text: "Mujhe Jiska Darr Tha" },
                            { time: 197.5, text: "Laila Ko Lagtaa Hu" },
                            { time: 204.9, text: "Main Farebi" },
                            { time: 212.2, text: "Haan Farebi" },
                            { time: 219.5, text: "Kya Kahegi Ye" },
                            { time: 226.8, text: "Kya Meri Saari Baatein Hain" },
                            { time: 234.1, text: "Farebi" },
                            { time: 241.4, text: "Main Farebi" },
                            { time: 248.8, text: "Jaan Legi Ye" },
                            { time: 256.1, text: "Laila Ko Lagtaa Hu" },
                            { time: 263.4, text: "Main Farebi" },
                            { time: 270.7, text: "Haan Farebi" },
                            { time: 278.0, text: "Kya Kahegi Ye" },
                            { time: 285.3, text: "Kya Meri Saari Baatein Hain" },
                            { time: 292.7, text: "Farebi" },
                            { time: 300.0, text: "Main Farebi" }
                        ]
                    },
                    {
                        title: "BONITA",
                        artist: "Honey Singh",
                        duration: "2:58",
                        durationSeconds: 178,
                        audioFile: "./audio/Bonita.mp3", // Replace with actual file path
                        image: "image/bonita.jpeg",
                        lyrics: [

                            { time: 0, text: "Tu hi ae meri bonita" },
                            { time: 15, text: "Tera badan lagge laguna" },
                            { time: 30, text: "Ni tu ae soni mutiyaran" },
                            { time: 45, text: "Ni tu ae sassi te main ae punnu" },
                            { time: 60, text: "Tu ae soneya, main ae tera jogi" },
                            { time: 75, text: "Ni tu ae soni kudi, main tera yaar rog wala" },
                            { time: 90, text: "Ni main chhad ke na jaavan kadi tenu" },
                            { time: 105, text: "Ni tu ae meri soni, meri queen tu" },
                            { time: 120, text: "Main ae tera king, meri dream tu" },
                            { time: 135, text: "Ni tu ae tequila, main ae lime" },
                            { time: 150, text: "Ni baby we together like rhyme" },
                            { time: 165, text: "Mainu lagdi ae patola" },
                            { time: 180, text: "Ni tu vich disco ch dolaa" },
                            { time: 195, text: "Ni tu ae meri bonita (uh-huh)" }


                        ]
                    }
                ];

                this.initializePlayer();
                this.bindEvents();
                this.renderPlaylist();
                this.loadSong(0);
            }

            initializePlayer() {
                this.audio.volume = 0.5;
                this.audio.addEventListener('loadedmetadata', () => {
                    if (this.useRealAudio) {
                        this.duration = this.audio.duration;
                        this.durationEl.textContent = this.formatTime(this.duration);
                    }
                });

                this.audio.addEventListener('timeupdate', () => {
                    if (this.useRealAudio && this.isPlaying) {
                        this.currentTime = this.audio.currentTime;
                        this.updateProgressDisplay();
                        this.updateLyrics();
                    }
                });

                this.audio.addEventListener('ended', () => {
                    if (this.useRealAudio) {
                        this.pause();
                        if (this.autoplay) {
                            setTimeout(() => this.nextSong(), 1000);
                        }
                    }
                });
            }

            bindEvents() {
                this.playBtn.addEventListener('click', () => this.togglePlay());
                this.prevBtn.addEventListener('click', () => this.previousSong());
                this.nextBtn.addEventListener('click', () => this.nextSong());
                this.progressBar.addEventListener('click', (e) => this.setProgress(e));
                this.volumeSlider.addEventListener('input', (e) => this.setVolume(e));
                this.autoplayToggle.addEventListener('click', () => this.toggleAutoplay());

                // Tab switching
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
                });

                // Simulate audio events for demo mode
                if (!this.useRealAudio) {
                    setInterval(() => {
                        if (this.isPlaying) {
                            this.updateProgress();
                            this.updateLyrics();
                        }
                    }, 1000);
                }
            }

            togglePlay() {
                if (this.isPlaying) {
                    this.pause();
                } else {
                    this.play();
                }
            }

            play() {
                this.isPlaying = true;
                this.playBtn.textContent = '⏸';

                if (this.useRealAudio) {
                    this.audio.play().catch(e => {
                        console.log('Audio play failed:', e);
                        this.isPlaying = false;
                        this.playBtn.textContent = '▶';
                    });
                } else {
                    this.startProgressSimulation();
                }

                this.displayLyrics();
            }

            pause() {
                this.isPlaying = false;
                this.playBtn.textContent = '▶';

                if (this.useRealAudio) {
                    this.audio.pause();
                } else {
                    this.stopProgressSimulation();
                }
            }

            nextSong() {
                this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length;
                this.loadSong(this.currentSongIndex);
                if (this.isPlaying) {
                    setTimeout(() => this.play(), 100);
                }
            }

            previousSong() {
                this.currentSongIndex = this.currentSongIndex === 0 ? this.playlist.length - 1 : this.currentSongIndex - 1;
                this.loadSong(this.currentSongIndex);
                if (this.isPlaying) {
                    setTimeout(() => this.play(), 100);
                }
            }

            loadSong(index) {
                const song = this.playlist[index];
                this.songTitle.textContent = song.title;
                this.artistName.textContent = song.artist;
                this.currentTimeEl.textContent = '0:00';
                this.progress.style.width = '0%';
                this.currentTime = 0;
                this.currentLyricIndex = 0;

                if (this.useRealAudio) {
                    this.audio.src = song.audioFile;
                    this.audio.load();
                } else {
                    this.duration = song.durationSeconds;
                    this.durationEl.textContent = song.duration;
                }

                // Update album art with high-quality image
                this.albumArt.innerHTML = `
                    <img src="${song.image}" alt="${song.title}" 
                         onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(45deg, #ff6b6b, #4ecdc4)'; this.parentElement.innerHTML='🎵';">
                `;

                this.updatePlaylistHighlight();
                this.displayLyrics();
            }

            setProgress(e) {
                const width = this.progressBar.clientWidth;
                const clickX = e.offsetX;
                const newTime = (clickX / width) * this.duration;

                if (this.useRealAudio) {
                    this.audio.currentTime = newTime;
                } else {
                    this.currentTime = newTime;
                    this.progress.style.width = (clickX / width) * 100 + '%';
                    this.currentTimeEl.textContent = this.formatTime(this.currentTime);
                }
            }

            setVolume(e) {
                const volume = e.target.value;
                this.audio.volume = volume / 100;
                this.volumeValue.textContent = volume + '%';
            }

            toggleAutoplay() {
                this.autoplay = !this.autoplay;
                this.autoplayToggle.classList.toggle('active', this.autoplay);
            }

            startProgressSimulation() {
                this.progressInterval = setInterval(() => {
                    if (this.currentTime >= this.duration) {
                        this.currentTime = this.duration;
                        this.pause();
                        if (this.autoplay) {
                            setTimeout(() => this.nextSong(), 1000);
                        }
                    } else {
                        this.currentTime += 1;
                    }
                    this.updateProgressDisplay();
                }, 1000);
            }

            stopProgressSimulation() {
                if (this.progressInterval) {
                    clearInterval(this.progressInterval);
                }
            }

            updateProgress() {
                if (!this.useRealAudio) {
                    this.updateProgressDisplay();
                }
            }

            updateProgressDisplay() {
                const progressPercent = (this.currentTime / this.duration) * 100;
                this.progress.style.width = progressPercent + '%';
                this.currentTimeEl.textContent = this.formatTime(this.currentTime);
            }

            formatTime(seconds) {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs.toString().padStart(2, '0')}`;
            }

            renderPlaylist() {
                this.playlistContainer.innerHTML = '';
                this.playlist.forEach((song, index) => {
                    const item = document.createElement('div');
                    item.className = 'playlist-item';
                    item.innerHTML = `
                        <div class="playlist-number">${index + 1}</div>
                        <div class="playlist-info">
                            <div class="playlist-title">${song.title}</div>
                            <div class="playlist-artist">${song.artist}</div>
                        </div>
                        <div class="playlist-duration">${song.duration}</div>
                    `;

                    item.addEventListener('click', () => {
                        this.currentSongIndex = index;
                        this.loadSong(index);
                        this.play();
                    });

                    this.playlistContainer.appendChild(item);
                });
            }

            updatePlaylistHighlight() {
                const items = this.playlistContainer.querySelectorAll('.playlist-item');
                items.forEach((item, index) => {
                    item.classList.toggle('active', index === this.currentSongIndex);
                });
            }

            switchTab(tabName) {
                // Update tab buttons
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.classList.remove('active');
                });
                document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

                // Update tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(`${tabName}-tab`).classList.add('active');
            }

            displayLyrics() {
                const song = this.playlist[this.currentSongIndex];
                if (!song.lyrics) {
                    this.lyricsText.innerHTML = '<div class="lyrics-line">No lyrics available</div>';
                    return;
                }

                this.lyricsText.innerHTML = song.lyrics
                    .map((lyric, index) => `<div class="lyrics-line" data-index="${index}">${lyric.text}</div>`)
                    .join('');
            }

            updateLyrics() {
                const song = this.playlist[this.currentSongIndex];
                if (!song.lyrics) return;

                // Find current lyric based on time
                let currentIndex = -1;
                for (let i = 0; i < song.lyrics.length; i++) {
                    if (this.currentTime >= song.lyrics[i].time) {
                        currentIndex = i;
                    } else {
                        break;
                    }
                }

                // Update active lyric
                const lyricLines = this.lyricsText.querySelectorAll('.lyrics-line');
                lyricLines.forEach((line, index) => {
                    line.classList.toggle('active', index === currentIndex);
                });

                // Auto-scroll to active lyric
                if (currentIndex >= 0 && currentIndex < lyricLines.length) {
                    const activeLine = lyricLines[currentIndex];
                    const container = this.lyricsText.parentElement;
                    const containerHeight = container.clientHeight;
                    const lineTop = activeLine.offsetTop;
                    const lineHeight = activeLine.clientHeight;

                    container.scrollTop = lineTop - containerHeight / 2 + lineHeight / 2;
                }
            }
        }

        // Initialize the music player when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            new MusicPlayer();
        });
