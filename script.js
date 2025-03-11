// Define the background images for each person
const personImages = {
    "Guy Coombes": [
      "./Comp/171123_st-cuthberts_music0728_optimized.jpg",
      "./Comp/2K1A2921-1_optimized.jpg",
      "./Comp/ADC_KaMuaKaMuri_SachaStejko_IDCjpg._optimized.jpg",
      "./Comp/Anna1344-SS_IDC_optimized.jpg"
    ],
    "Yuki Sato": [
      "./Comp/ASB-Classic_Hailey-Baptiste_1_optimized.jpg",
      "./Comp/ASB-Classic_Hailey-Baptiste_2_optimized.jpg",
      "./Comp/ASB-Classic_Hailey-Baptiste_4_optimized.jpg",
      "./Comp/ASB-Classic_Naomi_Osaka_2K1A4069_optimized.jpg"
    ],
    "Dan Max": [
      "./Comp/ASB-Classic_Naomi_Osaka__2_optimized.jpg",
      "./Comp/ASB_Classic_Robin_Montgomery_1_optimized.jpg",
      "./Comp/Atamira_SachaStejko_Groupofdancers_KaMuaKaMuri_optimized.jpg",
      "./Comp/B&W_Portrait_Female_Rugby_Player_TBWA_2Degrees_Eden_Sacha_Stejko_IDC_optimized.jpg"
    ],
    "Sacha Stejko": [
      "./Comp/B&W_Portrait_Female_Rugby_Player_TBWA_2Degrees_IslaCoco_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/ballerina_shoes_feet_point_sacha_stejko_idc_optimized.jpg",
      "./Comp/Gymnast_on_bar_taped_fingers_Sacha_Stejko_IDC_optimized.jpg",
      "./Comp/Gymnist_in_air_studio_SachaStejko_IDC_optimized.jpg"
    ],
    "Dean Mackenzie": [
      "./Comp/woman_training_sitting_on_gound_sports_sacha_stejko_idc_optimized.jpg",
      "./Comp/TBWA_2Degrees_Kyree_14388_white_optimized.jpg",
      "./Comp/TBWA_2Degrees_Eden_14730_white_R1_optimized.jpg",
      "./Comp/StCuthberts_SachaStejko_IDC_Swimmer_optimized.jpg"
    ],
    "Camilli Rutherford": [
      "./Comp/StCuthberts_Sacha_Stejko_Swimmer_Poo_optimized.jpg",
      "./Comp/Sacha-Stejko-IDC_Powerade_Super_Rugby_Aupiki_optimized.jpg",
      "./Comp/Jenny_Nike_WomanSportsStudio_Portrait2_SachaStejko_IDC_optimized.jpg",
      "./Comp/Sacha_Stejko_IDC_portrait_woman_fencer_face_wanlin_9_optimized.jpg"
    ]
  };
  
  // Create a background container
  const page1 = document.getElementById('page1');
  const backgroundContainer = document.createElement('div');
  backgroundContainer.id = 'background-container';
  backgroundContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
  `;
  page1.insertBefore(backgroundContainer, page1.firstChild);
  
  // Create multiple background elements for faster transitions
  const backgrounds = [];
  for (let i = 0; i < 2; i++) {
    const bg = document.createElement('div');
    bg.className = 'background';
    bg.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: ${i === 0 ? 1 : 0};
      z-index: ${i === 0 ? 1 : 2};
    `;
    backgroundContainer.appendChild(bg);
    backgrounds.push(bg);
  }
  
  // Preload images for smoother transitions
  function preloadImages() {
    const allImages = [];
    Object.values(personImages).forEach(imageSet => {
      imageSet.forEach(img => allImages.push(img));
    });
    
    allImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
  
  // Get all name elements
  const nameElements = [
    document.querySelector('.name1'),
    document.querySelector('.name2'),
    document.querySelector('.name3'),
    document.querySelector('.name4'),
    document.querySelector('.name5'),
    document.querySelector('.name6')
  ];
  
  // Detect device type
  function getDeviceType() {
    const width = window.innerWidth;
    if (width < 576) return 'mobile';
    if (width < 992) return 'tablet';
    return 'desktop';
  }
  
  // Function to set responsive font sizes and positions
  function setResponsiveSizes() {
    const deviceType = getDeviceType();
    const pack = document.getElementById('pack');
    
    // Reset any inline styles first
    pack.removeAttribute('style');
    
    // Set base styles
    pack.style.zIndex = '999';
    pack.style.backgroundColor = 'transparent';
    
    if (deviceType === 'mobile') {
      // Mobile styles
      pack.style.width = '90vw';
      pack.style.height = '70vh';
      pack.style.top = '15%';
      pack.style.right = '5%';
      pack.style.left = 'auto';
      
      // Adjust font sizes for mobile
      nameElements.forEach(name => {
        name.style.fontSize = '8vw';
        name.style.right = '0';
        name.style.width = '100%';
        name.style.textAlign = 'end';
        name.style.transformOrigin = 'right center';
      });
    } else if (deviceType === 'tablet') {
      // Tablet styles
      pack.style.width = '80vw';
      pack.style.height = '70vh';
      pack.style.top = '20%';
      pack.style.right = '10%';
      pack.style.left = 'auto';
      
      // Adjust font sizes for tablet
      nameElements.forEach(name => {
        name.style.fontSize = '7vw';
        name.style.right = '0';
        name.style.width = '100%';
        name.style.textAlign = 'end';
        name.style.transformOrigin = 'right center';
      });
    }
    
    // Adjust line positions
    const lineElements = [
      document.querySelector('.line1'),
      document.querySelector('.line2'),
      document.querySelector('.line3'),
      document.querySelector('.line4'),
      document.querySelector('.line5'),
      document.querySelector('.line6')
    ];
    
    if (deviceType === 'mobile' || deviceType === 'tablet') {
      lineElements.forEach((line, index) => {
        // Reset any inline styles first
        line.removeAttribute('style');
        
        // Apply base styles
        line.style.width = '100%';
        line.style.display = 'flex';
        line.style.alignItems = 'center';
        line.style.justifyContent = 'center';
        line.style.position = 'absolute';
        line.style.color = 'white';
        line.style.height = '10vh';
        line.style.right = '0';
        
        // Calculate bottom position
        // More spacing between lines on tablet
        const spacing = deviceType === 'tablet' ? 18 : 16;
        const bottomPosition = 84 - (index * spacing);
        line.style.bottom = `${bottomPosition}%`;
      });
    }
  }
  
  // Function to activate a name with improved animation
  function activateName(index) {
    const deviceType = getDeviceType();
    
    // Calculate proper scale based on device
    const activeScale = deviceType === 'mobile' ? 1.15 : 
                        deviceType === 'tablet' ? 1.2 : 1.3;
    
    // Reset all names to inactive state with a faster animation
    nameElements.forEach(el => {
      gsap.to(el, {
        scale: 1,
        opacity: 0.5,
        color: '#afafaf',
        duration: 0.2,
        ease: 'power1.out'
      });
    });
  
    // Activate the current name with a sharper, faster animation
    gsap.to(nameElements[index], {
      scale: activeScale,
      opacity: 1,
      color: '#fff',
      duration: 0.2,
      ease: 'power2.out'
    });
  
    return nameElements[index].textContent;
  }
  
  // Current background index
  let currentBgIndex = 0;
  
  // Function to change background image with faster transitions
  function changeBackground(imageUrl) {
    // Get current and next background elements
    const currentBg = backgrounds[currentBgIndex];
    const nextBg = backgrounds[currentBgIndex === 0 ? 1 : 0];
    
    // Set the next background image
    nextBg.style.backgroundImage = `url(${imageUrl})`;
    
    // Adjust transition speed based on device
    const transitionSpeed = getDeviceType() === 'mobile' ? 0.25 : 0.3;
    
    // Fast crossfade transition
    gsap.to(currentBg, {
      opacity: 0,
      duration: transitionSpeed,
      ease: 'power1.inOut'
    });
    
    gsap.to(nextBg, {
      opacity: 1,
      duration: transitionSpeed,
      ease: 'power1.inOut'
    });
    
    // Toggle background index
    currentBgIndex = currentBgIndex === 0 ? 1 : 0;
  }
  
  // Function to run the animation sequence with improved timing
  async function runAnimation() {
    let currentPersonIndex = 0;
    
    // Preload the first set of images
    const firstPersonName = nameElements[0].textContent;
    personImages[firstPersonName].forEach(img => {
      const imgEl = new Image();
      imgEl.src = img;
    });
    
    while (true) {
      // Activate the current person
      const currentPerson = activateName(currentPersonIndex);
      const currentImages = personImages[currentPerson];
      
      // Adjust timing based on device
      const deviceType = getDeviceType();
      const imageDisplayTime = deviceType === 'mobile' ? 700 : 800;
      
      // Cycle through each image for the current person
      for (let i = 0; i < currentImages.length; i++) {
        changeBackground(currentImages[i]);
        await new Promise(resolve => setTimeout(resolve, imageDisplayTime));
      }
      
      // Move to the next person
      currentPersonIndex = (currentPersonIndex + 1) % nameElements.length;
      
      // Preload the next person's images
      const nextPerson = nameElements[currentPersonIndex].textContent;
      personImages[nextPerson].forEach(img => {
        const imgEl = new Image();
        imgEl.src = img;
      });
    }
  }
  
  // Start the animation with performance optimizations
  window.addEventListener('load', () => {
    // Remove the brown background from the pack div
    document.getElementById('pack').style.backgroundColor = 'transparent';
    
    // Add a dark overlay to the page for better text visibility
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
    `;
    page1.insertBefore(overlay, document.getElementById('pack'));
    
    // Update z-index of pack
    document.getElementById('pack').style.zIndex = '3';
    
    // Apply responsive adjustments
    setResponsiveSizes();
    
    // Preload all images
    preloadImages();
    
    // Run the animation
    runAnimation();
  });
  
  // Handle window resize events for responsiveness
  window.addEventListener('resize', () => {
    setResponsiveSizes();
  });
  
  // Add touch support for mobile and tablet
  if (getDeviceType() === 'mobile' || getDeviceType() === 'tablet') {
    nameElements.forEach((nameEl, index) => {
      nameEl.addEventListener('touchstart', () => {
        const name = activateName(index);
        
        // Display the first image of the touched person
        if (personImages[name] && personImages[name].length > 0) {
          changeBackground(personImages[name][0]);
        }
      });
    });
  }