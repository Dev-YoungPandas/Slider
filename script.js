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
  
  // Track if images are properly loaded
  const loadedImages = {};
  let imagesLoaded = false;
  
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
  
  // Create multiple background elements for transitions
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
      will-change: opacity;
      transform: translateZ(0);
    `;
    backgroundContainer.appendChild(bg);
    backgrounds.push(bg);
  }
  
  // Add a loading indicator
  const loadingIndicator = document.createElement('div');
  loadingIndicator.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    z-index: 9999;
  `;
  loadingIndicator.textContent = 'Loading images...';
  document.body.appendChild(loadingIndicator);
  
  // Preload images more effectively
  function preloadImages() {
    return new Promise((resolve) => {
      let loadedCount = 0;
      const totalImages = Object.values(personImages).reduce((acc, arr) => acc + arr.length, 0);
      
      Object.entries(personImages).forEach(([person, urls]) => {
        loadedImages[person] = [];
        
        urls.forEach((url, index) => {
          const img = new Image();
          
          img.onload = () => {
            loadedImages[person][index] = true;
            loadedCount++;
            
            // Update loading text
            const percent = Math.floor((loadedCount / totalImages) * 100);
            loadingIndicator.textContent = `Loading images... ${percent}%`;
            
            if (loadedCount === totalImages) {
              imagesLoaded = true;
              document.body.removeChild(loadingIndicator);
              resolve();
            }
          };
          
          img.onerror = () => {
            // Mark as loaded even if there's an error to prevent hanging
            loadedImages[person][index] = false;
            loadedCount++;
            
            if (loadedCount === totalImages) {
              imagesLoaded = true;
              document.body.removeChild(loadingIndicator);
              resolve();
            }
          };
          
          // Add timestamp to bypass cache issues
          img.src = `${url}?t=${Date.now()}`;
        });
      });
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
  
  // Detect device type and performance
  function getDeviceInfo() {
    const width = window.innerWidth;
    const deviceType = width < 576 ? 'mobile' : width < 992 ? 'tablet' : 'desktop';
    
    // Check if low-end device based on navigator.hardwareConcurrency
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    return { deviceType, isLowEndDevice };
  }
  
  // Function to set responsive font sizes and positions
  function setResponsiveSizes() {
    const { deviceType } = getDeviceInfo();
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
        name.style.willChange = 'transform, opacity, color';
        name.style.transform = 'translateZ(0)';
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
        name.style.willChange = 'transform, opacity, color';
        name.style.transform = 'translateZ(0)';
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
        line.style.justifyContent = 'end';
        line.style.position = 'absolute';
        line.style.color = 'white';
        line.style.height = '10vh';
        line.style.right = '0';
        line.style.paddingRight = '5%';
        
        // Calculate bottom position
        const spacing = deviceType === 'tablet' ? 18 : 16;
        const bottomPosition = 84 - (index * spacing);
        line.style.bottom = `${bottomPosition}%`;
      });
    }
  }
  
  // Animation timeline to control transitions
  let currentTransition = null;
  
  // Function to activate a name with improved animation
  function activateName(index) {
    const { deviceType, isLowEndDevice } = getDeviceInfo();
    
    // Calculate proper scale based on device
    const activeScale = deviceType === 'mobile' ? 1.15 : 
                        deviceType === 'tablet' ? 1.1 : 1.3;
    
    // Kill any ongoing animations
    if (currentTransition) {
      currentTransition.kill();
    }
    
    // Create new timeline
    currentTransition = gsap.timeline();
    
    // Reset all names to inactive state
    nameElements.forEach(el => {
      currentTransition.to(el, {
        scale: 1,
        opacity: 0.5,
        color: '#afafaf',
        duration: isLowEndDevice ? 0.3 : 0.2,
        ease: 'power1.out'
      }, 0);
    });
  
    // Activate the current name with animation
    currentTransition.to(nameElements[index], {
      scale: activeScale,
      opacity: 1,
      color: '#fff',
      duration: isLowEndDevice ? 0.3 : 0.2,
      ease: 'power2.out'
    }, 0);
  
    return nameElements[index].textContent;
  }
  
  // Current background index
  let currentBgIndex = 0;
  let isTransitioning = false;
  
  // Function to change background image with optimized transitions
  function changeBackground(imageUrl) {
    return new Promise((resolve) => {
      // Don't start a new transition if one is already in progress
      if (isTransitioning) {
        resolve();
        return;
      }
      
      isTransitioning = true;
      
      // Get current and next background elements
      const currentBg = backgrounds[currentBgIndex];
      const nextBg = backgrounds[currentBgIndex === 0 ? 1 : 0];
      
      // Set the next background image
      nextBg.style.backgroundImage = `url(${imageUrl})`;
      
      // Get device info for transition timing
      const { isLowEndDevice } = getDeviceInfo();
      const transitionSpeed = isLowEndDevice ? 0.5 : 0.4;
      
      // Create a timeline for the transition
      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioning = false;
          resolve();
        }
      });
      
      // Add a small delay before starting the transition
      tl.to({}, { duration: 0.05 });
      
      // Fade in next background
      tl.to(nextBg, {
        opacity: 1,
        duration: transitionSpeed,
        ease: 'power1.inOut'
      }, 0);
      
      // Fade out current background
      tl.to(currentBg, {
        opacity: 0,
        duration: transitionSpeed,
        ease: 'power1.inOut'
      }, 0);
      
      // Toggle background index
      currentBgIndex = currentBgIndex === 0 ? 1 : 0;
    });
  }
  
  // Variable to keep track of whether animation should continue
  let continueAnimation = true;
  
  // Function to run the animation sequence with improved timing
  async function runAnimation() {
    let currentPersonIndex = 0;
    
    while (continueAnimation) {
      try {
        // Activate the current person
        const currentPerson = activateName(currentPersonIndex);
        const currentImages = personImages[currentPerson];
        
        // Get device info for timing
        const { deviceType, isLowEndDevice } = getDeviceInfo();
        
        // Longer display times for low-end devices
        const baseDisplayTime = isLowEndDevice ? 1200 : 900;
        const imageDisplayTime = deviceType === 'mobile' ? baseDisplayTime : baseDisplayTime;
        
        // Cycle through each image for the current person
        for (let i = 0; i < currentImages.length && continueAnimation; i++) {
          // Change background and wait for transition to complete
          await changeBackground(currentImages[i]);
          
          // Wait for the specified display time
          await new Promise(resolve => setTimeout(resolve, imageDisplayTime));
        }
        
        // Move to the next person
        currentPersonIndex = (currentPersonIndex + 1) % nameElements.length;
        
      } catch (error) {
        console.error('Animation error:', error);
        // If there's an error, wait and try to continue
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  // Handle visibility changes to pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      continueAnimation = false;
    } else {
      if (!continueAnimation) {
        continueAnimation = true;
        runAnimation();
      }
    }
  });
  
  // Initialize the page
  async function initPage() {
    try {
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
      
      // Preload all images before starting animation
      await preloadImages();
      
      // Start animation only after images are loaded
      continueAnimation = true;
      runAnimation();
      
    } catch (error) {
      console.error('Initialization error:', error);
      // If loading fails, remove loading indicator and show error
      if (document.body.contains(loadingIndicator)) {
        document.body.removeChild(loadingIndicator);
      }
      
      const errorMessage = document.createElement('div');
      errorMessage.style.cssText = `
        position: fixed;
        bottom: 10px;
        left: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 9999;
      `;
      errorMessage.textContent = 'Could not load all images. Tap a name to see photos.';
      document.body.appendChild(errorMessage);
      
      // Auto hide error after 5 seconds
      setTimeout(() => {
        if (document.body.contains(errorMessage)) {
          document.body.removeChild(errorMessage);
        }
      }, 5000);
    }
  }
  
  // Handle window resize events for responsiveness
  let resizeTimeout;
  window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setResponsiveSizes();
    }, 200);
  });
  
  // Add touch support for mobile and tablet
  function setupTouchEvents() {
    const { deviceType } = getDeviceInfo();
    
    if (deviceType === 'mobile' || deviceType === 'tablet') {
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
  }
  
  // Start everything when the page loads
  window.addEventListener('load', () => {
    setupTouchEvents();
    initPage();
  });