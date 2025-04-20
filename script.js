
    const preText = `> Establishing secure connection...\n> Accessing classified intel...\n> Scanning digital vaults...\n> Fetching Agent Cube's data profile...\n\n`;

    const mainText = `> Name: Qhubaib Shaikh\n> Last Known Location: Mumbai, India\n> Email: qhubaibshaikh56@gmail.com\n> LinkedIn: linkedin.com/in/qhubaib\n> GitHub: github.com/Qhubaib12\n
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
   _____       _           _     _     _     
  |  __ \\     | |         | |   (_)   | |    
  | |__) |   _| |__   ___ | |__  _  __| |___ 
  |  ___/ | | | '_ \\ / _ \\| '_ \\| |/ _\` / __|
  | |   | |_| | |_) | (_) | |_) | | (_| \\__ \\
  |_|    \\__,_|_.__/ \\___/|_.__/|_|\\__,_|___/
`;

    const terminal = document.getElementById('terminal');
    const asciiEl = document.getElementById('ascii');
    const sound = document.getElementById('typeSound');
    const commandInput = document.getElementById('commandInput');
    const skipBtn = document.getElementById('skipBtn');
    let typing = true;

    let hackStage = 0;
    let selectedPlatform = '';
    let passwordMode = false;
    const platforms = ['instagram', 'facebook', 'x', 'linkedin'];

    function typeOutputLine(content, callback) {
      let j = 0;
      const line = document.createElement('div');
      terminal.appendChild(line);
      function typeChar() {
        if (j < content.length) {
          line.textContent = content.slice(0, j++) + '_';
          sound.currentTime = 0;
          sound.play();
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
              asciiEl.textContent = ascii;
              return;
            }
            terminal.innerHTML += mainText.charAt(i++);
            sound.currentTime = 0;
            sound.play();
            setTimeout(typeRest, 30);
          }
          typeRest();
        });
      });
    }

    function simulateBruteforce(platform) {
      let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let start = Date.now();
      let crackTime = Math.floor(Math.random() * 3 + 3);
      const line = document.createElement('div');
      document.getElementById('terminal').appendChild(line);

      function update() {
        let fake = '';
        for (let i = 0; i < 25; i++) {
          fake += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        let elapsed = Math.floor((Date.now() - start) / 1000);
        let timeLeft = crackTime * 3600 - elapsed;
        let hrs = Math.floor(timeLeft / 3600);
        let mins = Math.floor((timeLeft % 3600) / 60);
        line.textContent = `> [${fake}]  Estimated crack time: ${hrs}h ${mins}m`;
        if (timeLeft > 0) {
          setTimeout(update, 150);
        } else {
          line.textContent = `>  ${platform} password cracked successfully!`;
        }
      }

      update();
    }

    function handleCommand(cmd) {
      const input = cmd.trim().toLowerCase();

      if (passwordMode) {
        passwordMode = false;
        commandInput.setAttribute('type', 'text');
        if (input === 'rootcube') {
          typeOutputLine('> Access Granted ', () => {
            typeOutputLine('> Choose platform (instagram/facebook/x/linkedin):');
            hackStage = 2;
          });
        } else {
          typeOutputLine('> Access Denied , Incorrect Password.');
          hackStage = 0;
        }
        return;
      }

      if (hackStage === 1) {
        typeOutputLine('> Enter Admin Password:');
        passwordMode = true;
        commandInput.setAttribute('type', 'password');
        return;
      }

      if (hackStage === 2) {
        if (platforms.includes(input)) {
          selectedPlatform = input;
          typeOutputLine(`> You selected ${input}. Enter username or email to proceed:`);
          hackStage = 3;
        } else {
          typeOutputLine('> Unknown platform. Try again.');
        }
        return;
      }

      if (hackStage === 3) {
        typeOutputLine(`> Username/Email accepted. Initiating bruteforce on ${selectedPlatform}...`);
        simulateBruteforce(selectedPlatform);
        hackStage = 4;
        return;
      }

      if (input === 'hack') {
        typeOutputLine('> Accessing secure admin zone... Enter Username');
        hackStage = 1;
        return;
      }
      if (input === 'darknet') {
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
      typeOutputLine('> Tunnel established.  Accessing .onion services...');
      selectedLogs.forEach((log, i) => {
        setTimeout(() => typeOutputLine(`> 🕸 ${log}`), 600 * (i + 1));
      });
      setTimeout(() => {
        typeOutputLine('> Darknet scan complete. Results stored in temp memory.');
      }, 600 * (selectedLogs.length + 1));
    }, 1000);
  });
  return;
}

      const responses = {
        help: '> Available commands: help, projects, status, clear, resume, skip, sudo, matrix, nuke, redmode',
        projects: '> Eye of Providence, Price Tracker Tool, AI E-Commerce Platform, Group Chat App',
        status: '> Agent Cube is online and monitoring threats.',
        download: '> Resume Download: Click here',
        sudo: '> Permission denied. You are not root.',
        matrix: '> Activating Matrix mode... Permission denied please contact admin',
        nuke: '> Launching in 3... 2... 1... IP Address not in our record , Access Denied, Agent.',
      };

      if (input === 'clear') {
        terminal.innerHTML = '';
      } else if (input === 'skip') {
        typing = false;
        terminal.innerHTML = preText + mainText + '<span class="cursor"></span>';
        asciiEl.textContent = ascii;
      } else if (input === 'resume') {
        typeOutputLine('> Resume Download: ', () => {
          const a = document.createElement('a');
          a.href = 'Qhubaib Resume.pdf';
          a.textContent = 'Click here';
          a.style.color = '#0f0';
          a.download = '';
          terminal.appendChild(a);
        });
      } else if (input === 'redmode') {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#ff0000';
        document.querySelector('.terminal').style.borderLeft = '2px solid #ff0000';
        document.getElementById('commandInput').style.color = '#ff0000';
        document.getElementById('skipBtn').style.color = '#ff0000';
        document.getElementById('skipBtn').style.borderColor = '#ff0000';
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
      asciiEl.textContent = ascii;
    });

    startTypingSequence();

