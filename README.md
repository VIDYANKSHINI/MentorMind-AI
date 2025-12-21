MentorMindAI – Smart Video Evaluation & Accessibility Engine

MentorMindAI is an AI-powered backend that evaluates videos for teaching quality and also converts videos into different accessibility modes—Blind Mode, Deaf Mode, and Easy Mode. This system uses ONNX machine-learning models for scoring and FastAPI for serving all endpoints.

🚀 Project Overview

This project provides two major functionalities:

Video Scoring System (AI Evaluation)
Uploads a video and returns:

-Clarity score -Engagement score -Pace score -Filler word score -Technical depth score -Weighted overall score

Models used:

-clarity_model.onnx -engagement_cnn.onnx -pace_model.onnx -filler_model.onnx -tech_depth_model.onnx

Accessibility Modes
Convert any uploaded video into:

Blind Mode

Generates audio narration of the video content.

Deaf Mode

Generates subtitles using Whisper STT.

Easy Mode

Simplified narration using text summarization + TTS.

🧱 Project Architecture Overview 📦 MentorMindAI ┣ backend/ │ ┣ app/ │ │ ┣ api/v1/ │ │ │ ┣ routes_upload.py → Upload & mode conversion APIs │ │ ┣ services/ │ │ │ ┣ video_scoring.py → ONNX scoring engine │ │ │ ┣ mode_blind.py → Blind mode processing │ │ │ ┣ mode_deaf.py → Deaf mode (subtitles) │ │ │ ┣ mode_easy.py → Easy mode audio │ │ │ ┣ video_processor.py → File handling utils │ │ ┣ main.py → FastAPI entry point ┣ models/ │ ┣ clarity_model.onnx │ ┣ engagement_cnn.onnx │ ┣ pace_model.onnx │ ┣ filler_model.onnx │ ┣ tech_depth_model.onnx ┣ frontend/ (optional) ┣ README.md ┣ requirements.txt

                    ┌──────────────────────────────┐
                    │          Frontend            │
                    │        (React + Vite)        │
                    │ ─ File Upload (Video)        │
                    │ ─ Show Results Dashboard     │
                    │ ─ Accessibility UI           │
                    └───────────────▲──────────────┘
                                    │
                                    │  HTTP (REST)
                                    │
                    ┌───────────────┴──────────────┐
                    │           FastAPI API         │
                    │        /api/v1/score          │
                    │        /api/v1/results/{id}   │
                    │        /api/v1/upload         │
                    └───────────────▲──────────────┘
                                    │
               Upload Video ┌───────┴────────┐ Queue Job
                            │                │
                            ▼                ▼
               ┌─────────────────┐   ┌─────────────────┐
               │     AWS S3      │   │      Redis       │
               │   Storage Bucket│   │  Task Queue      │
               └───────▲─────────┘   └─────────▲───────┘
                       │                       │
                       │ Fetch video           │ Celery Task
                       │                       │
                ┌──────┴───────────────────────┴─────┐
                │             Celery Worker            │
                │ ─ Audio Extraction (librosa)         │
                │ ─ Transcript (ASR)                   │
                │ ─ Frame Sampling                     │
                │ ─ ONNX Model Inference:              │
                │       • clarity_model.onnx           │
                │       • engagement_cnn.onnx          │
                │       • pace_estimator.onnx          │
                │       • filler_detector.onnx         │
                │       • tech_score_model.onnx        │
                │ ─ Scoring Engine                     │
                │ ─ Save Final JSON Output             │
                └─────────▲────────────────────────────┘
                          │
                          │ Writes result
                          │
                 ┌────────┴────────┐
                 │   Results Store │
                 │  (DB / JSON)    │
                 └────────▲────────┘
                          │
                Frontend Fetches Final Results
                          │
                          ▼
                ┌───────────────────┐
                │ Results Dashboard │
                │ Graphs + Badges   │
                │ Accessibility Modes│
                └───────────────────┘
⚙️ Setup Instructions

Clone the repository git clone https://github.com/your-repo/MentorMindAI cd MentorMindAI

Create virtual environment python -m venv venv

Activate environment

Windows:

venv\Scripts\activate

Mac/Linux:

source venv/bin/activate

Install dependencies pip install -r requirements.txt

Ensure FFmpeg is installed (required for moviepy)

Windows:

choco install ffmpeg

Mac:

brew install ffmpeg

Run python models/generate_dummy_models
▶️ How to Run Locally

Start FastAPI server:

uvicorn src.backend.app.main:app --reload

Server runs at:

👉 http://localhost:8000

Open docs:

👉 http://localhost:8000/docs

(Interactive Swagger UI)

🔥 API Endpoints 1️⃣ Upload Video & Get Scores POST /upload/video

Response { "file_id": "56c7e543-0b4e-49f6-9509-fb6cbe6bc9b6", "scores": { "clarity": 0.23, "engagement": 0.45, "pace": 0.31, "filler": -0.04, "tech": 0.12 }, "overall_score": 0.28 }

2️⃣ Convert Video into Accessibility Mode POST /convert?mode=blind POST /convert?mode=deaf POST /convert?mode=easy

Response Example { "status": "success", "output_path": "/mnt/data/uploads/video_blind_mode.mp3" }

🧪 Example Input & Output Input

MP4 video file Mode: "deaf"

Output

Extracted audio

Speech → Text using Whisper

.srt subtitle file

1 00:00:01,000 --> 00:00:03,000 Hello students, today we will learn AI.

📦 List of Dependencies

fastapi uvicorn[standard] python-multipart celery[redis] redis pydantic requests python-dotenv celery==5.3.6 redis==5.0.1 opencv-python python-dotenv numpy pydub speechrecognition transformers torch pillow moviepy onnxruntime
