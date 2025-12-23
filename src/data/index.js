import mlPdf from '../assets/certified/dicoding-belajar machine learning untuk pemula.pdf';
import visComPdf from '../assets/certified/dicoding-belajar visualisasi data.pdf';
import pythonPdf from '../assets/certified/dicoding-memulai pemrograman dengan python.pdf';
import golangPdf from '../assets/certified/golang-bootcamp-sanbercode.pdf';

import getSkillImg from '../assets/projects/get-skill/image.png';
import getSkillImg1 from '../assets/projects/get-skill/image1.png';
import getSkillImg2 from '../assets/projects/get-skill/image2.png';
import getSkillImg3 from '../assets/projects/get-skill/image3.png';

import cobyLearnImg from '../assets/projects/coby-learn-ai/image.png';
import cobyLearnImg1 from '../assets/projects/coby-learn-ai/image1.png';
import cobyLearnImg2 from '../assets/projects/coby-learn-ai/image2.png';
import cobyLearnImg3 from '../assets/projects/coby-learn-ai/image3.png';

import sipjakiImg from '../assets/projects/sipjaki/image.png';
import sipjakiImg1 from '../assets/projects/sipjaki/image2.png';
import sipjakiImg2 from '../assets/projects/sipjaki/image3.png';
import sipjakiImg3 from '../assets/projects/sipjaki/image4.png';

import dolfinBrainImg from '../assets/projects/dolfin-brain/image.png';
import dolfinBrainImg1 from '../assets/projects/dolfin-brain/image1.png';
import dolfinBrainImg2 from '../assets/projects/dolfin-brain/image2.png';
import dolfinBrainImg3 from '../assets/projects/dolfin-brain/image3.png';

import squadHubImg from '../assets/projects/squad-hub/image.png';
import squadHubImg1 from '../assets/projects/squad-hub/image1.png';
import squadHubImg2 from '../assets/projects/squad-hub/image2.png';
import squadHubImg3 from '../assets/projects/squad-hub/image3.png';

import kejarTaffImg from '../assets/projects/kejar-taff/image.png';
import kejarTaffImg1 from '../assets/projects/kejar-taff/image1.png';
import kejarTaffImg2 from '../assets/projects/kejar-taff/image2.png';
import kejarTaffImg3 from '../assets/projects/kejar-taff/image3.png';

import golang from '../assets/certified/img/golang-sanbercode.png';
import belajarMachineLearning from '../assets/certified/img/dicoding-belajar machine learning untuk pemula.png';
import belajarVisualisasiData from '../assets/certified/img/dicoding-belajar visualisasi data.png';
import memulaiPemrogramanPython from '../assets/certified/img/dicoding-memulai pemrograman dengan python.png';

export const projectsData = [
    {
        id: "get-skill",
        title: "Get Skill",
        tag: "Website",
        description: "An online learning platform that sells digital learning materials and courses directly to users, featuring secure payments, role-based access, and a structured learning dashboard.",
        features: [
            "Direct sales of digital learning materials and courses",
            "User authentication and access control",
            "Secure payment integration with automatic content access",
            "Course and material management system",
            "User dashboard for purchased courses and materials",
            "Admin panel for managing content and transactions"
        ],
        projectLink: "https://getskill.id",
        tech: [
            "Laravel",
            "JavaScript",
            "Tripay Payment Gateway",
            "REST API"
        ],
        color: "from-primary to-violet-600",
        image: getSkillImg,
        gallery: [
            getSkillImg,
            getSkillImg1,
            getSkillImg2,
            getSkillImg3
        ],
    },
    {
        id: "cobylearn-ai",
        title: "CobyLearnAI",
        tag: "Website",
        description: "An AI-powered learning assistant that helps users summarize learning materials from PDFs, YouTube videos, and text, while encouraging consistent study habits through gamification and learning analytics.",
        features: [
            "AI-based summarization from PDF, YouTube, and text input",
            "Integration with Gemini AI model for content understanding",
            "Personal to-do list for study planning",
            "Daily learning streak and gamification system",
            "Learning analytics and statistics (study time, activity frequency)",
            "User authentication and personalized dashboard",
            "RESTful API backend architecture"
        ],
        projectLink: "https://coby-learn-ai.vercel.app",
        tech: [
            "Golang",
            "React",
            "Gemini AI",
            "REST API"
        ],
        color: "from-emerald-500 to-cyan-600",
        image: cobyLearnImg,
        gallery: [
            cobyLearnImg,
            cobyLearnImg1,
            cobyLearnImg2,
            cobyLearnImg3
        ],
    },
    {
        id: "dolfin-brain-lms",
        title: "Dolfin Brain",
        tag: "Website",
        description: "A learning management system focused on providing CPNS exam preparation courses, handling student registration, course access, and secure online transactions within a structured learning platform.",
        features: [
            "CPNS exam preparation course management",
            "Student registration and authentication system",
            "Paid course purchase and access control",
            "Secure payment integration using Tripay",
            "Learning dashboard for enrolled students",
            "Admin panel for managing courses, users, and transactions"
        ],
        projectLink: "http://app.dolfinbrain.com/login",
        tech: [
            "Laravel (Full-stack)",
            "MySQL",
            "Tripay Payment Gateway"
        ],
        color: "from-sky-600 to-blue-700",
        image: dolfinBrainImg,
        gallery: [
            dolfinBrainImg,
            dolfinBrainImg1,
            dolfinBrainImg2,
            dolfinBrainImg3
        ],
    },
    {
        id: "sipjaki-pasuruan",
        title: "SIPJAKI Kabupaten Pasuruan",
        tag: "Website",
        description: "A government web-based information system designed to improve transparency and accessibility of construction service data in Pasuruan Regency, while strengthening business networking within the regional construction supply chain.",
        features: [
            "Centralized database of construction service businesses",
            "Public access to verified construction-related information",
            "Business directory to support construction supply chain networking",
            "Admin panel for data management and verification",
            "Role-based access control for administrators and operators",
            "Data reporting and monitoring system"
        ],
        projectLink: "https://sipjaki.pasuruankab.com/",
        tech: [
            "Laravel (Full-stack)",
            "MySQL"
        ],
        color: "from-blue-600 to-indigo-700",
        image: sipjakiImg,
        gallery: [
            sipjakiImg,
            sipjakiImg1,
            sipjakiImg2,
            sipjakiImg3
        ],
    },
    {
        id: "squad-hub",
        title: "Squad Hub",
        tag: "Website",
        description: "A versatile membership-based e-commerce platform that supports physical product sales, service offerings, and online reservation systems within a single integrated ecosystem.",
        features: [
            "Membership-based access and user management",
            "E-commerce system for physical product sales",
            "Service listing and service purchase workflow",
            "Online reservation and booking system",
            "Secure payment integration using Xendit",
            "Admin panel for managing products, services, reservations, and members"
        ],
        projectLink: "https://squadhub.id/",
        tech: [
            "Laravel",
            "MySQL",
            "Xendit Payment Gateway"
        ],
        color: "from-fuchsia-600 to-purple-700",
        image: squadHubImg,
        gallery: [
            squadHubImg,
            squadHubImg1,
            squadHubImg2,
            squadHubImg3
        ],
    },
    {
        id: "kejar-taff",
        title: "Kejar Taff",
        tag: "Website",
        description: "A task management system designed for field officers to efficiently track and monitor on-site car leasing activities, providing real-time visibility and structured workflow management.",
        features: [
            "Task assignment and management for field officers",
            "Activity tracking and field reporting system",
            "Monitoring dashboard for supervisors and administrators",
            "Role-based access control (Admin, Supervisor, Field Officer)",
            "Centralized task and activity database",
            "Data reporting and operational monitoring"
        ],
        projectLink: "https://kejartaf.com",
        tech: [
            "Laravel (Full-stack)",
            "MySQL"
        ],
        color: "from-slate-600 to-gray-800",
        image: kejarTaffImg,
        gallery: [
            kejarTaffImg,
            kejarTaffImg1,
            kejarTaffImg2,
            kejarTaffImg3
        ],
    },


];

export const certificatesData = [
    {
        title: "Belajar Machine Learning untuk Pemula",
        issuer: "Dicoding Indonesia",
        image: belajarMachineLearning,
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
        image: belajarVisualisasiData,
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
        image: memulaiPemrogramanPython,
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
        image: golang,
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
