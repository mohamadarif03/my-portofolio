
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
        projectLink: "https://github.com/mohamadarif03/ai-quiz-generator", // Replace with actual notebook/repo if ML, or website if Web
        tech: ["Golang", "Gemini AI", "Rest API"],
        color: "from-primary to-violet-600",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
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
        projectLink: "https://dashboard-demo.com", // Example URL
        tech: ["React", "Node.js", "Socket.io"],
        color: "from-secondary to-cyan-600",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
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
        projectLink: "https://colab.research.google.com/", // Example Notebook URL
        tech: ["Python", "Scikit-Learn", "Pandas"],
        color: "from-green-500 to-emerald-600",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1000&auto=format&fit=crop"
    }
];

export const certificatesData = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services | Dec 2023",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1000&auto=format&fit=crop",
        color: "bg-primary",
        overlay: "bg-primary/20",
        btnBorder: "border-primary/50",
        btnText: "text-primary",
        btnHover: "hover:bg-primary"
    },
    {
        title: "Google Professional ML Engineer",
        issuer: "Google Cloud | Jun 2023",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        color: "bg-secondary",
        overlay: "bg-secondary/20",
        btnBorder: "border-secondary/50",
        btnText: "text-secondary",
        btnHover: "hover:bg-secondary"
    },
    {
        title: "TensorFlow Developer Certificate",
        issuer: "DeepLearning.AI | Jan 2023",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        color: "bg-orange-500",
        overlay: "bg-orange-500/20",
        btnBorder: "border-orange-500/50",
        btnText: "text-orange-500",
        btnHover: "hover:bg-orange-500"
    }
];
