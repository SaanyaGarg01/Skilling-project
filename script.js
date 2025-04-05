const features = [
    {
      title: '1. "AI Doesn’t Know Everything" Mode',
      desc: 'AI provides flawed code; users spot mistakes. Builds critical validation skills and security awareness.'
    },
    {
      title: '2. No-Code to Pro-Code: AI-Assisted Development',
      desc: 'Drag-and-drop UI to real code. Transition beginners into full-stack developers with AI help.'
    },
    {
      title: '3. AI-Generated Code, Human Optimization',
      desc: 'Users optimize basic AI code for speed, security, and memory. Compete on leaderboards.'
    },
    {
      title: '4. Reverse Engineering & Code Forensics',
      desc: 'Analyze and debug obfuscated AI code. Simulates real-world cybersecurity and decoding tasks.'
    },
    {
      title: '5. AI-Augmented Software Architecture',
      desc: 'Design scalable systems with AI input. Build microservices, cloud-native apps, and scalable architectures.'
    },
    {
      title: '6. Human-AI Hackathons & Coding Battles',
      desc: 'Team up with AI, lead the project, debug AI’s code, and outthink it in real-time coding challenges.'
    },
    {
      title: '7. AI-Powered Project Auto-Evaluation',
      desc: 'Real-time AI code reviews on logic, maintainability, and best practices. Suggests roles based on your style.'
    },
    {
      title: '8. AI-Resistant Coding Career Guidance',
      desc: 'Discover AI-proof domains like quantum, cybersecurity, AI ethics, embedded systems, and cloud design.'
    },
    {
      title: '9. AI Ethics & Security Training',
      desc: 'Hands-on Red/Blue Team training. Identify bias, security loopholes, and learn responsible AI use.'
    },
    {
      title: '10. AI-Human Hybrid App Projects',
      desc: 'Plan, build, debug & deploy full apps with AI assistance. Publish to your public portfolio!'
    }
  ];
  
  const featuresGrid = document.querySelector('.features-grid');
  
  features.forEach(feature => {
    const card = document.createElement('div');
    card.classList.add('feature-card');
    card.innerHTML = `<h3>${feature.title}</h3><p>${feature.desc}</p>`;
    featuresGrid.appendChild(card);
  });
  
  function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  }
  
  function startJourney() {
    alert("🎉 Great decision! Prototype coming soon. Stay tuned.");
  }
  