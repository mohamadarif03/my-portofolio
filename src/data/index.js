import mlPdf from '../assets/certified/dicoding-belajar machine learning untuk pemula.pdf';
import visComPdf from '../assets/certified/dicoding-belajar visualisasi data.pdf';
import pythonPdf from '../assets/certified/dicoding-memulai pemrograman dengan python.pdf';
import golangPdf from '../assets/certified/golang-bootcamp-sanbercode.pdf';

export const projectsData = [
    {
        id: "ai-quiz-generator",
        title: "AI Quiz Generator",
        tag: "Backend",
        description: "A backend service built with Golang that utilizes Gemini AI to analyze PDFs and YouTube transcripts, automatically generating educational quizzes and summaries.",
        features: [
            "PDF and YouTube transcript analysis",
            "Automatic quiz generation with answer keys",
            "Summary extraction from long-form content",
            "RESTful API architecture",
            "Integration with Gemini 1.5 Pro model"
        ],
        projectLink: "https://github.com/mohamadarif03/ai-quiz-generator",
        tech: ["Golang", "Gemini AI", "Rest API"],
        color: "from-primary to-violet-600",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        ],
        issuer: "Self-Project"
    },
    {
        id: "real-time-dashboard",
        title: "Real-time Dashboard",
        tag: "Full-Stack",
        description: "A comprehensive analytic dashboard visualizing streaming data via WebSockets. Features interactive charts, dark mode, and real-time alerts for business intelligence.",
        features: [
            "Real-time data streaming with Socket.io",
            "Interactive charts using Recharts",
            "Dynamic dark/light mode switching",
            "Live alert system for critical metrics",
            "Responsive grid layout"
        ],
        projectLink: "https://dashboard-demo.com",
        tech: ["React", "Node.js", "Socket.io"],
        color: "from-secondary to-cyan-600",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        issuer: "Freelance Client"
    },
    {
        id: "classification-model",
        title: "Classification Model",
        tag: "Data Science",
        description: "Exploration of Decision Tree algorithms for predictive modeling. Includes Python notebooks for data preprocessing, training, and visualizing tree structures.",
        features: [
            "Data preprocessing and cleaning pipelines",
            "Decision Tree and Random Forest implementation",
            "Model performance visualization (Confusion Matrix, ROC)",
            "Hyperparameter tuning analysis",
            "Jupyter notebook walkthroughs"
        ],
        projectLink: "https://colab.research.google.com/",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        color: "from-green-500 to-emerald-600",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1000&auto=format&fit=crop",
        issuer: "University Assignment"
    },
    // Real Certificates keying off existing files
    {
        id: "cert-ml-dicoding",
        title: "Belajar Machine Learning untuk Pemula",
        tag: "Certificate",
        description: "Comprehensive course on machine learning fundamentals using Python. Covered supervised/unsupervised learning, model evaluation, and TensorFlow basics.",
        features: [
            "Supervised Learning Algorithms",
            "Unsupervised Learning Techniques",
            "Model Evaluation Metrics",
            "TensorFlow Implementation"
        ],
        projectLink: "https://www.dicoding.com/certificates/ERZR40001XYV",
        tech: ["Python", "TensorFlow", "Scikit-Learn"],
        color: "from-blue-600 to-indigo-600",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        pdf: mlPdf,
        issuer: "Dicoding Indonesia"
    },
    {
        id: "cert-vis-dicoding",
        title: "Belajar Visualisasi Data",
        tag: "Certificate",
        description: "In-depth course on data visualization principles and tools. Learned effective ways to communicate insights through varying chart types.",
        features: [
            "Data Visualization Principles",
            "Effective Chart Selection",
            "Storytelling with Data",
            "Tool Proficiency"
        ],
        projectLink: "https://www.dicoding.com/",
        tech: ["Data Viz", "Communication"],
        color: "from-purple-500 to-pink-500",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        pdf: visComPdf,
        issuer: "Dicoding Indonesia"
    },
    {
        id: "cert-python-dicoding",
        title: "Memulai Pemrograman Dengan Python",
        tag: "Certificate",
        description: "Foundational Python programming course covering syntax, data structures, control flow, and basic algorithms.",
        features: [
            "Python Syntax & Semantics",
            "Data Structures",
            "Control Flow",
            "Basic Algorithms"
        ],
        projectLink: "https://www.dicoding.com/",
        tech: ["Python", "Programming"],
        color: "from-yellow-500 to-orange-500",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        pdf: pythonPdf,
        issuer: "Dicoding Indonesia"
    },
    {
        id: "cert-golang-sanbercode",
        title: "Golang Bootcamp",
        tag: "Certificate",
        description: "Intensive bootcamp focused on Go language development, covering backend concepts, REST APIs, and concurrency.",
        features: [
            "Go Language Fundamentals",
            "RESTful API Development",
            "Concurrency Patterns",
            "Backend Architecture"
        ],
        projectLink: "https://sanbercode.com/",
        tech: ["Go", "Backend", "API"],
        color: "from-cyan-500 to-blue-500",
        image: "https://images.unsplash.com/photo-1610433306911-37d400262145?q=80&w=1000&auto=format&fit=crop",
        pdf: golangPdf,
        issuer: "Sanbercode"
    }
];

export const certificatesData = [
    {
        title: "Belajar Machine Learning untuk Pemula",
        issuer: "Dicoding Indonesia",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        color: "bg-blue-600",
        overlay: "bg-blue-600/20",
        btnBorder: "border-blue-600/50",
        btnText: "text-white",
        btnHover: "hover:bg-blue-600",
        pdf: mlPdf,
        id: "cert-ml-dicoding",
        verificationLink: "https://www.dicoding.com/certificates/ERZR40001XYV"
    },
    {
        title: "Belajar Visualisasi Data",
        issuer: "Dicoding Indonesia",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        color: "bg-purple-500",
        overlay: "bg-purple-500/20",
        btnBorder: "border-purple-500/50",
        btnText: "text-white",
        btnHover: "hover:bg-purple-500",
        pdf: visComPdf,
        id: "cert-vis-dicoding",
        verificationLink: "https://www.dicoding.com/"
    },
    {
        title: "Memulai Pemrograman Dengan Python",
        issuer: "Dicoding Indonesia",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        color: "bg-yellow-500",
        overlay: "bg-yellow-500/20",
        btnBorder: "border-yellow-500/50",
        btnText: "text-white",
        btnHover: "hover:bg-yellow-500",
        pdf: pythonPdf,
        id: "cert-python-dicoding",
        verificationLink: "https://www.dicoding.com/"
    },
    {
        title: "Golang Bootcamp",
        issuer: "Sanbercode",
        image: "https://images.unsplash.com/photo-1610433306911-37d400262145?q=80&w=1000&auto=format&fit=crop",
        color: "bg-cyan-500",
        overlay: "bg-cyan-500/20",
        btnBorder: "border-cyan-500/50",
        btnText: "text-white",
        btnHover: "hover:bg-cyan-500",
        pdf: golangPdf,
        id: "cert-golang-sanbercode",
        verificationLink: "https://sanbercode.com/"
    }
];
