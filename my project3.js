let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let exams = JSON.parse(localStorage.getItem("exams")) || [];
let sgpas = JSON.parse(localStorage.getItem("sgpas")) || [];
let certificates = JSON.parse(localStorage.getItem("certificates")) || [];
let internships = JSON.parse(localStorage.getItem("internships")) || [];
let checklistState = JSON.parse(localStorage.getItem("checklistState")) || {};

const roleSkills = {
    software: ["C++", "DSA", "OOPs", "DBMS", "Git", "GitHub"],
    web: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git", "Deployment"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "UI Design", "Git"],
    backend: ["JavaScript", "Node.js", "Express", "Database", "API", "Authentication"],
    fullstack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Database"],
    appdev: ["Java", "Kotlin", "Android Studio", "Layouts", "APIs", "Firebase"],
    data: ["Excel", "SQL", "Python", "Pandas", "Power BI", "Data Cleaning"],
    datascientist: ["Python", "Statistics", "Pandas", "Machine Learning", "Visualization", "Scikit-learn"],
    ai: ["Python", "NumPy", "Pandas", "Machine Learning", "Neural Networks", "Model Evaluation"],
    cyber: ["Networking", "Linux", "OWASP", "Cryptography", "Ethical Hacking", "Web Security"],
    cloud: ["Cloud Basics", "AWS/Azure/GCP", "Networking", "IAM", "Deployment", "Monitoring"],
    devops: ["Linux", "Git", "Docker", "CI/CD", "Cloud", "Automation"],
    uiux: ["Figma", "Wireframing", "Typography", "Color Theory", "User Research", "Prototyping"],
    product: ["User Research", "PRD Writing", "Roadmapping", "Analytics", "Communication", "MVP"],
    embedded: ["C", "Microcontrollers", "Arduino", "Sensors", "UART/SPI/I2C", "Embedded C"],
    vlsi: ["Digital Electronics", "Verilog", "CMOS", "Timing Analysis", "EDA Tools", "Logic Design"],
    iot: ["Arduino", "ESP32", "Sensors", "MQTT", "Cloud IoT", "IoT Dashboard"],
    business: ["Excel", "SQL", "Power BI", "Requirement Analysis", "Communication", "Business Metrics"],
    qa: ["Manual Testing", "Test Cases", "Bug Reporting", "Postman", "Selenium", "Automation Basics"],
    network: ["Networking", "OSI Model", "Subnetting", "Routers", "Switches", "Troubleshooting"],
    freelancer: ["Portfolio", "Communication", "Client Handling", "Proposal Writing", "Pricing", "Delivery"],
    higherstudies: ["Core Subjects", "Aptitude", "Previous Papers", "Mock Tests", "SOP/Resume", "Consistency"]
};

const checklistItems = {
    software: ["Add GitHub profile", "Add 2 software projects", "Mention DSA practice", "Add internship/application experience", "Add certificates", "Write strong resume summary"],
    web: ["Add portfolio website", "Add 3 frontend projects", "Add GitHub links", "Mention responsive design", "Add deployment links", "Improve resume summary"],
    frontend: ["Add React project", "Add UI screenshots", "Add GitHub profile", "Add portfolio link", "Mention responsive design", "Add internship applications"],
    backend: ["Add API project", "Mention database skills", "Add GitHub repository", "Add authentication project", "Write technical summary", "Add internship applications"],
    fullstack: ["Add full stack project", "Add frontend deployment", "Add backend deployment", "Add database skills", "Add GitHub links", "Improve resume summary"],
    appdev: ["Add Android project", "Add APK/demo link", "Mention APIs", "Add GitHub repository", "Add UI screenshots", "Apply for app internships"],
    data: ["Add SQL project", "Add Power BI dashboard", "Mention Excel skills", "Add Python analysis project", "Add GitHub/Kaggle link", "Improve resume summary"],
    datascientist: ["Add ML project", "Mention Python libraries", "Add model evaluation", "Add notebook link", "Add visualization project", "Apply for DS internships"],
    ai: ["Add ML project", "Mention Python and Pandas", "Add AI-inspired project", "Add GitHub notebook", "Mention model evaluation", "Apply for AI internships"],
    cyber: ["Add cybersecurity notes", "Mention networking basics", "Add ethical lab practice", "Add security awareness project", "Add Linux skills", "Apply for cyber internships"],
    cloud: ["Add cloud deployment project", "Mention AWS/Azure/GCP", "Add GitHub documentation", "Mention IAM basics", "Add certification if available", "Apply for cloud internships"],
    devops: ["Add Docker project", "Mention Linux skills", "Add CI/CD workflow", "Add cloud deployment", "Add GitHub repo", "Apply for DevOps internships"],
    uiux: ["Add Figma portfolio", "Add 2 case studies", "Mention wireframing", "Add prototype link", "Improve visual resume", "Apply for UI/UX internships"],
    product: ["Add product case study", "Write PRD sample", "Add roadmap example", "Mention analytics", "Show communication skills", "Apply for PM internships"],
    embedded: ["Add Arduino project", "Mention C programming", "Add circuit diagram", "Mention sensors", "Add GitHub documentation", "Apply for embedded internships"],
    vlsi: ["Mention Verilog", "Add simulation screenshots", "Add digital electronics project", "Mention EDA tools", "Add technical notes", "Apply for VLSI internships"],
    iot: ["Add IoT project", "Mention ESP32/Arduino", "Add sensor data dashboard", "Mention MQTT/cloud", "Add GitHub documentation", "Apply for IoT internships"],
    business: ["Add dashboard project", "Mention Excel and SQL", "Add business case study", "Mention communication skills", "Add Power BI project", "Apply for BA internships"],
    qa: ["Add test case document", "Mention bug reporting", "Add Postman testing", "Mention Selenium basics", "Add QA project", "Apply for QA internships"],
    network: ["Mention networking basics", "Add subnetting practice", "Add network notes", "Mention troubleshooting", "Add certification if available", "Apply for network internships"],
    freelancer: ["Add portfolio link", "Add service description", "Add sample projects", "Mention client communication", "Add testimonials if any", "Create LinkedIn posts"],
    higherstudies: ["Add target exam", "Prepare core subjects", "Track mock tests", "Prepare SOP/resume", "Collect documents", "Create study schedule"]
};

const roadmaps = {
    software: [
        ["Month 1", "Learn C++ or Java basics", "Practice arrays and strings", "Solve 20 beginner DSA problems"],
        ["Month 2", "Learn OOPs", "Practice recursion", "Start Git and GitHub"],
        ["Month 3", "Learn linked lists and stacks", "Build one web project", "Upload work to GitHub"],
        ["Month 4", "Learn DBMS and SQL", "Practice LeetCode easy problems", "Improve portfolio"],
        ["Month 5", "Learn OS and CN basics", "Apply for internships", "Create a strong resume"],
        ["Month 6", "Mock interviews", "Revise DSA", "Apply daily on LinkedIn and Internshala"]
    ],
    web: [
        ["Month 1", "Master HTML and CSS", "Build landing pages", "Learn responsive design"],
        ["Month 2", "Learn JavaScript basics", "Practice DOM manipulation", "Build mini projects"],
        ["Month 3", "Build Student Life OS", "Learn Local Storage", "Add dashboard features"],
        ["Month 4", "Learn React basics", "Build reusable components", "Create portfolio website"],
        ["Month 5", "Learn APIs and JSON", "Build API-based project", "Deploy on Vercel"],
        ["Month 6", "Improve UI/UX", "Apply for frontend internships", "Practice interview questions"]
    ],
    frontend: [
        ["Month 1", "Learn HTML, CSS and Flexbox", "Practice responsive layouts", "Build landing pages"],
        ["Month 2", "Learn JavaScript DOM", "Build interactive components", "Practice events"],
        ["Month 3", "Learn React basics", "Build reusable components", "Use props and state"],
        ["Month 4", "Build a portfolio website", "Deploy projects", "Improve UI design"],
        ["Month 5", "Learn APIs", "Build API-based frontend project", "Add GitHub links"],
        ["Month 6", "Apply for frontend internships", "Practice interview questions", "Improve LinkedIn"]
    ],
    backend: [
        ["Month 1", "Learn JavaScript or Python", "Understand server-side logic", "Practice functions"],
        ["Month 2", "Learn Node.js or Flask", "Create routes", "Build basic APIs"],
        ["Month 3", "Learn databases", "Practice SQL or MongoDB", "Connect database to backend"],
        ["Month 4", "Learn authentication", "Build login system", "Test APIs using Postman"],
        ["Month 5", "Build backend project", "Deploy backend", "Write API documentation"],
        ["Month 6", "Apply for backend internships", "Practice backend interviews", "Improve resume"]
    ],
    fullstack: [
        ["Month 1", "Learn HTML, CSS and JavaScript", "Practice Git", "Build mini projects"],
        ["Month 2", "Learn React", "Create components", "Build frontend dashboard"],
        ["Month 3", "Learn Node.js and Express", "Create APIs", "Understand frontend-backend flow"],
        ["Month 4", "Learn database integration", "Add authentication", "Connect full stack app"],
        ["Month 5", "Build full stack project", "Deploy frontend and backend", "Write README"],
        ["Month 6", "Apply for full stack internships", "Practice interviews", "Improve portfolio"]
    ],
    appdev: [
        ["Month 1", "Learn Java or Kotlin basics", "Install Android Studio", "Build simple UI"],
        ["Month 2", "Learn activities and layouts", "Practice navigation", "Build calculator app"],
        ["Month 3", "Learn storage and permissions", "Build notes app", "Practice debugging"],
        ["Month 4", "Learn APIs in Android", "Use RecyclerView", "Build weather/news app"],
        ["Month 5", "Build complete Android project", "Create APK", "Upload to GitHub"],
        ["Month 6", "Apply for app internships", "Prepare resume", "Practice Android interview basics"]
    ],
    data: [
        ["Month 1", "Learn Excel basics", "Understand charts", "Practice data cleaning"],
        ["Month 2", "Learn SQL basics", "Practice joins", "Solve SQL questions"],
        ["Month 3", "Learn Python basics", "Start Pandas", "Analyze small datasets"],
        ["Month 4", "Learn Power BI", "Create dashboards", "Practice storytelling with data"],
        ["Month 5", "Build 2 data projects", "Upload to GitHub", "Write project summaries"],
        ["Month 6", "Apply for data analyst internships", "Prepare resume", "Practice interview questions"]
    ],
    datascientist: [
        ["Month 1", "Learn Python basics", "Practice NumPy and Pandas", "Understand data cleaning"],
        ["Month 2", "Learn statistics basics", "Practice visualization", "Use Matplotlib"],
        ["Month 3", "Learn machine learning basics", "Understand regression and classification", "Build ML mini project"],
        ["Month 4", "Learn model evaluation", "Practice Scikit-learn", "Build prediction project"],
        ["Month 5", "Create data science portfolio", "Write project reports", "Upload notebooks"],
        ["Month 6", "Apply for data science internships", "Practice ML basics", "Improve resume"]
    ],
    ai: [
        ["Month 1", "Learn Python basics", "Practice NumPy and Pandas", "Understand data preprocessing"],
        ["Month 2", "Learn statistics basics", "Understand supervised learning", "Practice datasets"],
        ["Month 3", "Learn ML algorithms", "Build classification project", "Evaluate models"],
        ["Month 4", "Explore neural networks", "Learn AI tools", "Build AI-inspired project"],
        ["Month 5", "Build ML portfolio projects", "Document results", "Upload to GitHub"],
        ["Month 6", "Apply for AI internships", "Prepare ML basics", "Improve LinkedIn"]
    ],
    cyber: [
        ["Month 1", "Learn networking basics", "Understand IP, DNS and HTTP", "Study Linux commands"],
        ["Month 2", "Learn cybersecurity fundamentals", "Study threats and vulnerabilities", "Practice safe labs"],
        ["Month 3", "Learn web security", "Study OWASP Top 10", "Understand authentication"],
        ["Month 4", "Learn cryptography basics", "Practice ethical labs", "Document your learning"],
        ["Month 5", "Build security awareness project", "Create cybersecurity notes portfolio", "Improve resume"],
        ["Month 6", "Apply for cybersecurity internships", "Practice interviews", "Continue labs ethically"]
    ],
    cloud: [
        ["Month 1", "Learn cloud basics", "Understand AWS/Azure/GCP", "Study compute and storage"],
        ["Month 2", "Learn networking basics", "Understand cloud databases", "Practice simple deployments"],
        ["Month 3", "Learn IAM and security", "Deploy a static website", "Document steps"],
        ["Month 4", "Learn serverless basics", "Practice cloud projects", "Understand monitoring"],
        ["Month 5", "Build cloud portfolio project", "Learn certification basics", "Update resume"],
        ["Month 6", "Apply for cloud internships", "Practice cloud interview questions", "Improve LinkedIn"]
    ],
    devops: [
        ["Month 1", "Learn Linux basics", "Practice terminal commands", "Understand Git"],
        ["Month 2", "Learn GitHub workflows", "Understand CI/CD basics", "Practice deployment"],
        ["Month 3", "Learn Docker basics", "Containerize a simple app", "Understand images"],
        ["Month 4", "Learn cloud basics", "Deploy an app", "Understand monitoring"],
        ["Month 5", "Build DevOps mini project", "Write documentation", "Practice automation"],
        ["Month 6", "Apply for DevOps internships", "Prepare interview basics", "Improve resume"]
    ],
    uiux: [
        ["Month 1", "Learn UI/UX basics", "Study color and typography", "Analyze good app designs"],
        ["Month 2", "Learn Figma basics", "Create wireframes", "Practice layouts"],
        ["Month 3", "Design mobile app screens", "Create dashboard UI", "Build case study"],
        ["Month 4", "Learn user research basics", "Improve accessibility", "Practice design systems"],
        ["Month 5", "Create portfolio case studies", "Redesign existing apps", "Share work online"],
        ["Month 6", "Apply for UI/UX internships", "Practice design interviews", "Improve portfolio"]
    ],
    product: [
        ["Month 1", "Learn product management basics", "Understand users and problems", "Study product examples"],
        ["Month 2", "Learn requirement writing", "Create user personas", "Practice feature planning"],
        ["Month 3", "Learn wireframing basics", "Create product roadmap", "Write PRD document"],
        ["Month 4", "Study metrics and analytics", "Understand MVP", "Analyze popular apps"],
        ["Month 5", "Build product case studies", "Create portfolio", "Improve communication"],
        ["Month 6", "Apply for product internships", "Practice case interviews", "Network on LinkedIn"]
    ],
    embedded: [
        ["Month 1", "Learn C programming", "Revise basic electronics", "Understand microcontrollers"],
        ["Month 2", "Learn Arduino basics", "Practice sensors and LEDs", "Build small circuits"],
        ["Month 3", "Learn embedded C", "Understand GPIO and timers", "Practice debugging"],
        ["Month 4", "Learn UART, SPI and I2C", "Connect sensors with microcontroller", "Build mini embedded project"],
        ["Month 5", "Build complete embedded project", "Document circuit and code", "Upload to GitHub"],
        ["Month 6", "Apply for embedded internships", "Revise ECE basics", "Prepare technical resume"]
    ],
    vlsi: [
        ["Month 1", "Revise digital electronics", "Learn logic gates", "Practice number systems"],
        ["Month 2", "Learn Verilog basics", "Practice combinational circuits", "Simulate small designs"],
        ["Month 3", "Learn sequential circuits", "Practice flip-flops and counters", "Build mini Verilog projects"],
        ["Month 4", "Understand CMOS basics", "Study timing concepts", "Learn EDA tool basics"],
        ["Month 5", "Build VLSI project portfolio", "Document simulations", "Prepare technical notes"],
        ["Month 6", "Apply for VLSI internships", "Practice core ECE questions", "Improve resume"]
    ],
    iot: [
        ["Month 1", "Learn electronics basics", "Understand sensors", "Practice Arduino"],
        ["Month 2", "Learn WiFi modules", "Use ESP8266 or ESP32", "Build sensor project"],
        ["Month 3", "Learn IoT communication", "Understand MQTT basics", "Send data to cloud"],
        ["Month 4", "Build IoT dashboard", "Connect hardware to web app", "Practice data logging"],
        ["Month 5", "Build complete IoT project", "Document hardware and software", "Upload to GitHub"],
        ["Month 6", "Apply for IoT internships", "Prepare ECE basics", "Improve portfolio"]
    ],
    business: [
        ["Month 1", "Learn Excel basics", "Understand business metrics", "Practice data cleaning"],
        ["Month 2", "Learn SQL basics", "Practice simple queries", "Analyze datasets"],
        ["Month 3", "Learn Power BI or Tableau", "Create dashboards", "Practice storytelling"],
        ["Month 4", "Learn requirement analysis", "Write business reports", "Study case studies"],
        ["Month 5", "Build analytics portfolio", "Create project summaries", "Improve communication"],
        ["Month 6", "Apply for business analyst internships", "Practice interview questions", "Update resume"]
    ],
    qa: [
        ["Month 1", "Learn software testing basics", "Understand test cases", "Practice manual testing"],
        ["Month 2", "Learn bug reporting", "Use Jira basics", "Write test scenarios"],
        ["Month 3", "Learn API testing", "Use Postman", "Practice validation"],
        ["Month 4", "Learn automation basics", "Start Selenium basics", "Practice scripts"],
        ["Month 5", "Build QA portfolio project", "Document test cases", "Upload reports"],
        ["Month 6", "Apply for QA internships", "Practice testing interviews", "Improve resume"]
    ],
    network: [
        ["Month 1", "Learn networking basics", "Understand IP, DNS and TCP", "Study OSI model"],
        ["Month 2", "Practice subnetting", "Understand routers and switches", "Use simulation tools"],
        ["Month 3", "Learn network security basics", "Understand firewalls", "Practice troubleshooting"],
        ["Month 4", "Study cloud networking basics", "Learn VPN concepts", "Document notes"],
        ["Month 5", "Build networking notes portfolio", "Practice labs", "Prepare resume"],
        ["Month 6", "Apply for network internships", "Practice interview questions", "Revise basics"]
    ],
    freelancer: [
        ["Month 1", "Choose one skill", "Build 2 sample projects", "Create portfolio"],
        ["Month 2", "Learn client communication", "Create service packages", "Improve LinkedIn"],
        ["Month 3", "Join freelancing platforms", "Apply to small gigs", "Practice proposals"],
        ["Month 4", "Deliver small projects", "Collect feedback", "Improve pricing"],
        ["Month 5", "Build personal brand", "Post work online", "Create testimonials"],
        ["Month 6", "Scale your services", "Improve portfolio", "Maintain client relationships"]
    ],
    higherstudies: [
        ["Month 1", "Choose target exam or country", "Understand syllabus", "Make study plan"],
        ["Month 2", "Revise core subjects", "Practice aptitude", "Start notes"],
        ["Month 3", "Solve previous year questions", "Track weak areas", "Improve consistency"],
        ["Month 4", "Take mock tests", "Revise formulas", "Improve accuracy"],
        ["Month 5", "Prepare applications or exam strategy", "Work on SOP/resume if needed", "Continue mocks"],
        ["Month 6", "Final revision", "Apply to programs or exams", "Prepare documents"]
    ]
};

window.onload = function () {
    displayTasks();
    displayExams();
    displaySGPA();
    displayCertificates();
    displayInternships();

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

    updateCareerSystems();
    updateAll();
};

function toggleTheme() {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return alert("Please enter an assignment");
    tasks.push({ text: input.value, completed: false });
    input.value = "";
    saveTasks();
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let checked = tasks[i].completed ? "checked" : "";
        let style = tasks[i].completed ? "text-decoration: line-through;" : "";

        let li = document.createElement("li");
        li.innerHTML =
            "<input type='checkbox' onclick='completeTask(" + i + ")' " + checked + "> " +
            "<span style='" + style + "'>" + tasks[i].text + "</span>" +
            " <button onclick='deleteTask(" + i + ")'>Delete</button>";

        list.appendChild(li);
    }

    updateAll();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addExam() {
    let name = document.getElementById("examName").value;
    let date = document.getElementById("examDate").value;

    if (name === "" || date === "") return alert("Please enter exam name and date");

    exams.push({ name: name, date: date });
    saveExams();

    document.getElementById("examName").value = "";
    document.getElementById("examDate").value = "";

    displayExams();
}

function displayExams() {
    let list = document.getElementById("examList");
    list.innerHTML = "";

    for (let i = 0; i < exams.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = exams[i].name + " - " + exams[i].date +
            " <button onclick='deleteExam(" + i + ")'>Delete</button>";
        list.appendChild(li);
    }

    updateAll();
}

function deleteExam(index) {
    exams.splice(index, 1);
    saveExams();
    displayExams();
}

function saveExams() {
    localStorage.setItem("exams", JSON.stringify(exams));
}

function addSGPA() {
    let semester = document.getElementById("semesterName").value;
    let value = parseFloat(document.getElementById("sgpaInput").value);

    if (semester === "" || isNaN(value)) return alert("Please enter semester and SGPA");
    if (value < 0 || value > 10) return alert("SGPA should be between 0 and 10");

    sgpas.push({ semester: semester, value: value });
    saveSGPA();

    document.getElementById("semesterName").value = "";
    document.getElementById("sgpaInput").value = "";

    displaySGPA();
}

function displaySGPA() {
    let list = document.getElementById("sgpaList");
    list.innerHTML = "";

    for (let i = 0; i < sgpas.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = sgpas[i].semester + " - SGPA: " + sgpas[i].value +
            " <button onclick='deleteSGPA(" + i + ")'>Delete</button>";
        list.appendChild(li);
    }

    updateAll();
}

function deleteSGPA(index) {
    sgpas.splice(index, 1);
    saveSGPA();
    displaySGPA();
}

function saveSGPA() {
    localStorage.setItem("sgpas", JSON.stringify(sgpas));
}

function addCertificate() {
    let name = document.getElementById("certificateName").value;
    let org = document.getElementById("certificateOrg").value;
    let date = document.getElementById("certificateDate").value;

    if (name === "" || org === "" || date === "") return alert("Please enter certificate details");

    certificates.push({ name: name, organization: org, date: date });
    saveCertificates();

    document.getElementById("certificateName").value = "";
    document.getElementById("certificateOrg").value = "";
    document.getElementById("certificateDate").value = "";

    displayCertificates();
}

function displayCertificates() {
    let list = document.getElementById("certificateList");
    list.innerHTML = "";

    for (let i = 0; i < certificates.length; i++) {
        let li = document.createElement("li");
        li.innerHTML =
            certificates[i].name + " - " +
            certificates[i].organization + " - " +
            certificates[i].date +
            " <button onclick='deleteCertificate(" + i + ")'>Delete</button>";
        list.appendChild(li);
    }

    updateAll();
}

function deleteCertificate(index) {
    certificates.splice(index, 1);
    saveCertificates();
    displayCertificates();
}

function saveCertificates() {
    localStorage.setItem("certificates", JSON.stringify(certificates));
}

function addInternship() {
    let company = document.getElementById("companyName").value;
    let role = document.getElementById("internshipRole").value;
    let status = document.getElementById("internshipStatus").value;

    if (company === "" || role === "") return alert("Please enter company and role");

    internships.push({ company: company, role: role, status: status });
    saveInternships();

    document.getElementById("companyName").value = "";
    document.getElementById("internshipRole").value = "";

    displayInternships();
}

function displayInternships() {
    let list = document.getElementById("internshipList");
    list.innerHTML = "";

    for (let i = 0; i < internships.length; i++) {
        let li = document.createElement("li");
        li.innerHTML =
            internships[i].company + " - " +
            internships[i].role + " - " +
            internships[i].status +
            " <button onclick='deleteInternship(" + i + ")'>Delete</button>";
        list.appendChild(li);
    }

    updateAll();
}

function deleteInternship(index) {
    internships.splice(index, 1);
    saveInternships();
    displayInternships();
}

function saveInternships() {
    localStorage.setItem("internships", JSON.stringify(internships));
}

function updateAll() {
    updateDashboard();
    updateCGPA();
    updateProgress();
    updateReadinessScore();
    updateCareerInsights();
}

function updateDashboard() {
    let completed = tasks.filter(task => task.completed).length;

    document.getElementById("pendingCount").innerText = tasks.length - completed;
    document.getElementById("completedCount").innerText = completed;
    document.getElementById("examCount").innerText = exams.length;
    document.getElementById("certificateCount").innerText = certificates.length;
    document.getElementById("internshipCount").innerText = internships.length;
}

function updateCGPA() {
    if (sgpas.length === 0) {
        document.getElementById("cgpaResult").innerText = "0";
        return;
    }

    let total = 0;
    for (let i = 0; i < sgpas.length; i++) {
        total += sgpas[i].value;
    }

    document.getElementById("cgpaResult").innerText = (total / sgpas.length).toFixed(2);
}

function updateProgress() {
    let completed = tasks.filter(task => task.completed).length;
    let percent = tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("progressText").innerText = percent + "% Completed";
}

function getChecklistItems() {
    let goal = document.getElementById("goalSelect").value;

    return checklistItems[goal] || [
        "Add GitHub profile",
        "Add 2 relevant projects",
        "Mention key skills",
        "Add internship/application experience",
        "Add certificates",
        "Write strong resume summary"
    ];
}

function getChecklistScore() {
    let goal = document.getElementById("goalSelect").value;
    let items = getChecklistItems();
    let completed = 0;

    for (let i = 0; i < items.length; i++) {
        if (checklistState[goal + "_" + i]) completed++;
    }

    return Math.round((completed / items.length) * 40);
}

function updateReadinessScore() {
    let score = 0;
    let completedTasks = tasks.filter(task => task.completed).length;

    score += Math.min(completedTasks * 3, 15);
    score += Math.min(certificates.length * 5, 15);
    score += Math.min(internships.length * 10, 20);
    score += getChecklistScore();

    if (sgpas.length > 0) {
        let cgpa = parseFloat(document.getElementById("cgpaResult").innerText);
        score += Math.min(cgpa, 10);
    }

    score = Math.min(Math.round(score), 100);

    document.getElementById("readinessScore").innerText = score + "%";

    let circle = document.querySelector(".score-circle");
    circle.style.background =
        "conic-gradient(#6366f1 " + (score * 3.6) + "deg, #e5e7eb 0deg)";

    if (score < 40) {
        document.getElementById("readinessText").innerText =
            "Your profile needs improvement. Start with checklist items and one strong project.";
    } else if (score < 75) {
        document.getElementById("readinessText").innerText =
            "Good progress. Complete more checklist items and apply for internships.";
    } else {
        document.getElementById("readinessText").innerText =
            "Excellent progress. Your profile is becoming placement-ready.";
    }
}

function updateCareerSystems() {
    renderChecklist();
    analyzeSkillGap();
    updateCareerInsights();
    updateReadinessScore();
}

function renderChecklist() {
    let goal = document.getElementById("goalSelect").value;
    let box = document.getElementById("placementChecklist");
    let items = getChecklistItems();

    box.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let checked = checklistState[goal + "_" + i] ? "checked" : "";

        let div = document.createElement("div");
        div.className = "checklist-item";

        div.innerHTML =
            "<input type='checkbox' " + checked + " onchange='toggleChecklistItem(\"" + goal + "\", " + i + ")'>" +
            "<label>" + items[i] + "</label>";

        box.appendChild(div);
    }
}

function toggleChecklistItem(goal, index) {
    let key = goal + "_" + index;
    checklistState[key] = !checklistState[key];

    localStorage.setItem("checklistState", JSON.stringify(checklistState));

    updateReadinessScore();
    updateCareerInsights();
}

function analyzeSkillGap() {
    let input = document.getElementById("skillInput");
    let result = document.getElementById("skillResult");

    if (!input || !result) return;

    let goal = document.getElementById("goalSelect").value;
    let requiredSkills = roleSkills[goal] || roleSkills.software;

    let currentSkills = input.value
        .split(",")
        .map(skill => skill.trim().toLowerCase())
        .filter(skill => skill !== "");

    let haveSkills = [];
    let missingSkills = [];

    for (let i = 0; i < requiredSkills.length; i++) {
        let skill = requiredSkills[i];

        if (currentSkills.includes(skill.toLowerCase())) {
            haveSkills.push(skill);
        } else {
            missingSkills.push(skill);
        }
    }

    result.innerHTML =
        "<div class='skill-card'><h3>Skills You Have</h3>" +
        (haveSkills.length ? haveSkills.map(skill => "<p>✅ " + skill + "</p>").join("") : "<p>No matching skills found yet.</p>") +
        "</div>" +

        "<div class='skill-card'><h3>Missing Skills</h3>" +
        (missingSkills.length ? missingSkills.map(skill => "<p>❌ " + skill + "</p>").join("") : "<p>Great! You covered all listed skills.</p>") +
        "</div>" +

        "<div class='skill-card'><h3>Recommended Next Step</h3><p>" +
        (missingSkills.length ? "Start with " + missingSkills[0] + " this week." : "Start applying for internships and building projects.") +
        "</p></div>";
}

function updateCareerInsights() {
    let goalSelect = document.getElementById("goalSelect");
    let insights = document.getElementById("careerInsightsText");

    if (!goalSelect || !insights) return;

    let goalText = goalSelect.options[goalSelect.selectedIndex].text;
    let completedTasks = tasks.filter(task => task.completed).length;
    let checklistScore = getChecklistScore();

    insights.innerHTML =
        "<p><strong>Current Goal:</strong> " + goalText + "</p>" +
        "<p><strong>Completed Tasks:</strong> " + completedTasks + "</p>" +
        "<p><strong>Certificates:</strong> " + certificates.length + "</p>" +
        "<p><strong>Internship Applications:</strong> " + internships.length + "</p>" +
        "<p><strong>Checklist Contribution:</strong> " + checklistScore + "/40</p>" +
        "<p><strong>Next Recommended Action:</strong> " + getNextAction() + "</p>";
}

function getNextAction() {
    let goal = document.getElementById("goalSelect").value;
    let items = getChecklistItems();

    for (let i = 0; i < items.length; i++) {
        if (!checklistState[goal + "_" + i]) {
            return items[i];
        }
    }

    if (internships.length === 0) return "Apply for at least 3 internships this week.";
    if (certificates.length < 2) return "Add one relevant certificate to strengthen your profile.";

    return "Keep practicing and update your portfolio regularly.";
}

function generateRoadmap() {
    let branch = document.getElementById("branchSelect").value;
    let goal = document.getElementById("goalSelect").value;
    let roadmapResult = document.getElementById("roadmapResult");

    let selectedRoadmap = roadmaps[goal] || roadmaps.software;

    roadmapResult.innerHTML = "";

    let goalText = document.getElementById("goalSelect").options[document.getElementById("goalSelect").selectedIndex].text;

    let intro = document.createElement("div");
    intro.className = "month-card";
    intro.innerHTML =
        "<h3>Your Roadmap</h3>" +
        "<p><strong>Branch:</strong> " + branch + "</p>" +
        "<p><strong>Goal:</strong> " + goalText + "</p>" +
        "<p><strong>Duration:</strong> 6 Months</p>";

    roadmapResult.appendChild(intro);

    for (let i = 0; i < selectedRoadmap.length; i++) {
        let card = document.createElement("div");
        card.className = "month-card";

        card.innerHTML =
            "<h3>" + selectedRoadmap[i][0] + "</h3>" +
            "<p>✅ " + selectedRoadmap[i][1] + "</p>" +
            "<p>✅ " + selectedRoadmap[i][2] + "</p>" +
            "<p>✅ " + selectedRoadmap[i][3] + "</p>";

        roadmapResult.appendChild(card);
    }

    updateCareerSystems();
}