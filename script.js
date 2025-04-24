const preText = `> Establishing secure connection...\n> Accessing classified intel...\n> Scanning digital vaults...\n> Fetching Agent Cube's data profile...\n\n`;

    const mainText = `> Name: Qhubaib Shaikh\n> Last Known Location: Mumbai, India\n> Email: qhubaibshaikh56@gmail.com\n> LinkedIn: linkedin.com/in/qhubaib\n> GitHub: github.com/Qhubaib1\n
> Title: Website Enforcement Specialist

> Skills Tree:
├── Digital Risk & Threat Intelligence
├── Data Analysis & Visualization
├── Brand Protection
├── Cybersecurity & Online Fraud Detection
├── Programming & Scripting
├── Web Scraping & Automation
├── Data Quality Assessment & Improvement
├── Cybercrime Investigation & Intelligence Sharing
└── Dark Web & Deep Web Monitoring

> Tech Stack Tree:
├── Programming Languages:
│   ├── Python
│   ├── SQL
│   ├── Java
│   └── JavaScript
├── BI & Analytics:
│   ├── Power BI
│   ├── Tableau
│   ├── Google Analytics
│   └── Looker
├── Tools & Platforms:
│   ├── Microsoft Excel
│   ├── MySQL
│   ├── Git & GitHub
│   └── JIRA
├── Cyber Tools:
│   ├── WHOIS Lookup
│   ├── Wireshark
│   ├── Kali Linux
│   └── Burp Suite
└── Productivity:
  └── Notion

> Executing Command: work_experience.log
>> Corsearch (2023 - Present)
-> Role: Website Enforcement Specialist
-> Responsibilities:
  ✓ Anti-phishing & brand protection
  ✓ Automating takedown procedures
  ✓ Investigating cyber fraud and threats
  ✓ Monitoring DNS abuse and web scraping ops

> Executing Command: clients.list
>> Protected Brands:
-> Microsoft
-> Marshall
-> Logitech
-> Nike
-> [ + more ]

> Executing Command: internships.scan
>> Found 4 Entries:
✓ SAP — Cybersecurity Engineering Intern
✓ Clifford Chance — Cyber Security Global
✓ Clifford Chance — Antitrust Global
✓ KPMG — Data Analytics Consulting

> Executing Command: projects.list
>> Personal Projects:
✓ Eye of Providence — AI Criminal ID System for Mumbai Police
✓ Price Tracker Tool — Python + Web Scraping
✓ AI-based E-Commerce Platform
✓ Group Chat App — Java + NoSQL

> Executing Command: certifications.list
>> Verified Credentials:
✓ EC-Council — Certified Cyber Threat Intelligence
✓ Infosys, AIG, Mastercard — Virtual Internships
✓ WIPO — IP Rights Certified

> Executing Command: hobbies.fetch
>> Hobbies:
✓ Gaming
✓ Workout
✓ Writing Novels
✓ Watching Movies & Anime

> Status: Online

> Access Granted.
> Welcome, Agent.`;

const ascii = `
 _____ _           _       _ _       
|  _  | |         | |     (_) |      
| | | | |__   __ _| |_ ___ _| | ___  
| | | | '_ \\ / _\` | __/ _ \\ | |/ _ \\ 
\\ \\_/ / | | | (_| | ||  __/ | | (_) |
 \\___/|_| |_|\\__,_|\\__\\___|_|_|\\___/ 
                                                                         
`;

    const terminal = document.getElementById('terminal');
    const asciiEl = document.getElementById('ascii');
    const sound = document.getElementById('typeSound');
    const commandInput = document.getElementById('commandInput');
    const skipBtn = document.getElementById('skipBtn');
    const historyDropdown = document.getElementById('historyDropdown');
    let typing = true;
    let commandHistory = [];

    let hackStage = 0;
    let selectedPlatform = '';
    let passwordMode = false;
    let selectedTarget = '';
    let hackCommandMode = '';
    const platforms = ['instagram', 'facebook', 'x', 'linkedin'];

    function addToHistory(cmd) {
      if (cmd && !commandHistory.includes(cmd)) {
        commandHistory.push(cmd);
        const option = document.createElement('option');
        option.value = cmd;
        option.textContent = cmd;
        historyDropdown.appendChild(option);
      }
    }

    historyDropdown.addEventListener('change', function() {
      if (this.value) {
        commandInput.value = this.value;
        commandInput.focus();
        this.selectedIndex = 0;
      }
    });

    function typeOutputLine(content, callback) {
      let j = 0;
      const line = document.createElement('div');
      line.className = 'terminal-line';
      terminal.appendChild(line);
      
      function typeChar() {
        if (j < content.length) {
          line.textContent = content.slice(0, j++) + '_';
          if (j % 3 === 0) { // Reduce sound frequency
            sound.volume = 0.2;
            sound.currentTime = 0;
            sound.play();
          }
          setTimeout(typeChar, 25);
        } else {
          line.textContent = content;
          if (callback) callback();
        }
      }
      typeChar();
    }

    function typeLines(lines, callback) {
      let i = 0;
      function typeNext() {
        if (!typing || i >= lines.length) return callback();
        typeOutputLine(lines[i], () => {
          i++;
          typeNext();
        });
      }
      typeNext();
    }

    function startTypingSequence() {
      const initLines = preText.trim().split('\n');
      typeLines(initLines, () => {
        typeOutputLine('', () => {
          let i = 0;
          function typeRest() {
            if (!typing || i >= mainText.length) {
              terminal.innerHTML += '<span class="cursor"></span>';
              asciiEl.innerHTML = ascii;
              return;
            }
            terminal.innerHTML += mainText.charAt(i++);
            if (i % 5 === 0) { // Reduce sound frequency
              sound.volume = 0.1;
              sound.currentTime = 0;
              sound.play();
            }
            setTimeout(typeRest, 30);
          }
          typeRest();
        });
      });
    }

    function showHackMenu() {
      const menuContent = `
      > ┌───────────────────────────────────────┐
      > │        ADVANCED HACKING CONSOLE       │
      > ├───────────────────────────────────────┤
      > │ [1] brute - Password Brute Force      │
      > │ [2] scan - Network Vulnerability Scan │
      > │ [3] analyze - Password Strength Check │
      > │ [4] decrypt - File Decryption Tool    │
      > └───────────────────────────────────────┘
      > 
      > Enter command (e.g., 'brute', 'scan'):`;
      
      const menu = document.createElement('div');
      menu.innerHTML = menuContent;
      menu.className = 'terminal-line';
      terminal.appendChild(menu);
      
      hackStage = 1;
    }

    function handleNetworkScan() {
      const scanOutput = document.createElement('div');
      scanOutput.className = 'terminal-line';
      terminal.appendChild(scanOutput);
      
      // Initialize scan with animation
      scanOutput.innerHTML = `> <span class="spin-loader"></span> Initiating network scan on target...`;
      
      // Create container for scan results
      const resultsContainer = document.createElement('div');
      resultsContainer.className = 'terminal-line';
      terminal.appendChild(resultsContainer);
      
      // Simulate scanning process
      setTimeout(() => {
        scanOutput.innerHTML = `> <span class="command-highlight">◉</span> Network scan initiated on target ${selectedTarget}`;
        
        // Define example vulnerabilities
        const vulnerabilities = [
          { name: "CVE-2023-1234", desc: "Outdated OpenSSL library (v1.0.2)", level: "high" },
          { name: "CVE-2024-5678", desc: "Nginx server version leaking", level: "low" },
          { name: "CVE-2023-9012", desc: "Unpatched SQL injection in login form", level: "high" },
          { name: "CVE-2022-3456", desc: "Cross-site scripting vulnerability", level: "medium" },
          { name: "PORT-22", desc: "SSH port open with password auth enabled", level: "medium" },
          { name: "PORT-3389", desc: "RDP exposed to internet", level: "high" }
        ];
        
        // Filter random vulnerabilities
        const foundVulns = vulnerabilities
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        
        // Simulate port scanning
        setTimeout(() => {
          const portsContainer = document.createElement('div');
          portsContainer.className = 'terminal-line';
          portsContainer.innerHTML = `> <span class="command-highlight">◉</span> Port scan results:`;
          terminal.appendChild(portsContainer);
          
          const ports = [
            { port: 21, service: "FTP", state: "closed" },
            { port: 22, service: "SSH", state: "open" },
            { port: 80, service: "HTTP", state: "open" },
            { port: 443, service: "HTTPS", state: "open" },
            { port: 3389, service: "RDP", state: "open" },
            { port: 8080, service: "HTTP-ALT", state: "filtered" }
          ];
          
          let portDelay = 0;
          ports.forEach(port => {
            setTimeout(() => {
              const portLine = document.createElement('div');
              portLine.className = 'scan-result';
              portLine.innerHTML = `  PORT ${port.port.toString().padEnd(5)} ${port.service.padEnd(10)} [${port.state}]`;
              terminal.appendChild(portLine);
              terminal.scrollTop = terminal.scrollHeight;
            }, portDelay);
            portDelay += 300;
          });
          
          // Show vulnerabilities after port scan
          setTimeout(() => {
            const vulnContainer = document.createElement('div');
            vulnContainer.className = 'terminal-line';
            vulnContainer.innerHTML = `> <span class="command-highlight">◉</span> Vulnerability assessment:`;
            terminal.appendChild(vulnContainer);
            terminal.scrollTop = terminal.scrollHeight;
            
            let vulnDelay = 0;
            foundVulns.forEach(vuln => {
              setTimeout(() => {
                const vulnLine = document.createElement('div');
                vulnLine.className = `scan-result vulnerability-${vuln.level}`;
                vulnLine.innerHTML = `  [${vuln.level.toUpperCase()}] ${vuln.name}: ${vuln.desc}`;
                terminal.appendChild(vulnLine);
                terminal.scrollTop = terminal.scrollHeight;
              }, vulnDelay);
              vulnDelay += 400;
            });
            
            // Completion message
            setTimeout(() => {
              const summary = document.createElement('div');
              summary.className = 'terminal-line response-success';
              
              const highCount = foundVulns.filter(v => v.level === "high").length;
              const medCount = foundVulns.filter(v => v.level === "medium").length;
              const lowCount = foundVulns.filter(v => v.level === "low").length;
              
              summary.innerHTML = `> Scan complete. Found: ${highCount} high, ${medCount} medium, ${lowCount} low risk vulnerabilities.`;
              terminal.appendChild(summary);
              terminal.scrollTop = terminal.scrollHeight;
              
              hackStage = 0; // Reset hack stage
            }, vulnDelay + 800);
            
          }, portDelay + 500);
          
        }, 2000);
        
      }, 2000);
    }

    function analyzePassword(password) {
      const outputContainer = document.createElement('div');
      outputContainer.className = 'terminal-line';
      terminal.appendChild(outputContainer);
      
      // Initial loading message
      outputContainer.innerHTML = `> <span class="spin-loader"></span> Analyzing password strength...`;
      
      setTimeout(() => {
        // Calculate strength
        let strength = 0;
        
        // Check length
        if (password.length >= 12) strength += 25;
        else if (password.length >= 8) strength += 15;
        else if (password.length >= 6) strength += 10;
        
        // Check for numbers
        if (/\d/.test(password)) strength += 15;
        
        // Check for special characters
        if (/[^A-Za-z0-9]/.test(password)) strength += 20;
        
        // Check for uppercase
        if (/[A-Z]/.test(password)) strength += 15;
        
        // Check for lowercase
        if (/[a-z]/.test(password)) strength += 10;
        
        // Check for common words/patterns
        const commonPatterns = ['password', '12345', 'qwerty', 'admin', 'welcome', 'abc123', 'letmein'];
        if (commonPatterns.some(pattern => password.toLowerCase().includes(pattern))) strength -= 25;
        
        // Limit to 0-100
        strength = Math.max(0, Math.min(100, strength));
        
        // Show result
        let strengthText = '';
        let strengthColor = '';
        
        if (strength >= 80) {
          strengthText = 'STRONG';
          strengthColor = '#00ff00';
        } else if (strength >= 50) {
          strengthText = 'MEDIUM';
          strengthColor = '#ffff00';
        } else {
          strengthText = 'WEAK';
          strengthColor = '#ff0000';
        }
        
        // Update with analysis results
        outputContainer.innerHTML = `> Password Strength Analysis:`;
        
        const meterContainer = document.createElement('div');
        meterContainer.className = 'terminal-line';
        meterContainer.innerHTML = `
          <div class="password-meter">
            ${Array(5).fill().map((_, i) => 
              `<div class="password-section ${i * 20 < strength ? 'active' : ''}"></div>`
            ).join('')}
          </div>
          <div style="color: ${strengthColor}; margin-top: 5px;">> Strength: ${strengthText} (${strength}%)</div>
        `;
        terminal.appendChild(meterContainer);
        
        // Add crack time estimation
        let crackTime = '';
        if (strength >= 80) {
          crackTime = 'centuries';
        } else if (strength >= 60) {
          crackTime = 'decades';
        } else if (strength >= 40) {
          crackTime = 'months';
        } else if (strength >= 20) {
          crackTime = 'days';
        } else {
          crackTime = 'minutes';
        }
        
        const timeEstimate = document.createElement('div');
        timeEstimate.className = 'terminal-line';
        timeEstimate.innerHTML = `> Estimated time to crack: ${crackTime}`;
        terminal.appendChild(timeEstimate);
        
        // Add suggestions if needed
        if (strength < 60) {
          const suggestions = document.createElement('div');
          suggestions.className = 'terminal-line';
          suggestions.innerHTML = `> Suggestions for improvement:`;
          terminal.appendChild(suggestions);
          
          const suggestionList = [];
          if (password.length < 12) suggestionList.push("Increase length to at least 12 characters");
          if (!/\d/.test(password)) suggestionList.push("Add numbers");
          if (!/[^A-Za-z0-9]/.test(password)) suggestionList.push("Add special characters");
          if (!/[A-Z]/.test(password)) suggestionList.push("Add uppercase letters");
          if (!/[a-z]/.test(password)) suggestionList.push("Add lowercase letters");
          
          suggestionList.forEach(sugg => {
            const suggItem = document.createElement('div');
            suggItem.className = 'terminal-line';
            suggItem.innerHTML = `  • ${sugg}`;
            terminal.appendChild(suggItem);
          });
        }
        
        hackStage = 0; // Reset hack stage
      }, 2000);
    }

    function decryptSimulation() {
      const files = [
        'encrypted_file_001.dat',
        'secret_communications.bin',
        'hidden_data.enc',
        'classified_intel.pgp'
      ];
      
      const selectedFile = files[Math.floor(Math.random() * files.length)];
      
      const decryptContainer = document.createElement('div');
      decryptContainer.className = 'terminal-line';
      decryptContainer.innerHTML = `> <span class="spin-loader"></span> Preparing decryption module...`;
      terminal.appendChild(decryptContainer);
      
      setTimeout(() => {
        decryptContainer.innerHTML = `> <span class="command-highlight">◉</span> Decryption target: ${selectedFile}`;
        
        const progressContainer = document.createElement('div');
        progressContainer.className = 'terminal-line';
        terminal.appendChild(progressContainer);
        
        // Show decryption methods
        const methodsContainer = document.createElement('div');
        methodsContainer.className = 'terminal-line';
        methodsContainer.innerHTML = `> <span class="command-highlight">◉</span> Attempting decryption methods:`;
        terminal.appendChild(methodsContainer);
        
        const methods = [
          { name: "RSA key factorization", success: false, time: 2000 },
          { name: "Known plaintext attack", success: false, time: 1500 },
          { name: "Frequency analysis", success: false, time: 1000 },
          { name: "Brute force AES-256", success: true, time: 3000 }
        ];
        
        let methodDelay = 0;
        methods.forEach((method, index) => {
          setTimeout(() => {
            const methodLine = document.createElement('div');
            methodLine.className = 'hack-step';
            methodLine.style.animationDelay = `${index * 0.2}s`;
            
            if (index === methods.length - 1) {
              // Last method - show progress bar
              methodLine.innerHTML = `
                <div class="hack-icon">${method.success ? '✓' : '✗'}</div>
                <div class="hack-action">${method.name}</div>
                <div class="hack-status">${method.success ? 'SUCCESS' : 'FAILED'}</div>
              `;
              terminal.appendChild(methodLine);
              
              // Add progress bar for the successful method
              const progressBar = document.createElement('div');
              progressBar.className = 'hack-progress';
              progressBar.innerHTML = '<div class="hack-progress-bar" style="width: 5%"></div>';
              terminal.appendChild(progressBar);
              
              const bar = progressBar.querySelector('.hack-progress-bar');
              
              // Animate progress
              let progress = 5;
              const progressInterval = setInterval(() => {
                progress += 5;
                bar.style.width = `${progress}%`;
                
                if (progress >= 100) {
                  clearInterval(progressInterval);
                  
                  // Show success message
                  setTimeout(() => {
                    const successMessage = document.createElement('div');
                    successMessage.className = 'terminal-line response-success';
                    successMessage.innerHTML = `> Decryption successful!`;
                    terminal.appendChild(successMessage);
                    
                    // File content preview
                    const contentPreview = document.createElement('div');
                    contentPreview.className = 'terminal-line';
                    
                    // Generate random decrypted content
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let decryptedContent = '';
                    for (let i = 0; i < 200; i++) {
                      decryptedContent += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    
                    contentPreview.innerHTML = `> Preview: ${decryptedContent.substring(0, 50)}...`;
                    terminal.appendChild(contentPreview);
                    
                    // Reset hack stage
                    hackStage = 0;
                  }, 1000);
                }
              }, 80);
              
            } else {
              methodLine.innerHTML = `
                <div class="hack-icon">${method.success ? '✓' : '✗'}</div>
                <div class="hack-action">${method.name}</div>
                <div class="hack-status">${method.success ? 'SUCCESS' : 'FAILED'}</div>
              `;
              terminal.appendChild(methodLine);
            }
            
            terminal.scrollTop = terminal.scrollHeight;
          }, methodDelay);
          
          methodDelay += method.time;
        });
        
      }, 2000);
    }

    function simulateBruteforce(platform, username) {
      const outputContainer = document.createElement('div');
      outputContainer.className = 'terminal-line';
      outputContainer.innerHTML = `> <span class="command-highlight">◉</span> Target: ${platform} | Username: ${username}`;
      terminal.appendChild(outputContainer);
      
      const progressContainer = document.createElement('div');
      progressContainer.className = 'terminal-line';
      progressContainer.innerHTML = `> <span class="spin-loader"></span> Initiating brute force attack...`;
      terminal.appendChild(progressContainer);
      
      setTimeout(() => {
        progressContainer.innerHTML = `> <span class="command-highlight">◉</span> Loading password dictionary...`;
        
        setTimeout(() => {
          const hackerText = document.createElement('div');
          hackerText.className = 'terminal-line';
          terminal.appendChild(hackerText);
          
          const progressBar = document.createElement('div');
          progressBar.className = 'hack-progress';
          progressBar.innerHTML = '<div class="hack-progress-bar" style="width: 0%"></div>';
          terminal.appendChild(progressBar);
          
          const stepsContainer = document.createElement('div');
          stepsContainer.className = 'terminal-line';
          terminal.appendChild(stepsContainer);
          
          // Create steps
          const steps = [
            { text: "Bypassing rate limiting", delay: 1000 },
            { text: "Testing common passwords", delay: 2000 },
            { text: "Testing password variations", delay: 3000 },
            { text: "Testing custom dictionary", delay: 4000 },
            { text: "Password found!", delay: 5000 }
          ];
          
          let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+[]{}|;:,.<>?';
          let currentStep = 0;
          
          // Update progress bar
          const bar = progressBar.querySelector('.hack-progress-bar');
          let progress = 0;
          
          // Show matrix-like effect
          function updateMatrixText() {
            let fake = '';
            for (let i = 0; i < 30; i++) {
              fake += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            hackerText.innerHTML = `<span class="matrix-text">${fake}</span>`;
          }
          
          // Start matrix effect
          const matrixInterval = setInterval(updateMatrixText, 100);
          
          // Progress through steps
          function updateProgress() {
            progress += 1;
            bar.style.width = `${progress}%`;
            
            // Check if we reached a step
            if (progress % 20 === 0 && currentStep < steps.length) {
              const step = steps[currentStep];
              
              const stepElem = document.createElement('div');
              stepElem.className = 'hack-step';
              stepElem.innerHTML = `
                <div class="hack-icon">→</div>
                <div class="hack-action">${step.text}</div>
                <div class="hack-status">${progress}%</div>
              `;
              stepsContainer.appendChild(stepElem);
              
              currentStep++;
            }
            
            if (progress >= 100) {
              clearInterval(progressInterval);
              clearInterval(matrixInterval);
              
              // Show success message
              setTimeout(() => {
                hackerText.innerHTML = ''; // Clear matrix text
                
                const passwordResult = document.createElement('div');
                passwordResult.className = 'terminal-line response-success';
                
                // Generate random password
                const passwordLength = Math.floor(Math.random() * 5) + 6;
                let password = '';
                for (let i = 0; i < passwordLength; i++) {
                  password += charset.charAt(Math.floor(Math.random() * charset.length));
                }
                
                passwordResult.innerHTML = `> Password cracked: <span class="flicker-text">${password}</span>`;
                terminal.appendChild(passwordResult);
                
                const accessMessage = document.createElement('div');
                accessMessage.className = 'terminal-line response-success';
                accessMessage.innerHTML = `> Access gained to ${platform} account for ${username}`;
                terminal.appendChild(accessMessage);
                
                hackStage = 0; // Reset hack stage
              }, 1000);
            }
            
            terminal.scrollTop = terminal.scrollHeight;
          }
          
          const progressInterval = setInterval(updateProgress, 69050);
          
        }, 1500);
      }, 2000);
    }

    function darknetLogs() {
      const darknetLogs = [
        '[.onion] Login credentials dump – 45K accounts – $10 BTC',
        '[.onion] Remote Access Tools for hire – starting at $50',
        '[.onion] Zero-day exploit for sale (Windows 11) – $5000',
        '[.onion] Fullz: Credit card + SSN bundles – 100 records',
        '[.onion] HITMAN Service (Worldwide) – Starting $5k',
        '[.onion] DarkLeaks – Politician email archive 7.2GB',
        '[.onion] DeepBay – Weapons auction ends in 6h 12m',
        '[.onion] Malware-as-a-Service dashboard detected',
        '[.onion] Marketplace escrow dispute – awaiting resolution...',
        '[.onion] RedRoom — access denied. Requires Level 9 clearance.',
        '[.onion] ExploitDB Premium – 0day archive (2022–2025)',
        '[.onion] Spoofed passport generator – Realistic templates (EU/US/UK)',
        '[.onion] Bank logins w/ balance > $10K – Sold in batches',
        '[.onion] RAT Builder Pro – FUD + crypter bundle – $150',
        '[.onion] Classified NATO document cache – 14.3GB – Encrypted',
        '[.onion] Government surveillance tool leaked – "OwlEye Suite"',
        '[.onion] Crypto mixer logs leaked – deanonymization possible',
        '[.onion] Rent-a-botnet – 20k nodes available (Geo-targeted)',
        '[.onion] Ethereum wallet brute-forcing tool – 30% success rate',
        '[.onion] OnionMail dump – 200k private mailboxes',
        '[.onion] Facial recognition bypass tool (Active Directory)',
        '[.onion] Deep fake identity builder – facial + audio clone',
        '[.onion] Credit card skimmers w/ NFC – $90 per unit',
        '[.onion] Police database access – limited slots left!',
        '[.onion] Fake COVID-19 vaccination certificates – $30 each',
        '[.onion] 3D printed firearm blueprints (auto fire mod included)',
        '[.onion] TOR-to-Clearnet proxy – traceable bypass tool',
        '[.onion] Secret agent ID generator – MI6 / FSB / NSA styles',
        '[.onion] Interpol Watchlist clone site – spoofed entries',
        '[.onion] Black Hat forums: Hacked cam live feeds (NSFW)',
        '[.onion] Leaked chat logs from FBI Discord honeypot',
        '[.onion] "Hydra Market" v3 mirror – fresh invite codes',
        '[.onion] Unlisted domain marketplace – buy & sell .gov sites',
        '[.onion] SIM swapper tool – v2.5.1 patched for AT&T/T-Mobile',
        '[.onion] Underground eBay for stolen luxury watches',
        '[.onion] Nuclear plant schematics archive (Ukraine 2023)',
        '[.onion] Custom ransomware builder – Drag & Drop edition',
        '[.onion] Firmware exploit for Tesla Autopilot override',
        '[.onion] Keylogger logs archive – 2TB compressed (2024)',
        '[.onion] Covert USB drop payloads – Office / Windows ready',
        '[.onion] Blackmail contract template generator – markdown ready',
        '[.onion] Crypto drain script v5.6 – stealth-mode enabled',
        '[.onion] iCloud unlock remote API – Access token required',
        '[.onion] ChatGPT jailbreak prompts collection (dangerous!)',
        '[.onion] Leaked drone feed viewer – military grade only',
        '[.onion] "Project Aurora" exposed – AI-led surveillance blueprint',
        '[.onion] National firewall bypass VPN list – North Korea edition',
        '[.onion] Ultra stealth burner phone service – ships worldwide',
        '[.onion] SQLi scanner API – returns credentials in JSON'
      ];

      const selectedLogs = darknetLogs
        .sort(() => 0.5 - Math.random())
        .slice(0, 5); // show 5 random entries

      typeOutputLine('> Connecting to darknet nodes via Tor...', () => {
        setTimeout(() => {
          typeOutputLine('> Tunnel established. Accessing .onion services...');
          selectedLogs.forEach((log, i) => {
            setTimeout(() => {
              const logLine = document.createElement('div');
              logLine.className = 'terminal-line response-warning';
              logLine.textContent = `> 🕸 ${log}`;
              terminal.appendChild(logLine);
            }, 600 * (i + 1));
          });
          setTimeout(() => {
            typeOutputLine('> Darknet scan complete. Results stored in temp memory.');
          }, 600 * (selectedLogs.length + 1));
        }, 1000);
      });
    }

    function handleCommand(cmd) {
      const input = cmd.trim().toLowerCase();
      
      if (input) addToHistory(input);

      if (passwordMode) {
        passwordMode = false;
        commandInput.setAttribute('type', 'text');
        if (input === 'rootcube') {
          typeOutputLine('> Access Granted ', () => {
            showHackMenu();
          });
        } else {
          const errorLine = document.createElement('div');
          errorLine.className = 'terminal-line response-error';
          errorLine.textContent = '> Access Denied, Incorrect Password.';
          terminal.appendChild(errorLine);
          hackStage = 0;
        }
        return;
      }

      if (hackStage === 1) {
        if (['brute', 'scan', 'analyze', 'decrypt'].includes(input)) {
          hackCommandMode = input;
          if (input === 'brute') {
            typeOutputLine('> Choose platform (instagram/facebook/x/linkedin):');
            hackStage = 2;
          } else if (input === 'scan') {
            typeOutputLine('> Enter target IP or domain:');
            hackStage = 5;
          } else if (input === 'analyze') {
            typeOutputLine('> Enter password to analyze:');
            passwordMode = true;
            commandInput.setAttribute('type', 'password');
            hackStage = 6;
          } else if (input === 'decrypt') {
            decryptSimulation();
          }
        } else if (input === 'exit' || input === 'quit') {
          typeOutputLine('> Exiting hack module.');
          hackStage = 0;
        } else {
          typeOutputLine('> Invalid command. Type "brute", "scan", "analyze", "decrypt" or "exit".');
        }
        return;
      }
      
      if (hackStage === 2) {
        if (platforms.includes(input)) {
          selectedPlatform = input;
          typeOutputLine(`> You selected ${input}. Enter username or email to proceed:`);
          hackStage = 3;
        } else {
          const errorLine = document.createElement('div');
          errorLine.className = 'terminal-line response-error';
          errorLine.textContent = '> Unknown platform. Try again or type "exit" to cancel.';
          terminal.appendChild(errorLine);
        }
        return;
      }

      if (hackStage === 3) {
        simulateBruteforce(selectedPlatform, input);
        return;
      }
      
      if (hackStage === 5) {
        selectedTarget = input;
        handleNetworkScan();
        return;
      }
      
      if (hackStage === 6) {
        analyzePassword(input);
        return;
      }

      if (input === 'hack') {
        typeOutputLine('> Accessing secure admin zone... Enter Password', () => {
          passwordMode = true;
          commandInput.setAttribute('type', 'password');
          hackStage = 1;
        });
        return;
      }
      
      if (input === 'darknet') {
        darknetLogs();
        return;
      }
      const responses = {
        help: '> Available commands: help, projects, status, clear, resume, skip, sudo, matrix, nuke, redmode,',
        projects: '> Eye of Providence, Price Tracker Tool, AI E-Commerce Platform, Group Chat App',
        status: '> Agent Cube is online and monitoring threats.',
        download: '> Resume Download: Click here',
        sudo: '> Permission denied. You are not root.',
        matrix: '> Activating Matrix mode... Permission denied please contact admin',
        nuke: '> Launching in 3... 2... 1... IP Address not in our record, Access Denied, Agent.',
      };

      if (input === 'clear') {
        terminal.innerHTML = '';
      } else if (input === 'skip') {
        typing = false;
        terminal.innerHTML = preText + mainText + '<span class="cursor"></span>';
        asciiEl.innerHTML = ascii;
      } else if (input === 'resume') {
        typeOutputLine('> Resume Download: ', () => {
          const a = document.createElement('a');
          a.href = 'Qhubaib Resume.pdf';
          a.textContent = 'Click here';
          a.style.color = 'var(--primary-color)';
          a.download = '';
          terminal.appendChild(a);
        });
      } else if (input === 'redmode') {
        document.body.classList.add('red-mode');
        typeOutputLine('> Red mode activated. 🔴');
      } else {
        const output = responses[input] || '> Unknown command. Type "help" for a list of commands.';
        typeOutputLine(output);
      }
    }

    commandInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const cmd = commandInput.value.trim();
        commandInput.value = '';
        if (!passwordMode) typeOutputLine('> ' + cmd, () => handleCommand(cmd));
        else handleCommand(cmd); // Don't echo password
      }
    });

    skipBtn.addEventListener('click', () => {
      typing = false;
      terminal.innerHTML = preText + mainText + '<span class="cursor"></span>';
      asciiEl.innerHTML = ascii;
    });

    // Initial focus on command input
    commandInput.focus();
    
    // Keep focus on command input when clicking terminal
    document.querySelector('.terminal-container').addEventListener('click', () => {
      commandInput.focus();
    });

    startTypingSequence();
