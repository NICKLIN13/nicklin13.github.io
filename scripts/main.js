const project_data = {
    real_time_stock: {
        title: "Real-Time Stock Analyzer",
        desc: `Designed a real-time financial analytics system using <strong>Apache Flink</strong> and <strong>AWS Managed Flink</strong>, capable of ingesting and analyzing high-frequency data from <strong>Kinesis Data Streams</strong> to detect <strong>price anomalies</strong> and deliver live insights.<br><br>
                <ul>
                    <li>Enabled <strong>real-time processing</strong> for financial market data with millisecond-level latency.</li>
                    <li>Persisted processed results to <strong>Amazon S3</strong> for historical storage and batch analytics.</li>
                    <li>Integrated interactive <strong>data visualization</strong> dashboards to present real-time insights.</li>
                    <li>Optimized for scalability and <strong>fault-tolerance</strong> to ensure consistent availability.</li>
                </ul>`,
        tech: ["AWS", "Apache Flink", "AWS Managed Flink", "Kinesis", "Amazon S3"],
        img: "./images/real_time_stock.png",
        video: "",
        github: "",
    },
    load_balancer: {
        title: "AWS Dynamic Infra",
        desc: `Designed a cost-efficient, scalable, and highly available cloud infrastructure on <strong>AWS</strong> for production-grade applications.<br><br>
                <ul>
                    <li>Implemented <strong>Elastic Load Balancing (ELB)</strong> and <strong>Auto Scaling</strong> to automatically adapt to traffic changes.</li>
                    <li>Configured <strong>VPC routing</strong>, <strong>subnets</strong>, and <strong>security groups</strong> to control network flow and ensure secure access.</li>
                    <li>Minimized manual intervention through infrastructure automation and monitoring.</li>
                    <li>Ensured high availability and optimal performance under variable loads.</li>
                </ul>`,
        tech: ["AWS", "Load Balancer", "Security Group", "Amazon EC2", "VPC", "Subnets"],
        img: "./images/load_balancer.jpg",
        video: "",
        github: "",
    },
    chatbot: {
        title: "AWS Pathfinding Chatbot",
        desc: `Built an intelligent chatbot system using <strong>AWS Lex v2</strong> and <strong>AWS Lambda</strong> that understands natural language queries to find the shortest path between cities and responds to users.<br><br>
                <ul>
                    <li>Enabled users to communicate with the system through natural human language.</li>
                    <li>Processed graph-based shortest path calculations in real time via Lambda functions.</li>
                    <li>Integrated with <strong>DynamoDB</strong> for persistent data storage.</li>
                    <li>Demonstrated seamless orchestration of AWS cloud services for conversational AI.</li>
                    <li>Delivered an intuitive and responsive user experience through NLP-powered interactions.</li>
                </ul>`,
        tech: ["AWS", "AWS Lex v2", "AWS Lambda", "DynamoDB"],
        img: "./images/chatbot_2.jpg",
        video: "",
        github: "",
    },
    terrain: {
        title: "Terrain Simulator",
        desc: `Developed a custom CPU-GPU rendering pipeline for realistic 3D terrain visualization using <strong>JavaScript</strong> and <strong>Blinn-Phong</strong> shading.<br><br>
                <ul>
                    <li>Rendered natural lighting and surface details with Blinn-Phong shading.</li>
                    <li>Implemented interactive <strong>'drive' and 'fly'</strong> modes for terrain exploration.</li>
                    <li>Enabled terrain smoothing via user-input parameters to <strong>simulate erosion effects like rainfall</strong>.</li>
                    <li>Rendered <strong>grass and soil textures</strong> based on terrain height for realistic surface differentiation.</li>
                    <li>Used <strong>color mapping</strong> to represent elevation through contour visualization.</li>
                </ul>`,
        tech: ["JavaScript", "WebGL", "CPU-GPU pipeline", "Blinn-Phong"],
        img: "./images/terrain_2.jpg",
        video: "https://youtu.be/P-eXagOgGXw",
        github: "",
    },
    obj: {
        title: "3D Model Generator",
        desc: `Implemented <strong>texture mapping</strong> in a 3D rendering pipeline using <strong>JavaScript</strong> and <strong>WebGL</strong>.<br><br>
                <ul>
                    <li>Projected custom images onto 3D model surfaces for enhanced realism.</li>
                    <li>Handled coordinate mapping and interpolation for accurate texture placement on complex geometries.</li>
                    <li>Implemented <strong>Blinn-Phong shading</strong> and shadows to improve visual effects.</li>
                    <li>Developed a GPU-based rendering pipeline for efficient processing.</li>
                </ul>`,
        tech: ["JavaScript", "WebGL", "CPU-GPU Pipeline", "Blinn-Phong", "Texture Mapping"],
        img: "./images/obj_2.jpg",
        video: "https://youtu.be/uHb1QbmsHDE",
        github: "",
    },
    spheres: {
        title: "Collision Simulator",
        desc: `Simulated elastic collisions between spheres using <strong>JavaScript</strong> and <strong>WebGL</strong>, implementing <strong>Blinn-Phong shading</strong> and shadows for realistic rendering.<br><br>
                <ul>
                    <li>Computed motion and collision responses with Euler’s method for accurate physics simulation.</li>
                    <li>Applied kinetic energy conservation and Newtonian mechanics principles.</li>
                    <li>Created visually plausible animations of dynamic sphere interactions.</li>
                    <li>Integrated shading and lighting models to enhance 3D realism.</li>
                </ul>`,
        tech: ["JavaScript", "WebGL", "CPU-GPU Pipeline", "Blinn-Phong", "Euler's Method"],
        img: "./images/spheres_2.jpg",
        video: "https://youtu.be/b2m1NF_2YFY",
        github: "",
    },
    textures: {
        title: "Rasterizer",
        desc: `Implemented a basic 2D rasterization pipeline using the Digital Differential Analyzer (<strong>DDA</strong>) algorithm with <strong>Python</strong>.<br><br>
                <ul>
                    <li>Processed geometric and color data from custom-formatted .txt files.</li>
                    <li>Leveraged CPU for data preparation and GPU via WebGL for efficient rendering.</li>
                    <li>Generated final outputs as .png images.</li>
                    <li>Focused on bridging software rasterization concepts with modern graphics hardware.</li>
                </ul>`,
        tech: ["Python", "CPU-GPU Pipeline", "DDA Algorithm"],
        img: "./images/rast_2.png",
        video: "",
        github: "",
    },
    weather_app: {
        title: "Smart Weather Mobile App",
        desc: `A feature-rich mobile app developed with <strong>Android Studio</strong> using <strong>Java</strong>, delivering personalized experiences via user authentication, dynamic theming, and real-time weather updates.<br><br>
                <ul>
                    <li>Integrated <strong>Google Maps API</strong> for location-based services.</li>
                    <li>Implemented intelligent user interactions powered by a <strong>Gemini model</strong>.</li>
                    <li>Utilized <strong>LLM</strong> to generate comprehensive unit tests, ensuring robust code quality.</li>
                    <li>Focused on smooth UX with real-time data and customizable themes.</li>
                    <li>Ensured secure authentication and personalized content delivery.</li>
                </ul>`,
        tech: ["Android Studio(Java)", "Gemini", "Google Maps", "Unit Test"],
        img: "./images/weather_app_2.jpg",
        video: "https://youtu.be/kSOcKqdvW6k",
        github: "",
    },
    todo_list: {
        title: "Todo List",
        desc: `A full-stack web application built with <strong>React.js</strong> (frontend), <strong>Express.js</strong> (backend), and <strong>MongoDB</strong> as the database, all connected via a <strong>RESTful API</strong> architecture.<br><br>
                <ul>
                    <li>Implemented end-to-end features across the front-end and back-end.</li>
                    <li>Integrated and structured MongoDB with Mongoose for data modeling.</li>
                    <li>Deployed on <strong>Render.com</strong> with <strong>CI pipelines</strong> to automate testing and deployment.</li>
                    <li>Focused on code reliability, modular structure, and maintainable architecture.</li>
                </ul>`,
        tech: ["MongoDB", "Express.js", "React", "Node.js", "RESTful API", "Deployed(CI/CD)"],
        img: "./images/todo_list_2.jpg",
        video: "",
        github: "",
    },
    task_api: {
        title: "Task Management API",
        desc: `A robust RESTful API backend for a productivity and todo application, built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> (via <strong>Mongoose</strong>).<br><br>
                <ul>
                    <li>Implemented full CRUD functionality for users and tasks.</li>
                    <li>Supported advanced query features: filtering, sorting, pagination, field selection, and counting.</li>
                    <li>Designed scalable endpoints for seamless integration with front-end clients.</li>
                    <li>Focused on performance, code clarity, and maintainability.</li>
                </ul>`,
        tech: ["MongoDB", "Mongoose", "Express.js", "Node.js", "RESTful API"],
        img: "./images/task_api_2.jpg",
        video: "",
        github: "",
    },
    pokemon: {
        title: "Pokémon Encyclopedia",
        desc: `A responsive Pokémon encyclopedia built as a single-page application using <strong>React</strong> and <strong>TypeScript</strong>. It allows users to browse, search, and explore detailed Pokémon information from a public <strong>RESTful API</strong>.<br><br>
                <ul>
                    <li>Implemented smooth search and filtering for over 1000 Pokémon entries.</li>
                    <li>Ensured fast performance and responsive design across devices.</li>
                    <li>Focused on accessibility and clean, maintainable code architecture.</li>
                    <li>Delivered a dynamic and interactive user experience using modern front-end tools.</li>
                </ul>`,
        tech: ["TypeScript", "React", "RESTful API"],
        img: "./images/pokemon.jpg",
        video: "https://youtu.be/QEQtvMIsojg",
        github: "",
    },
    academic_explorer: {
        title: "Academic Explorer",
        desc: `A full-stack data exploration platform that helps university students find potential research advisors and enables faculty to analyze academic trends and collaboration networks.<br><br>
                <ul>
                    <li>Integrated <strong>MySQL, MongoDB, and Neo4j</strong> via <strong>RESTful APIs</strong> to support complex academic queries.</li>
                    <li>Built interactive dashboards with <strong>Flask</strong> and <strong>Plotly Dash</strong>.</li>
                    <li>Implemented 6 key features: search universities, explore publications, visualize keyword trends, identify domain experts, and manage favorite faculty.</li>
                    <li>Improved research discovery by unifying structured, semi-structured, and graph data.</li>
                </ul>`,
        tech: ["Python", "Flask", "Dash", "MySQL", "MongoDB", "Neo4j", "RESTful API"],
        img: "./images/academic_explorer.png",
        video: "https://youtu.be/9M2eCvHyTOY",
        github: "",
    },
}


function openModal(element, event) {
    event.stopPropagation();

    const projectId = element.dataset.projectId;
    const data = project_data[projectId];

    if (data) {
        document.getElementById("modalTitle").textContent = data.title;
        document.getElementById("modalDesc").innerHTML = data.desc;

        const tech_list = document.querySelector("#projectModal .modal-tech-list");
        tech_list.innerHTML = "";

        data.tech.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            tech_list.appendChild(li);
        });

        document.getElementById("modalImg").src = data.img;

        // modal video button
        const video_btn = document.getElementById("modalVideo");
        if (data.video && data.video.trim() !== "") {
            video_btn.href = data.video;
            video_btn.style.display = "inline-block";
        } else {
            video_btn.style.display = "none";
        }

        document.getElementById("modalGithub").href = data.github;
        document.getElementById("projectModal").style.display = "flex";
        document.body.classList.add("modal-open"); // keep body page from being scrolled
        document.querySelector(".modal_content").scrollTop = 0;
    }
}

// addEventListener to all .sub_project_div to openModal()
document.querySelectorAll(".sub_project_div").forEach(div => {
    div.addEventListener("click", function (event) {
        openModal(this, event);
    });
});

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.classList.remove("modal-open");
}

document.addEventListener("click", function (event) {
    const modal = document.getElementById("projectModal");
    const modalContent = document.querySelector(".modal_content");

    if (modal.style.display === "flex" && !modalContent.contains(event.target)) {
        closeModal();
    }
});

function copyEmail() {
    const email = document.getElementById("email_address").innerText;
    navigator.clipboard.writeText(email).then(() => {
        const msg = document.getElementById("copied_msg");
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
        }, 1000);
    });
}

function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// close hamburger after clicking nav button
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('navMenu');
    const links = navMenu.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
});