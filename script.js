/* ══════════════════════════════════════════
       DATA
    ══════════════════════════════════════════ */
const CONTINENTS = {
    asia: {
        name: 'Asia', lat: 40, lng: 90, list: ['china', 'indonesia', 'arabsaudi'],
        desc: 'Benua terbesar dan terpadat di dunia, mencakup sekitar 30% luas daratan bumi dengan populasi lebih dari 4,7 miliar jiwa. Memiliki keajaiban alam dari Gunung Everest hingga Palung Mariana.'
    },
    amerika: {
        name: 'Amerika', lat: 10, lng: -80, list: ['usa', 'brazil', 'mexico'],
        desc: 'Membentang dari Arktik di utara hingga Patagonia di selatan, mencakup ekosistem sangat beragam dari Gurun Mojave hingga Hutan Amazon yang menjadi paru-paru dunia.'
    },
    eropa: {
        name: 'Eropa', lat: 52, lng: 15, list: ['prancis', 'jerman', 'inggris'],
        desc: 'Benua terkecil kedua namun paling berpengaruh dalam sejarah modern. Pusat kebudayaan, ilmu pengetahuan, dan peradaban Barat yang membentuk tatanan dunia.'
    },
    afrika: {
        name: 'Afrika', lat: 5, lng: 20, list: ['mesir', 'nigeria', 'afsel'],
        desc: 'Benua terbesar kedua dengan keanekaragaman hayati dan budaya luar biasa. Tempat lahirnya manusia modern dengan warisan peradaban kuno dan kekayaan alam melimpah.'
    },
    australia: {
        name: 'Australia', lat: -25, lng: 133, list: ['aussie', 'selandia', 'papua'],
        desc: 'Benua terkecil sekaligus negara terbesar keenam di dunia. Terkenal dengan satwa liar unik seperti kanguru dan koala serta Great Barrier Reef.'
    },
    antartika: {
        name: 'Antartika', lat: -75, lng: 0, list: ['mcmurdo', 'amundsen', 'vostok'],
        desc: 'Benua paling selatan yang tertutup lapisan es raksasa. Tidak ada penduduk tetap, hanya dihuni para ilmuwan di stasiun penelitian internasional.'
    }
};

const COUNTRIES = {
    china: {
        name: 'China', flag: '🇨🇳', continent: 'asia', lat: 35, lng: 105,
        desc: 'Negara dengan populasi terbesar di dunia dan salah satu peradaban tertua yang masih hidup. Kekuatan ekonomi terbesar kedua di dunia dengan warisan ribuan tahun.',
        capital: 'Beijing', language: 'Mandarin', currency: 'Yuan Renminbi (¥)', area: '9.596.960 km²', icon: '🐉 Naga / Tembok Besar'
    },
    indonesia: {
        name: 'Indonesia', flag: '🇮🇩', continent: 'asia', lat: -5, lng: 118,
        desc: 'Negara kepulauan terbesar di dunia dengan lebih dari 17.000 pulau dan 300+ suku bangsa yang disatukan dalam semboyan Bhinneka Tunggal Ika.',
        capital: 'Jakarta', language: 'Bahasa Indonesia', currency: 'Rupiah (Rp)', area: '± 1.904.569 km²', icon: '🦅 Burung Garuda / Monas'
    },
    arabsaudi: {
        name: 'Arab Saudi', flag: '🇸🇦', continent: 'asia', lat: 25, lng: 45,
        desc: "Negara terbesar di Semenanjung Arab dan pusat agama Islam dunia. Penghasil minyak terbesar serta rumah bagi kota suci Mekkah dan Madinah.",
        capital: 'Riyadh', language: 'Arab', currency: 'Riyal Saudi (SAR)', area: '2.149.690 km²', icon: "🕌 Ka'bah / Pohon Kurma"
    },
    usa: {
        name: 'Amerika Serikat', flag: '🇺🇸', continent: 'amerika', lat: 38, lng: -97,
        desc: 'Negara adidaya dengan ekonomi terbesar di dunia. Terkenal dengan inovasi teknologi Silicon Valley dan pengaruh budaya pop global.',
        capital: 'Washington D.C.', language: 'Inggris', currency: 'Dolar AS ($)', area: '9.833.520 km²', icon: '🗽 Patung Liberty / Elang Botak'
    },
    brazil: {
        name: 'Brasil', flag: '🇧🇷', continent: 'amerika', lat: -15, lng: -53,
        desc: 'Negara terbesar di Amerika Selatan. Terkenal dengan Karnaval Rio, Hutan Amazon sebagai paru-paru dunia, dan Patung Kristus Penebus.',
        capital: 'Brasília', language: 'Portugis', currency: 'Real Brasil (BRL)', area: '8.515.767 km²', icon: '🌿 Hutan Amazon / Kristus Penebus'
    },
    mexico: {
        name: 'Meksiko', flag: '🇲🇽', continent: 'amerika', lat: 23, lng: -102,
        desc: 'Warisan peradaban Maya dan Aztec yang kaya. Terkenal dengan piramida kuno, masakan lezat UNESCO, dan musik mariachi.',
        capital: 'Mexico City', language: 'Spanyol', currency: 'Peso Meksiko (MXN)', area: '1.964.375 km²', icon: '🌵 Kaktus / Piramida Chichen Itza'
    },
    prancis: {
        name: 'Prancis', flag: '🇫🇷', continent: 'eropa', lat: 46, lng: 2,
        desc: 'Destinasi wisata paling populer di dunia. Terkenal dengan Menara Eiffel, museum Louvre, mode Paris, dan masakan melegenda.',
        capital: 'Paris', language: 'Prancis', currency: 'Euro (€)', area: '643.801 km²', icon: '🗼 Menara Eiffel / Fleur-de-lis'
    },
    jerman: {
        name: 'Jerman', flag: '🇩🇪', continent: 'eropa', lat: 51, lng: 10,
        desc: 'Ekonomi terbesar di Eropa, pusat industri otomotif dunia (BMW, Mercedes, Volkswagen). Terkenal dengan Kastil Neuschwanstein dan Oktoberfest.',
        capital: 'Berlin', language: 'Jerman', currency: 'Euro (€)', area: '357.114 km²', icon: '🦅 Elang / Gerbang Brandenburg'
    },
    inggris: {
        name: 'Inggris (UK)', flag: '🇬🇧', continent: 'eropa', lat: 54, lng: -2,
        desc: 'Kerajaan Bersatu yang pernah memimpin imperium terbesar dalam sejarah. Terkenal dengan London, Big Ben, dan warisan sastra yang kaya.',
        capital: 'London', language: 'Inggris', currency: 'Pound Sterling (£)', area: '242.495 km²', icon: '👑 Mahkota / Big Ben'
    },
    mesir: {
        name: 'Mesir', flag: '🇪🇬', continent: 'afrika', lat: 26, lng: 30,
        desc: 'Peradaban tertua di dunia dengan warisan Mesir Kuno yang megah. Rumah bagi Piramida Giza dan Sphinx serta Sungai Nil yang legendaris.',
        capital: 'Kairo', language: 'Arab', currency: 'Pound Mesir (EGP)', area: '1.001.449 km²', icon: '🏛️ Piramida Giza / Sphinx'
    },
    nigeria: {
        name: 'Nigeria', flag: '🇳🇬', continent: 'afrika', lat: 10, lng: 8,
        desc: 'Negara paling padat di Afrika dan ekonomi terbesar benua itu. Terkenal dengan Nollywood, musik Afrobeats, dan kekayaan sumber daya alam.',
        capital: 'Abuja', language: 'Inggris', currency: 'Naira (NGN)', area: '923.768 km²', icon: '🦅 Elang / Drum Tradisional'
    },
    afsel: {
        name: 'Afrika Selatan', flag: '🇿🇦', continent: 'afrika', lat: -29, lng: 25,
        desc: '"Rainbow Nation" dengan 11 bahasa resmi. Terkenal dengan safari di Taman Nasional Kruger dan warisan Nelson Mandela.',
        capital: 'Pretoria', language: '11 Bahasa Resmi', currency: 'Rand (ZAR)', area: '1.221.037 km²', icon: '🦁 Singa / Taman Nasional Kruger'
    },
    aussie: {
        name: 'Australia', flag: '🇦🇺', continent: 'australia', lat: -25, lng: 134,
        desc: 'Negara sekaligus benua tersendiri. Terkenal dengan Opera House Sydney, Great Barrier Reef, kanguru, dan koala.',
        capital: 'Canberra', language: 'Inggris', currency: 'Dolar Australia (AUD)', area: '7.692.024 km²', icon: '🦘 Kanguru / Opera House Sydney'
    },
    selandia: {
        name: 'Selandia Baru', flag: '🇳🇿', continent: 'australia', lat: -41, lng: 174,
        desc: 'Keindahan alam spektakuler, lokasi syuting Lord of the Rings. Budaya Māori yang kaya dan tempat lahirnya bungee jumping.',
        capital: 'Wellington', language: 'Inggris & Māori', currency: 'Dolar NZ (NZD)', area: '270.467 km²', icon: '🥝 Burung Kiwi / Silver Fern'
    },
    papua: {
        name: 'Papua Nugini', flag: '🇵🇬', continent: 'australia', lat: -6, lng: 147,
        desc: 'Negara dengan keanekaragaman bahasa terbesar di dunia (800+ bahasa). Terkenal dengan hutan tropis perawan dan Burung Cendrawasih.',
        capital: 'Port Moresby', language: 'Tok Pisin & Inggris', currency: 'Kina (PGK)', area: '462.840 km²', icon: '🦜 Cendrawasih / Topeng Tradisional'
    },
    mcmurdo: {
        name: 'Stasiun McMurdo', flag: '🇺🇸', continent: 'antartika', lat: -78, lng: 167,
        desc: 'Stasiun penelitian AS terbesar di Antartika. Mampu menampung 1.000+ orang saat musim panas, pusat logistik Kutub Selatan.',
        capital: '— (Stasiun Penelitian)', language: 'Inggris', currency: 'Dolar AS ($)', area: 'Wilayah Penelitian', icon: '🔬 Laboratorium / Bendera AS'
    },
    amundsen: {
        name: 'Stasiun Amundsen–Scott', flag: '🇺🇸', continent: 'antartika', lat: -90, lng: 0,
        desc: 'Tepat di Kutub Selatan Geografis (90°S). Digunakan untuk penelitian astronomi, geofisika, dan perubahan iklim global.',
        capital: '— (Kutub Selatan)', language: 'Inggris', currency: 'Dolar AS ($)', area: 'Wilayah Penelitian', icon: '❄️ Kutub Selatan / Teleskop Polar'
    },
    vostok: {
        name: 'Stasiun Vostok', flag: '🇷🇺', continent: 'antartika', lat: -78, lng: 107,
        desc: 'Stasiun Rusia yang mencatat suhu terendah di Bumi: −89,2°C. Di bawahnya tersimpan Danau Vostok yang terisolasi jutaan tahun.',
        capital: '— (Stasiun Penelitian)', language: 'Rusia', currency: 'Rubel Rusia (RUB)', area: 'Wilayah Penelitian', icon: '🧊 Es Kutub / Danau Bawah Es'
    }
};

/* ══════════════════════════════════════════
   POSISI BUMI PER HALAMAN
══════════════════════════════════════════ */
const EARTH_CONFIG = {
    home: { x: 0, y: -0.9, s: 1.60, autoRotate: true },
    about: { x: 0.65, y: 0, s: 1.05, autoRotate: true },
    contact: { x: -0.65, y: 0, s: 1.05, autoRotate: true },
    continent: { x: 0, y: 0, s: 0.88, autoRotate: true },
    'country-list': { x: 0, y: 0, s: 0.88, autoRotate: false },
    'country-detail': { x: 0, y: 0, s: 0.88, autoRotate: false }
};

/* ══════════════════════════════════════════
   THREE.JS SETUP
══════════════════════════════════════════ */
let scene, camera, renderer, earthMesh;
let isDragging = false, prevMouseX = 0, prevMouseY = 0;
let currentPage = 'home', currentContinent = null;
let markerGroup = null, pulseRing = null;

function initGlobe() {
    const canvas = document.getElementById('globe-canvas');
    const W = window.innerWidth, H = window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 200);
    camera.position.z = 2.7;

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* Bintang */
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
        const theta = Math.random() * Math.PI * 2, phi = Math.acos(2 * Math.random() - 1), r = 80 + Math.random() * 20;
        starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta); starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); starPos[i * 3 + 2] = r * Math.cos(phi);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.22, transparent: true, opacity: 0.8 })));

    /* Bumi */
    const earthMat = new THREE.MeshPhongMaterial({ color: 0x4a7c59, specular: new THREE.Color(0x112211), shininess: 14 });
    new THREE.TextureLoader().load(
        'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg',
        (tex) => { earthMat.map = tex; earthMat.needsUpdate = true; }
    );
    earthMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), earthMat);
    earthMesh.position.y = EARTH_CONFIG.home.y;
    earthMesh.scale.setScalar(EARTH_CONFIG.home.s);
    scene.add(earthMesh);

    /* Atmosfer tipis */
    earthMesh.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.04, 64, 64),
        new THREE.MeshPhongMaterial({ color: 0x88aacc, transparent: true, opacity: 0.025, side: THREE.FrontSide, depthWrite: false })
    ));

    /* Cahaya matahari */
    const sun = new THREE.DirectionalLight(0xfff8f0, 1.55);
    sun.position.set(5, 3, 5); scene.add(sun);
    scene.add(new THREE.AmbientLight(0x1a1f1a, 0.50));

    buildMarker();

    /* Mouse drag */
    canvas.addEventListener('mousedown', e => { isDragging = true; prevMouseX = e.clientX; prevMouseY = e.clientY; });
    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        earthMesh.rotation.y += (e.clientX - prevMouseX) * .005;
        earthMesh.rotation.x += (e.clientY - prevMouseY) * .003;
        prevMouseX = e.clientX; prevMouseY = e.clientY;
    });
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mouseleave', () => isDragging = false);

    /* Touch drag */
    canvas.addEventListener('touchstart', e => { isDragging = true; prevMouseX = e.touches[0].clientX; prevMouseY = e.touches[0].clientY; }, { passive: true });
    canvas.addEventListener('touchmove', e => {
        if (!isDragging) return;
        earthMesh.rotation.y += (e.touches[0].clientX - prevMouseX) * .005;
        earthMesh.rotation.x += (e.touches[0].clientY - prevMouseY) * .003;
        prevMouseX = e.touches[0].clientX; prevMouseY = e.touches[0].clientY;
    }, { passive: true });
    canvas.addEventListener('touchend', () => isDragging = false);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    /* Render loop */
    let t = 0;
    (function loop() {
        requestAnimationFrame(loop);
        t += 0.03;
        if (EARTH_CONFIG[currentPage]?.autoRotate && !isDragging) earthMesh.rotation.y += 0.0008;
        if (pulseRing && markerGroup.visible) {
            const s = 1 + 0.35 * Math.sin(t);
            pulseRing.scale.set(s, s, 1);
            pulseRing.material.opacity = 0.55 - 0.3 * Math.abs(Math.sin(t));
        }
        renderer.render(scene, camera);
    })();
}

/* ══ PENANDA LOKASI ══ */
function buildMarker() {
    markerGroup = new THREE.Group();
    markerGroup.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.025, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff2222 })
    ));
    markerGroup.add(new THREE.Mesh(
        new THREE.RingGeometry(0.034, 0.044, 32),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.90, side: THREE.DoubleSide, depthWrite: false })
    ));
    pulseRing = new THREE.Mesh(
        new THREE.RingGeometry(0.055, 0.068, 32),
        new THREE.MeshBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false })
    );
    markerGroup.add(pulseRing);
    markerGroup.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.055, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff3300, transparent: true, opacity: 0.18, depthWrite: false })
    ));
    markerGroup.visible = false;
    earthMesh.add(markerGroup);
}

function latLngToLocal(lat, lng, r = 1.035) {
    const latR = lat * Math.PI / 180;
    const theta = (lng + 90) * Math.PI / 180;
    // Rumus benar: turunkan dari invers rotasi geoToRotation
    // x = sin(theta)*cos(latR), y = sin(latR), z = cos(theta)*cos(latR)
    return new THREE.Vector3(
        r * Math.sin(theta) * Math.cos(latR),
        r * Math.sin(latR),
        r * Math.cos(theta) * Math.cos(latR)
    );
}

function showMarker(lat, lng) {
    markerGroup.position.copy(latLngToLocal(lat, lng));
    markerGroup.lookAt(new THREE.Vector3(0, 0, 0));
    markerGroup.rotateX(Math.PI);
    markerGroup.visible = true;
    markerGroup.scale.set(0, 0, 0);
    gsap.to(markerGroup.scale, { x: 1, y: 1, z: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.9 });
}
function hideMarker() { markerGroup.visible = false; }

/* ══ ROTASI & GERAK BUMI ══ */
function geoToRotation(lat, lng) {
    return { x: lat * Math.PI / 180, y: -(lng + 90) * Math.PI / 180 };
}

function isMobile() { return window.innerWidth <= 768; }

function moveEarthTo(pageKey, geo) {
    const cfg = EARTH_CONFIG[pageKey] || EARTH_CONFIG.home;
    const mobileContent = ['continent', 'country-list', 'country-detail'].includes(pageKey);
    // Mobile: paksa x=0 (tengah), geser sedikit ke atas, perkecil
    const tx = (isMobile() && mobileContent) ? 0 : cfg.x;
    const ty = (isMobile() && mobileContent) ? 0.15 : cfg.y;
    const ts = (isMobile() && mobileContent) ? 0.70 : cfg.s;
    gsap.to(earthMesh.position, { x: tx, y: ty, duration: 1.15, ease: 'power2.inOut' });
    gsap.to(earthMesh.scale, { x: ts, y: ts, z: ts, duration: 1.15, ease: 'power2.inOut' });
    if (geo) {
        const tgt = geoToRotation(geo.lat, geo.lng);
        const PI2 = Math.PI * 2;
        while (earthMesh.rotation.y - tgt.y > Math.PI) earthMesh.rotation.y -= PI2;
        while (earthMesh.rotation.y - tgt.y < -Math.PI) earthMesh.rotation.y += PI2;
        gsap.to(earthMesh.rotation, { x: tgt.x, y: tgt.y, duration: 1.6, ease: 'power2.inOut' });
    }
}

/* ══ NAVIGASI ══ */
function navigate(pageId, opts = {}) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    currentPage = pageId;
    const show = id => document.getElementById(id)?.classList.add('active');
    if (pageId !== 'country-detail') hideMarker();

    if (pageId === 'home') { show('page-home'); moveEarthTo('home'); }
    else if (pageId === 'about') { show('page-about'); moveEarthTo('about'); }
    else if (pageId === 'contact') { show('page-contact'); moveEarthTo('contact'); }
    else if (pageId === 'continent') {
        buildContinentPage(); show('page-continent'); moveEarthTo('continent');
    }
    else if (pageId === 'country-list' && opts.continent) {
        currentContinent = opts.continent;
        buildCountryListPage(opts.continent);
        show('page-country-list');
        moveEarthTo('country-list', CONTINENTS[opts.continent]);
    }
    else if (pageId === 'country-detail' && opts.country) {
        buildCountryDetailPage(opts.country);
        show('page-country-detail');
        const c = COUNTRIES[opts.country];
        moveEarthTo('country-detail', c);
        showMarker(c.lat, c.lng);
    }
}

/* ══ BUILDER ══ */
function buildContinentPage() {
    const grid = document.getElementById('continent-grid');
    grid.innerHTML = '';
    Object.entries(CONTINENTS).forEach(([key, cont]) => {
        const btn = document.createElement('button');
        btn.className = 'glass-btn';
        btn.style.cssText = 'font-size:15px;padding:12px 28px;';
        btn.textContent = cont.name;
        btn.onclick = () => navigate('country-list', { continent: key });
        grid.appendChild(btn);
    });
}

function buildCountryListPage(key) {
    const cont = CONTINENTS[key];
    document.getElementById('cl-breadcrumb').textContent = 'Benua ' + cont.name;
    document.getElementById('cl-name').textContent = 'Benua ' + cont.name;
    document.getElementById('cl-desc').textContent = cont.desc;
    const btns = document.getElementById('cl-buttons');
    btns.innerHTML = '';
    cont.list.forEach(ck => {
        const c = COUNTRIES[ck];
        const btn = document.createElement('button');
        btn.className = 'glass-btn';
        btn.style.cssText = 'font-size:15px;padding:12px 24px;';
        btn.textContent = c.flag + '  ' + c.name;
        btn.onclick = () => navigate('country-detail', { country: ck });
        btns.appendChild(btn);
    });
}

function buildCountryDetailPage(ck) {
    const c = COUNTRIES[ck];
    const cont = CONTINENTS[c.continent];
    document.getElementById('cd-back-btn').onclick =
        () => navigate('country-list', { continent: c.continent });
    document.getElementById('cd-breadcrumb').textContent = 'Benua ' + cont.name;
    document.getElementById('cd-name').textContent = c.flag + '  ' + c.name;
    document.getElementById('cd-desc').textContent = c.desc;
    const row = (lbl, val) =>
        `<div class="info-row">
       <span class="info-label">${lbl}</span>
       <span class="info-sep">:</span>
       <span class="info-value">${val}</span>
     </div>`;
    document.getElementById('cd-info').innerHTML =
        row('Ibukota', c.capital) + row('Bahasa', c.language) +
        row('Mata Uang', c.currency) + row('Luas Negara', c.area) + row('Ikon Negara', c.icon);
}

/* ══ INIT ══ */
initGlobe();
buildContinentPage();