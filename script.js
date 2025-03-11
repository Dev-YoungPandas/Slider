// Define the background images for each person
const personImages = {
    "Guy Coombes": [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    ],
    "Yuki Sato": [
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
      "https://images.unsplash.com/photo-1530785602389-07594beb8b73",
      "https://images.unsplash.com/photo-1504204267155-aaad8e81290d",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2"
    ],
    "Dan Max": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    ],
    "Sacha Stejko": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      "https://images.unsplash.com/photo-1521119989659-a83eee488004",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    ],
    "Dean Mackenzie": [
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a",
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235"
    ],
    "Camilli Rutherford": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
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
      pack.style.width = '100vw';
      pack.style.height = '70vh';
      pack.style.top = '20%';
      pack.style.right = '1%';
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
                        deviceType === 'tablet' ? 1.1 : 1.3;
    
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
      transformOrigin: 'right center',
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
    const transitionSpeed = getDeviceType() === 'mobile' ? 0.3 : 0.3;
    
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