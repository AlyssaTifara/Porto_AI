// ========================================
// PROFESSIONAL PORTFOLIO JAVASCRIPT
// Mobile navigation and smooth interactions
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------
    // Project detail data (extendable)
    // ----------------------------------------
    const projectsData = {
        'm111': {
            title: 'Dashboard Analitik Operasional Event – M111 Ngalam Folding Bike',
            overview:
                'Studi kasus operational monitoring berbasis ETL: data registrasi dari tiga sumber (100+ catatan) dibersihkan, distandarkan, dan digabungkan untuk membangun dashboard KPI event yang lebih konsisten dan mudah ditindaklanjuti.',
            tools: [
                'Power BI',
                'Power Query',
                'Microsoft Excel',
                'ETL',
                'Data Pipeline'
            ],
            problem:
                'Tim operasional membutuhkan pemantauan peserta secara cepat, tetapi data registrasi tersebar di tiga sumber dengan format berbeda, nilai kosong, dan duplikasi yang menurunkan kecepatan serta akurasi pelaporan.',
            dataTools: {
                source:
                'Data registrasi peserta event M111 Ngalam Folding Bike (100+ catatan, 3 sumber operasional)',
                tools:
                'Power BI, Power Query, Microsoft Excel',
                variables:
                'Distribusi peserta, status registrasi, kupon subsidi, KPI operasional event'
            },
            insights: [
                'Standarisasi lintas sumber menghasilkan satu dataset operasional yang lebih stabil untuk monitoring harian.',
                'Transformasi terstruktur membantu menurunkan noise data sehingga pembacaan KPI menjadi lebih jelas.',
                'Dashboard Power BI memudahkan tim melihat distribusi peserta dan status registrasi pada satu tampilan.'
            ],
            recommendation: {
                actions:
                'Jadwalkan refresh data berkala dan tetapkan template input registrasi agar kualitas data lebih konsisten.',
                impact:
                'Pelaporan operasional menjadi lebih cepat, proses rekonsiliasi lebih rapi, dan keputusan lapangan lebih responsif.'
            },
            reflection: {
                limitations:
                'Data masih terbatas pada satu event dan belum terhubung langsung ke sumber registrasi real-time.',
                learned:
                'Workflow ETL yang terdokumentasi membantu menjaga konsistensi proses saat data diperbarui.',
                future:
                'Mengembangkan alur ETL semi-otomatis dan validasi input di awal proses untuk event berikutnya.'
            },
            image: {
                src: '',
                alt: 'M111 Event Analytics Dashboard'
            },
            dashboardGallery: {
                title: 'Dashboard Preview',
                items: [
                    {
                        src: 'assets/documents/projects/M111/dashboard-1.png',
                        width: 1568,
                        height: 1003,
                        alt: 'M111 Participant Distribution Dashboard preview',
                        label: 'Participant Distribution Dashboard'
                    },
                    {
                        src: 'assets/documents/projects/M111/light version (2).png',
                        width: 1672,
                        height: 941,
                        alt: 'M111 Operational KPI Dashboard preview',
                        label: 'Operational KPI Dashboard'
                    }
                ]
            },
            links: { report: '' }
        },
        'atm': {
            title: 'Sistem Informasi Akreditasi D4 SIB – Politeknik Negeri Malang',
            overview:
                'Studi kasus structured information system untuk akreditasi: konsolidasi data, validasi bertingkat berbasis peran, dan penyusunan borang yang lebih terkontrol agar proses administrasi lebih konsisten.',
            tools: [
                'Laravel 10',
                'Bootstrap 5',
                'MySQL',
                'Analisis Sistem',
                'Dokumentasi Sistem',
            ],
            problem:
                'Sebelum sistem dibangun, data akreditasi tersebar di banyak dokumen, alur validasi tidak terdokumentasi rapi, dan penyusunan borang memerlukan waktu panjang dengan risiko kesalahan manual.',
            dataTools: {
                source:
                'Data dosen, kriteria akreditasi (1–9), dokumen pendukung, status validasi & catatan revisi',
                tools:
                'MySQL, Laravel 10 (Eloquent/Blade), PHP, Bootstrap',
                variables:
                'Role pengguna, tingkat validasi, komentar revisi, lampiran, progres borang'
            },
            insights: [
                'Validasi bertahap per peran meningkatkan keterlacakan perubahan data dan status dokumen.',
                'Hak akses yang jelas membantu menjaga ketertiban alur kerja antar pengguna.',
                'Template borang terstruktur mengurangi pengulangan kerja saat kompilasi dokumen akreditasi.'
            ],
            recommendation: {
                actions:
                'Tambahkan dashboard progres per kriteria dan notifikasi tindak lanjut untuk reviewer.',
                impact:
                'Koordinasi lintas tim menjadi lebih jelas, waktu penyusunan borang berkurang, dan status validasi lebih mudah dipantau.'
            },
            reflection: {
                limitations:
                'Integrasi dengan sistem eksternal kampus masih terbatas dan optimasi tampilan mobile masih bertahap.',
                learned:
                'Pemetaan proses bisnis sejak awal sangat penting untuk menjaga konsistensi sistem multi-role.',
                future:
                'Melanjutkan integrasi ke sistem akademik kampus serta menambahkan ringkasan analitik progres per periode.'
            },
            image: {
                src: 'assets/images/projects/akre/1752500344214.jpg',
                alt: 'Dashboard Sistem Informasi Akreditasi'
            },
            links: {
                github: 'https://github.com/alfinafriansyah/PBL_Akreditasi',
                report: 'assets/documents/projects/akre/Kelompok_4__SIB_2C_Akreditasi.pdf'
            }
        },
        'retention': {
            title: 'Studify Mobile – Class Scheduler',
            overview:
                'Studi kasus intelligent scheduling workflow: aplikasi lintas platform dengan skema data terstruktur, REST API untuk sinkronisasi informasi jadwal, dan notifikasi otomatis agar koordinasi kelas lebih tertib.',
            tools: [
                'Flutter',
                'Laravel',
                'MySQL',
                'Firebase Cloud Messaging',
                'Analisis Sistem',
                'Dokumentasi Sistem',
                'Figma (design collaboration)'
            ],
            problem:
                'Koordinasi jadwal yang mengandalkan chat membuat informasi tercecer, perubahan tidak selalu terbaca, dan keputusan kelas sering terlambat.',
            dataTools: {
                source:
                'Data pengguna, kelas, jadwal kuliah, notifikasi',
                tools:
                'Laravel REST API, MySQL, Flutter, Firebase FCM',
                variables:
                'Role pengguna, jadwal, waktu notifikasi, status kelas'
            },
            insights: [
                'Sentralisasi jadwal dalam satu aplikasi membantu mengurangi miskomunikasi antar anggota kelas.',
                'Notifikasi otomatis mempercepat respons pengguna terhadap perubahan jadwal.',
                'Dokumentasi use case dan alur proses menjaga pengembangan fitur tetap terstruktur.'
            ],
            recommendation: {
                actions:
                'Tambahkan sinkronisasi kalender pribadi dan pengingat berbasis prioritas jadwal.',
                impact:
                'Koordinasi akademik menjadi lebih rapi, keterlambatan informasi berkurang, dan aktivitas kelas lebih terjadwal.'
            },
            reflection: {
                limitations:
                'Aplikasi masih berdiri mandiri dan belum terintegrasi dengan sistem akademik resmi kampus.',
                learned:
                'Perancangan alur data dan dokumentasi sistem membantu tim menjaga konsistensi implementasi lintas modul.',
                future:
                'Pengembangan lanjutan mencakup manajemen tugas, absensi, serta opsi integrasi bertahap dengan platform kampus.'
            },
            image: {
                src: 'assets/images/projects/studify/photo_2025-12-24_22-04-23.jpg',
                alt: 'Final UI Studify Mobile overview screen'
            },
            mobileShowcase: {
                screens: [
                    {
                        src: 'assets/images/projects/studify/mobile-1.png',
                        alt: 'Studify Mobile - Home screen with study features'
                    },
                    {
                        src: 'assets/images/projects/studify/mobile-2.png',
                        alt: 'Studify Mobile - Study session tracking interface'
                    },
                    {
                        src: 'assets/images/projects/studify/mobile-3.png',
                        alt: 'Studify Mobile - User profile and progress dashboard'
                    }
                ]
            },
            links: {
                github: 'https://github.com/zidnafaz/studify_frontend',
                report: 'assets/documents/projects/studify/Manual Book Mobile PBL_Kel 7.pdf'
            }
        },
        'order-delay': {
            title: 'Analisis Harga Maskapai – Strategi Masuk Pasar',
            overview:
                'EDA tiket domestik India untuk membersihkan data, membaca segmentasi maskapai dan rute, serta melihat pola harga per rute.',
            tools: [
                'Power BI',
                'Python',
                'Pandas',
                'Data Visualisasi',
                'Analisis Statistik'
            ],
            problem:
                'Tanpa pemetaan pola harga dan segmentasi pasar yang jelas, strategi masuk pasar berisiko tidak kompetitif dan sulit dievaluasi.',
            dataTools: {
                source:
                'Data harga tiket penerbangan domestik India',
                tools:
                'Power BI, Python (Pandas), Excel',
                variables:
                'Harga tiket, maskapai, rute, kelas penerbangan, waktu'
            },
            insights: [
                'Perbedaan harga antara segmen low-cost dan full-service terlihat konsisten pada banyak rute.',
                'Pola musiman dan jenis rute berpengaruh terhadap rentang harga yang ditawarkan.',
                'Segmentasi pasar membantu menyusun skenario pricing yang lebih relevan per target pelanggan.'
            ],
            recommendation: {
                actions:
                'Susun pedoman harga berbasis musim dan rute prioritas, lalu monitor KPI harga per segmen secara berkala.',
                impact:
                'Mendukung keputusan pricing yang lebih terukur dan membantu memperkuat positioning pasar awal.'
            },
            reflection: {
                limitations:
                'Analisis masih berbasis data historis dan belum memasukkan komponen biaya operasional maskapai.',
                learned:
                'Segmentasi dan visualisasi data mempermudah pembacaan pola pasar untuk diskusi strategi.',
                future:
                'Melanjutkan evaluasi dengan data periode terbaru dan memperluas analisis ke variasi rute yang lebih luas.'
            },
            image: {
                src: 'assets/images/projects/kecbis/dashboard_2.jpg',
                alt: 'Power BI Airline Pricing Dashboard'
            },
            links: {
                report: 'assets/documents/projects/kecbis/UAS Kecbis_Kel 7.pdf'
            }
        },
    };

    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const spans = menuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only smooth scroll if it's not just "#" (which might be a placeholder)
            if (href !== '#' && href !== '') {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ========================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ========================================
    // Highlights the current page in navigation
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

// ========================================
    // PROJECT DETAIL DYNAMIC RENDERING
    // ========================================
    if (currentLocation === 'project-detail.html') {
        // ===== 1. AMBIL PARAMETER URL =====
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');
        
        // ===== 2. AMBIL DOM ELEMENTS =====
        const loaderEl = document.getElementById('detail-loader');
        const shellEl = document.getElementById('detail-shell');
        const titleEl = document.querySelector('.project-detail-title');
        const toolsEl = document.getElementById('detail-tools');
        const overviewEl = document.getElementById('detail-overview');
        const problemEl = document.getElementById('detail-problem');
        const dataEl = document.getElementById('detail-data');
        const insightsEl = document.getElementById('detail-insights');
        const recoEl = document.getElementById('detail-recommendation');
        const reflectionEl = document.getElementById('detail-reflection');
        const actionsEl = document.getElementById('detail-actions');
        const imageEl = document.getElementById('detail-image');
        const imageSkeleton = document.getElementById('detail-image-skeleton');
        const projectHero = document.getElementById('project-hero');
        const mobileShowcase = document.getElementById('mobile-showcase');
        const dashboardPreview = document.getElementById('dashboard-preview');
        const dashboardImage = document.getElementById('dashboard-image');
        const dashboardSkeleton = document.getElementById('dashboard-image-skeleton');

        // ===== 3. HELPER FUNCTIONS =====
        
        // Fungsi untuk menyembunyikan loader dan menampilkan konten
        const hideLoader = () => {
            if (loaderEl) {
                loaderEl.classList.add('is-hiding');
                setTimeout(() => {
                    loaderEl.hidden = true;
                    loaderEl.style.display = 'none';
                }, 280);
            }
        };

        const showContent = () => {
            if (shellEl) {
                shellEl.hidden = false;
                shellEl.style.display = 'block';
                shellEl.style.opacity = '0';
                setTimeout(() => {
                    shellEl.style.transition = 'opacity 0.4s ease';
                    shellEl.style.opacity = '1';
                }, 50);
            }
        };

        // Fungsi untuk menampilkan error page
        const showErrorPage = (title, message) => {
            hideLoader();
            if (shellEl) shellEl.remove();
            const container = document.querySelector('.container');
            if (container) {
                container.innerHTML += `
                    <div style="min-height: 50vh; display: grid; place-items: center; text-align: center; color: var(--text-light); margin-top: var(--spacing-xl);">
                        <div>
                            <h2>${title}</h2>
                            <p style="color: var(--text-gray); margin: 1rem 0 2rem;">${message}</p>
                            <a href="projects.html" class="btn btn-primary">← Kembali ke Proyek</a>
                        </div>
                    </div>
                `;
            }
        };

        // ===== 4. VALIDASI PROJECT ID =====
        if (!projectId) {
            showErrorPage('Tidak Ada Proyek yang Dipilih', 'Silakan pilih proyek untuk melihat detailnya.');
            return;
        }

        const project = projectsData[projectId];
        if (!project) {
            showErrorPage('Proyek Tidak Ditemukan', 'Proyek yang Anda cari tidak ada atau telah dihapus.');
            return;
        }

        // Validasi elemen DOM yang diperlukan
        if (!titleEl || !toolsEl || !overviewEl) {
            console.error('Required DOM elements not found');
            showErrorPage('Kesalahan Halaman', 'Tidak dapat memuat detail proyek. Silakan coba lagi.');
            return;
        }

        // ===== 5. RENDER PROJECT DATA =====
        try {
            // Title
            titleEl.textContent = project.title;

            // Tools badges
            toolsEl.innerHTML = '';
            project.tools.forEach(tool => {
                const span = document.createElement('span');
                span.className = 'tool-badge-large';
                span.textContent = tool;
                toolsEl.appendChild(span);
            });

            // Overview
            overviewEl.textContent = project.overview;

            // Problem & Importance
            if (problemEl) {
                problemEl.innerHTML = `<p>${project.problem}</p>`;
            }

            // Data & Tools list
            if (dataEl) {
                dataEl.innerHTML = `
                    <ul class="detail-list">
                        <li><strong>Sumber Data:</strong> ${project.dataTools.source}</li>
                        <li><strong>Tools:</strong> ${project.dataTools.tools}</li>
                        <li><strong>Variabel Utama:</strong> ${project.dataTools.variables}</li>
                    </ul>
                `;
            }

            // Insights list
            if (insightsEl) {
                insightsEl.innerHTML = `
                    <ul class="detail-list">
                        ${project.insights.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                `;
            }

            // Recommendation & Impact
            if (recoEl) {
                recoEl.innerHTML = `
                    <ul class="detail-list">
                        <li><strong>Tindakan:</strong> ${project.recommendation.actions}</li>
                        <li><strong>Dampak:</strong> ${project.recommendation.impact}</li>
                    </ul>
                `;
            }

            // Reflection
            if (reflectionEl) {
                reflectionEl.innerHTML = `
                    <ul class="detail-list">
                        <li><strong>Keterbatasan:</strong> ${project.reflection.limitations}</li>
                        <li><strong>Yang Saya Pelajari:</strong> ${project.reflection.learned}</li>
                        <li><strong>Perbaikan Masa Depan:</strong> ${project.reflection.future}</li>
                    </ul>
                `;
            }

            // ===== 6. HANDLE PROJECT HERO IMAGE =====
            if (projectHero && imageEl) {
                const hasImage = project.image && project.image.src;

                if (hasImage) {
                    const altText = project.image.alt || `${project.title} final UI`;
                    imageEl.alt = altText;
                    imageEl.src = project.image.src;

                    const revealImage = () => {
                        imageEl.hidden = false;
                        imageEl.classList.add('is-visible');
                        if (imageSkeleton) imageSkeleton.style.display = 'none';
                    };

                    imageEl.addEventListener('load', revealImage, { once: true });
                    
                    // Error handling untuk gambar
                    imageEl.addEventListener('error', () => {
                        console.warn(`Failed to load image: ${project.image.src}`);
                        projectHero.hidden = true;
                        if (imageSkeleton) imageSkeleton.style.display = 'none';
                    }, { once: true });

                    // Jika gambar sudah di-cache
                    if (imageEl.complete && imageEl.naturalWidth > 0) {
                        revealImage();
                    }
                } else {
                    projectHero.hidden = true;
                    if (imageSkeleton) imageSkeleton.style.display = 'none';
                }
            }

            // ===== 7. HANDLE WEBSITE PREVIEW (SIAkre only) =====
            const websitePreview = document.getElementById('website-preview');
            const previewImage = document.getElementById('preview-image');
            const previewImageSkeleton = document.getElementById('preview-image-skeleton');

            if (websitePreview) {
                if (projectId === 'atm' && project.image && project.image.src) {
                    const altText = project.image.alt || `${project.title} final UI`;
                    previewImage.alt = altText;
                    previewImage.src = project.image.src;

                    const revealPreviewImage = () => {
                        previewImage.classList.add('is-visible');
                        previewImage.hidden = false;
                        if (previewImageSkeleton) previewImageSkeleton.style.display = 'none';
                    };

                    previewImage.addEventListener('load', revealPreviewImage, { once: true });
                    
                    // Error handling untuk preview image
                    previewImage.addEventListener('error', () => {
                        console.warn(`Failed to load preview image: ${project.image.src}`);
                        websitePreview.hidden = true;
                        if (previewImageSkeleton) previewImageSkeleton.style.display = 'none';
                    }, { once: true });

                    // Jika gambar sudah di-cache
                    if (previewImage.complete && previewImage.naturalWidth > 0) {
                        revealPreviewImage();
                    }

                    websitePreview.hidden = false;
                } else {
                    websitePreview.hidden = true;
                }
            }

            // ===== 8. HANDLE MOBILE SHOWCASE (Studify only) =====
            if (mobileShowcase) {
                if (project.mobileShowcase && project.mobileShowcase.screens) {
                    const screens = project.mobileShowcase.screens;
                    const screen1 = document.getElementById('mobile-screen-1');
                    const screen2 = document.getElementById('mobile-screen-2');
                    const screen3 = document.getElementById('mobile-screen-3');

                    const loadMobileScreen = (imgEl, screenData) => {
                        if (imgEl && screenData) {
                            imgEl.src = screenData.src;
                            imgEl.alt = screenData.alt;
                            // Error handling untuk mobile screens
                            imgEl.addEventListener('error', () => {
                                console.warn(`Failed to load mobile screen: ${screenData.src}`);
                                imgEl.parentElement.style.display = 'none';
                            }, { once: true });
                        }
                    };

                    loadMobileScreen(screen1, screens[0]);
                    loadMobileScreen(screen2, screens[1]);
                    loadMobileScreen(screen3, screens[2]);

                    mobileShowcase.hidden = false;
                } else {
                    mobileShowcase.hidden = true;
                }
            }

            // ===== 8B. HANDLE DASHBOARD PREVIEW (Airline Pricing only) =====
            if (dashboardPreview) {
                if (projectId === 'order-delay' && project.image && project.image.src) {
                    const altText = project.image.alt || `${project.title} dashboard`;
                    dashboardImage.alt = altText;
                    dashboardImage.src = project.image.src;

                    const revealDashboard = () => {
                        dashboardImage.classList.add('is-visible');
                        dashboardImage.hidden = false;
                        if (dashboardSkeleton) dashboardSkeleton.style.display = 'none';
                    };

                    dashboardImage.addEventListener('load', revealDashboard, { once: true });
                    
                    // Error handling untuk dashboard image
                    dashboardImage.addEventListener('error', () => {
                        console.warn(`Failed to load dashboard image: ${project.image.src}`);
                        dashboardPreview.hidden = true;
                        if (dashboardSkeleton) dashboardSkeleton.style.display = 'none';
                    }, { once: true });

                    // Jika gambar sudah di-cache
                    if (dashboardImage.complete && dashboardImage.naturalWidth > 0) {
                        revealDashboard();
                    }

                    dashboardPreview.hidden = false;
                } else {
                    dashboardPreview.hidden = true;
                }
            }

            // ===== 8C. HANDLE M111 DASHBOARD GALLERY =====
            const m111DashboardGallery = document.getElementById('m111-dashboard-gallery');
            const m111DashboardGrid = document.getElementById('m111-dashboard-grid');

            if (m111DashboardGallery && m111DashboardGrid) {

                const hasGallery =
                    projectId === 'm111' &&
                    project.dashboardGallery &&
                    Array.isArray(project.dashboardGallery.items) &&
                    project.dashboardGallery.items.length > 0;

                if (!hasGallery) {
                    m111DashboardGallery.hidden = true;
                } else {

                    const galleryTitleEl = m111DashboardGallery.querySelector('.website-preview-title');
                    if (galleryTitleEl) {
                        galleryTitleEl.textContent =
                            project.dashboardGallery.title || 'Tampilan Dashboard';
                    }

                    // RESET GRID
                    m111DashboardGrid.innerHTML = '';

                    project.dashboardGallery.items.forEach((item, index) => {
                        if (!item || !item.src) return;

                        const imgContainer = document.createElement('div');
                        imgContainer.className = 'dashboard-gallery-item animate-fade-up';
                        imgContainer.style.animationDelay = `${0.15 + index * 0.1}s`;

                        imgContainer.innerHTML = `
                            <div class="dashboard-gallery-skeleton" aria-hidden="true"></div>
                            <img class="dashboard-gallery-image" alt="" loading="lazy" />
                        `;

                        const img = imgContainer.querySelector('.dashboard-gallery-image');
                        const skeleton = imgContainer.querySelector('.dashboard-gallery-skeleton');

                        const safeSrc = encodeURI(item.src);

                        if (item.width && item.height) {
                            imgContainer.style.aspectRatio = `${item.width} / ${item.height}`;
                        }

                        img.alt = item.alt || `${project.title} preview`;
                        img.src = safeSrc;

                        if (item.width && item.height) {
                            img.width = item.width;
                            img.height = item.height;
                        }

                        const showImage = () => {
                            img.classList.add('is-visible');
                            img.hidden = false;
                            if (skeleton) skeleton.style.display = 'none';
                        };

                        img.addEventListener('load', showImage, { once: true });

                        img.addEventListener('error', () => {
                            console.warn('Gagal load image:', item.src);
                            imgContainer.remove();

                            if (skeleton) skeleton.style.display = 'none';

                            if (m111DashboardGrid.children.length === 0) {
                                m111DashboardGallery.hidden = true;
                            }
                        }, { once: true });

                        if (img.complete && img.naturalWidth > 0) {
                            showImage();
                        }

                        m111DashboardGrid.appendChild(imgContainer);
                    });

                    m111DashboardGallery.hidden =
                        m111DashboardGrid.children.length === 0;
                }
            }

            // ===== 9. RENDER ACTION BUTTONS =====
            if (actionsEl) {
                actionsEl.innerHTML = '';
                const makeBtn = (href, text, variant) => {
                    const a = document.createElement('a');
                    a.href = href || '#';
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.className = `btn ${variant}`;
                    a.textContent = text;
                    return a;
                };
                
                if (project.links.github) {
                    actionsEl.appendChild(makeBtn(project.links.github, 'Lihat Kode di GitHub', 'btn-primary'));
                }
                if (project.links.report) {
                    actionsEl.appendChild(makeBtn(project.links.report, 'Lihat Laporan Lengkap (PDF)', 'btn-secondary'));
                }
            }

            // ===== 10. ADD ANIMATIONS =====
            titleEl.classList.add('animate-fade-up', 'delay-1');
            overviewEl.classList.add('animate-fade-up', 'delay-2');

            // Animate all detail sections
            const detailSections = document.querySelectorAll('.detail-section');
            detailSections.forEach((section, index) => {
                section.classList.add('animate-fade-up');
                section.style.animationDelay = `${0.45 + (index * 0.1)}s`;
            });

            // ===== 11. SHOW CONTENT & HIDE LOADER =====
            hideLoader();
            showContent();

        } catch (error) {
            console.error('Error rendering project details:', error);
            showErrorPage('Kesalahan Pemuatan', 'Terjadi kesalahan saat memuat detail proyek. Silakan coba lagi.');
        }
    }
    
});

// ========================================
// FORM VALIDATION (IF YOU ADD A CONTACT FORM)
// ========================================
/*
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        // If validation passes, you can submit to your backend
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}
*/
