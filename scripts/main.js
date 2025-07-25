const project_data = {
    real_time_stock: {
        title: "Real-Time Stock Analyzer",
        desc: "A scalable real-time data analytics pipeline. It is designed to process high-frequency financial data and detect anomaly prices in real-time.",
        tech: ["AWS", "Apache Flink", "AWS Managed Flink", "Kinesis", "Amazon S3"],
        img: "./images/real_time_stock.png",
        video: "",
        github: "",
    },
    load_balancer: {
        title: "AWS Dynamic Infra",
        desc: "This project builds a cost-efficient, scalable, and highly available cloud infrastructure on AWS, capable of automatically adjusting to traffic demands using Elastic Load Balancing(ELB) and Auto Scaling.It minimizes manual intervention while ensuring optimal performance under varying loads, making it ideal for production - grade applications.",
        tech: ["AWS", "Load Balancer", "Security Group", "Amazon EC2"],
        img: "./images/load_balancer.jpg",
        video: "",
        github: "",
    },
    chatbot: {
        title: "AWS Pathfinding Chatbot",
        desc: "This project implements an intelligent chatbot system using AWS Lex v2 and AWS Lambda, capable of answering user queries about the shortest path between two cities through natural language input. It showcases seamless integration of cloud services for conversational AI, graph-based computation, and persistent data storage.",
        tech: ["AWS", "AWS Lex v2", "AWS Lambda"],
        img: "./images/chatbot_2.jpg",
        video: "",
        github: "",
    },
    terrain: {
        title: "Terrain Simulator",
        desc: "This project showcases a custom CPU-GPU rendering pipeline for generating and visualizing a realistic 3D terrain. The terrain is rendered with Blinn-Phong shading to simulate natural lighting and surface details. Users can interact with the environment through 'drive' and 'fly' modes, providing immersive navigation. Additionally, procedural erosion effects are implemented to simulate natural terrain transformation over time.",
        tech: ["JavaScript", "WebGL", "CPU-GPU pipeline", "Blinn-Phong"],
        img: "./images/terrain_2.jpg",
        video: "https://youtu.be/P-eXagOgGXw",
        github: "",
    },
    obj: {
        title: "3D Model Generator",
        desc: "This project focuses on implementing texture mapping in a 3D rendering pipeline. It allows users to project custom images onto any 3D model surface, enabling detailed surface appearance and realism. The system handles coordinate mapping and interpolation to ensure accurate texture placement on complex geometries.",
        tech: ["JavaScript", "WebGL", "CPU-GPU Pipeline", "Blinn-Phong", "Texture Mapping"],
        img: "./images/obj_2.jpg",
        video: "https://youtu.be/uHb1QbmsHDE",
        github: "",
    },
    spheres: {
        title: "Collision Simulator",
        desc: "This project simulates elastic collisions between spheres based on the principles of kinetic energy conservation and Newtonian mechanics. The motion and collision responses are computed using Euler’s method for numerical integration, enabling a visually accurate and physically plausible animation of dynamic sphere interactions.",
        tech: ["JavaScript", "WebGL", "CPU-GPU Pipeline", "Blinn-Phong", "Euler's Method"],
        img: "./images/spheres_2.jpg",
        video: "https://youtu.be/b2m1NF_2YFY",
        github: "",
    },
    textures: {
        title: "Rasterizer",
        desc: "This project implements a basic rasterization pipeline using the Digital Differential Analyzer (DDA) algorithm to render 2D graphics. The system reads geometric and color data from custom-formatted .txt files, processes them through the rasterization pipeline, and outputs the final result as .png images.",
        tech: ["Python", "CPU-GPU Pipeline", "DDA Algorithm"],
        img: "./images/rast_2.png",
        video: "",
        github: "",
    },
    weather_app: {
        title: "Smart Weather Mobile App",
        desc: "A feature-rich mobile application that provides a personalized user experience through user authentication, dynamic theming, and real-time weather updates. The app integrates the Google Maps API to offer location-based functionalities and utilizes a Gemini model to enhance intelligent user interactions.",
        tech: ["Android Studio(Java)", "Gemini", "Google Maps", "Unit Test"],
        img: "./images/weather_app_2.jpg",
        video: "https://youtu.be/kSOcKqdvW6k",
        github: "",
    },
    todo_list: {
        title: "Todo List",
        desc: "This full-stack web application was developed using React.js for the front-end and Express.js for the back-end. It integrates MongoDB as the primary database, connected through a RESTful API architecture. The project is deployed on Render.com with continuous integration (CI) to ensure reliable development and deployment workflows.",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "RESTful API", "Deployed(CI/CD)"],
        img: "./images/todo_list_2.jpg",
        video: "",
        github: "",
    },
    task_api: {
        title: "Task Management API",
        desc: "This project delivers a robust RESTful API for task and user management, designed as the backend for a productivity/todo application. Built with Node.js, Express, and MongoDB (via Mongoose), the API supports full CRUD operations on users and tasks with advanced query capabilities including filtering, sorting, pagination, field selection, and counting.",
        tech: ["MongoDB", "Mongoose", "Express.js", "Node.js", "RESTful API"],
        img: "./images/task_api_2.jpg",
        video: "",
        github: "",
    },
    pokemon: {
        title: "Pokémon Encyclopedia",
        desc: "This project is a responsive Pokémon encyclopedia built as a single-page application using React and TypeScript. It enables users to browse, search, and explore detailed Pokémon information fetched from a public RESTful API. The application emphasizes performance, accessibility, and maintainable code architecture while delivering a smooth and interactive user experience.",
        tech: ["TypeScript", "React", "RESTful API"],
        img: "./images/pokemon.jpg",
        video: "https://youtu.be/QEQtvMIsojg",
        github: "",
    },
    academic_explorer: {
        title: "Academic Explorer",
        desc: "Academic Research Explorer is a full-stack data exploration platform designed to help university students discover potential research advisors and assist faculty in analyzing research trends and collaboration opportunities. The application integrates MySQL, MongoDB, and Neo4j via RESTful APIs, offering a unified interface for querying structured, semi-structured, and graph-based academic data. Built with Dash and Flask, the app provides six interactive widgets that enable users to search top universities, explore influential publications, track keyword trends over time, identify key faculty in specific domains, and manage a personalized list of favorite professors.",
        tech: ["Python", "Flask", "Dash", "MySQL", "MongoDB", "Neo4j", "RESTful API"],
        img: "./images/academic_explorer.png",
        video: "https://youtu.be/9M2eCvHyTOY",
        github: "",
    },
}


function openModal(element) {
    const projectId = element.dataset.projectId;
    const data = project_data[projectId];

    if (data) {
        document.getElementById("modalTitle").textContent = data.title;
        document.getElementById("modalDesc").textContent = data.desc;

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

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.classList.remove("modal-open");
}

// closeModal when click the space outside the modal
window.onclick = function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
};
