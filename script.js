// Define the background images for each person
const personImages = {
    "Guy Coombes": [
      "./Comp/1.jpg",
      "./Comp/2.jpg",
      "./Comp/3.jpg",
      "./Comp/4.jpg",
      "./Comp/5.jpg",
      "./Comp/6.jpg",
      "./Comp/7.jpg",
      "./Comp/8.jpg"
    ],
    "Yuki Sato": [
      "./Comp/ASB-Classic_Hailey-Baptiste_1_optimized.jpg",
      "./Comp/ASB-Classic_Hailey-Baptiste_2_optimized.jpg",
      "./Comp/ASB-Classic_Hailey-Baptiste_4_optimized.jpg",
      "./Comp/ASB-Classic_Naomi_Osaka_2K1A4069_optimized.jpg",
      "./Comp/B&W_Portrait_Female_Rugby_Player_TBWA_2Degrees_Eden_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/B&W_Portrait_Female_Rugby_Player_TBWA_2Degrees_Eden_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/Gymnast_on_bar_taped_fingers_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/Gymnist_in_air_studio_SachaStejko_IDC_optimized.jpg"
    ],
    "Dan Max": [
      "./Comp/ASB-Classic_Naomi_Osaka__2_optimized.jpg",
      "./Comp/ASB_Classic_Robin_Montgomery_1_optimized.jpg",
      "./Comp/Atamira_SachaStejko_Groupofdancers_KaMuaKaMuri_optimized.jpg",
      "./Comp/B&W_Portrait_Female_Rugby_Player_TBWA_2Degrees_Eden_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/StCuthberts_Sacha_Stejko_Swimmer_Poo_optimized.jpg",
      "./Comp/Sacha-Stejko-IDC_Powerade_Super_Rugby_Aupiki_optimized.jpg",
      "./Comp/Jenny_Nike_WomanSportsStudio_Portrait2_SachaStejko_IDC_optimized.jpg",
      "./Comp/Sacha_Stejko_IDC_portrait_woman_fencer_face_wanlin_9_optimized.jpg"
    ],
    "Sacha Stejko": [
      "./Comp/B&W_Portrait_Female_Rugby_Player_TBWA_2Degrees_IslaCoco_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/ballerina_shoes_feet_point_sacha_stejko_idc_optimized.jpg",
      "./Comp/Gymnast_on_bar_taped_fingers_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/Gymnist_in_air_studio_SachaStejko_IDC_optimized.jpg",
      "./Comp/ASB-Classic_Hailey-Baptiste_1_optimized.jpg",
      "./Comp/ASB-Classic_Hailey-Baptiste_2_optimized.jpg",
      "./Comp/ASB-Classic_Hailey-Baptiste_4_optimized.jpg",
      "./Comp/ASB-Classic_Naomi_Osaka_2K1A4069_optimized.jpg"
    ],
    "Dean Mackenzie": [
      "./Comp/woman_training_sitting_on_gound_sports_sacha_stejko_idc_optimized.jpg",
      "./Comp/TBWA_2Degrees_Kyree_14388_white_optimized.jpg",
      "./Comp/TBWA_2Degrees_Eden_14730_white_R1_optimized.jpg",
      "./Comp/StCuthberts_SachaStejko_IDC_Swimmer_optimized.jpg",
      "./Comp/StCuthberts_Sacha_Stejko_Swimmer_Poo_optimized.jpg",
      "./Comp/Sacha-Stejko-IDC_Powerade_Super_Rugby_Aupiki_optimized.jpg",
      "./Comp/Jenny_Nike_WomanSportsStudio_Portrait2_SachaStejko_IDC_optimized.jpg",
      "./Comp/Sacha_Stejko_IDC_portrait_woman_fencer_face_wanlin_9_optimized.jpg"
    ],
    "Camilli Rutherford": [
      "./Comp/StCuthberts_Sacha_Stejko_Swimmer_Poo_optimized.jpg",
      "./Comp/Sacha-Stejko-IDC_Powerade_Super_Rugby_Aupiki_optimized.jpg",
      "./Comp/Jenny_Nike_WomanSportsStudio_Portrait2_SachaStejko_IDC_optimized.jpg",
      "./Comp/Sacha_Stejko_IDC_portrait_woman_fencer_face_wanlin_9_optimized.jpg",
      "./Comp/Gymnist_in_air_studio_SachaStejko_IDC_optimized.jpg",
      "./Comp/ballerina_shoes_feet_point_sacha_stejko_idc_optimized.jpg",
      "./Comp/TBWA_2Degrees_Kyree_14388_white_optimized.jpg",
      "./Comp/Jenny_Nike_WomanSportsStudio_Portrait2_SachaStejko_IDC_optimized.jpg"
    ]
  };
  
  // Create a background container and insert it into the page
  const page1 = document.getElementById('page1');
  const backgroundContainer = document.createElement('div');
  backgroundContainer.id = 'background-container';
  page1.insertBefore(backgroundContainer, page1.firstChild);
  
  // Create two background divs for crossfade transitions
  const backgrounds = [];
  for (let i = 0; i < 2; i++) {
    const bg = document.createElement('div');
    bg.className = 'background';
    bg.style.opacity = i === 0 ? 1 : 0;
    bg.style.zIndex = i === 0 ? 1 : 2;
    backgroundContainer.appendChild(bg);
    backgrounds.push(bg);
  }
  
  // Preload all images for smoother transitions
  function preloadImages() {
    const allImages = [];
    Object.values(personImages).forEach(imageSet => {
      imageSet.forEach(src => allImages.push(src));
    });
    allImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
  
  // Get all name elements in the order you prefer (here reversed)
  const nameElements = [
    document.querySelector('.name6'),
    document.querySelector('.name5'),
    document.querySelector('.name4'),
    document.querySelector('.name3'),
    document.querySelector('.name2'),
    document.querySelector('.name1')
  ];
  
  // Detect device type for responsive animation timings
  function getDeviceType() {
    const width = window.innerWidth;
    if (width < 576) return 'mobile';
    if (width < 992) return 'tablet';
    return 'desktop';
  }
  
  // Animate a name element to an active state
  function activateName(index) {
    const deviceType = getDeviceType();
    const activeScale = deviceType === 'mobile' ? 1.15 : deviceType === 'tablet' ? 1.2 : 1.3;
    
    // Reset all names
    nameElements.forEach(el => {
      gsap.to(el, {
        scale: 1,
        opacity: 0.5,
        color: '#afafaf',
        duration: 0.2,
        ease: 'power1.out'
      });
    });
    
    // Animate active name
    gsap.to(nameElements[index], {
      scale: activeScale,
      opacity: 1,
      color: '#fff',
      duration: 0.2,
      ease: 'power2.out'
    });
    
    return nameElements[index].textContent;
  }
  
  // Track which background is currently visible
  let currentBgIndex = 0;
  
  // Change the background image with a crossfade effect
  function changeBackground(imageUrl) {
    const currentBg = backgrounds[currentBgIndex];
    const nextBg = backgrounds[currentBgIndex === 0 ? 1 : 0];
    nextBg.style.backgroundImage = `url(${imageUrl})`;
    const transitionSpeed = getDeviceType() === 'mobile' ? 0.4 : 0.3;
    gsap.to(currentBg, { opacity: 0, duration: transitionSpeed, ease: 'power1.inOut' });
    gsap.to(nextBg, { opacity: 1, duration: transitionSpeed, ease: 'power1.inOut' });
    currentBgIndex = currentBgIndex === 0 ? 1 : 0;
  }
  
  // Flag to stop the automatic animation when a name is clicked
  let manualNavigationActive = false;
  
  // Automatic animation loop
  async function runAnimation() {
    let currentPersonIndex = 0;
    
    // Preload images for the first person
    const firstPersonName = nameElements[0].textContent;
    personImages[firstPersonName].forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    while (!manualNavigationActive) {
      const currentPerson = activateName(currentPersonIndex);
      const currentImages = personImages[currentPerson];
      const deviceType = getDeviceType();
      const imageDisplayTime = deviceType === 'mobile' ? 700 : 800;
      
      for (let i = 0; i < currentImages.length; i++) {
        if (manualNavigationActive) break;
        changeBackground(currentImages[i]);
        await new Promise(resolve => setTimeout(resolve, imageDisplayTime));
      }
      
      currentPersonIndex = (currentPersonIndex + 1) % nameElements.length;
      // Preload next person's images
      const nextPerson = nameElements[currentPersonIndex].textContent;
      personImages[nextPerson].forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }
  
  // When a name is clicked, show its images in a quick slideshow then navigate
  nameElements.forEach((nameEl, index) => {
    nameEl.addEventListener('click', function(e) {
      e.preventDefault();
      manualNavigationActive = true; // Stop automatic animation
      const personName = activateName(index);
      const images = personImages[personName];
      const intervalTime = 3000 / images.length; // Cycle through all images in 5 seconds
      let imgIndex = 0;
      const slideshowInterval = setInterval(() => {
        changeBackground(images[imgIndex]);
        imgIndex = (imgIndex + 1) % images.length;
      }, intervalTime);
      
      setTimeout(() => {
        clearInterval(slideshowInterval);
        // Navigate to the target page (use the href from the parent <a>)
        const targetUrl = nameEl.parentElement.getAttribute('href');
        window.location.href = targetUrl;
      }, 5000);
    });
  });
  
  // Touch support for mobile and tablet devices
  if (getDeviceType() === 'mobile' || getDeviceType() === 'tablet') {
    nameElements.forEach((nameEl, index) => {
      nameEl.addEventListener('touchstart', () => {
        const name = activateName(index);
        if (personImages[name] && personImages[name].length > 0) {
          changeBackground(personImages[name][0]);
        }
      });
    });
  }
  
  // Start animations and preload images once the window loads
  window.addEventListener('load', () => {
    document.getElementById('pack').style.backgroundColor = 'transparent';
    const overlay = document.createElement('div');
    overlay.className = 'dark-overlay';
    page1.insertBefore(overlay, document.getElementById('pack'));
    preloadImages();
    runAnimation();
  });
  