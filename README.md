# AI-Assisted Text Classification API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-blue.svg)](https://expressjs.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT-black.svg)](https://openai.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

A robust backend service that automatically classifies text input into predefined categories (Complaint, Query, Feedback, or Other) using AI-powered natural language processing.

## 🚀 Features

- **AI-Powered Classification**: Utilizes OpenAI's GPT models for accurate text categorization
- **RESTful API**: Simple and intuitive HTTP endpoints
- **Real-time Processing**: Instant classification responses
- **Production Ready**: Error handling, validation, and status codes
- **Scalable Design**: Easy to extend with new categories or features

## 📋 Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [API Documentation](#api-documentation)
- [AI Implementation](#ai-implementation-details)
- [Usage Examples](#usage-examples)


## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key

### Step 1: Clone the Repository

```bash
git clone https://github.com/MdDilawarHossainFarid/AI-Assisted-Text-Classification-API.git
cd AI-Assisted-Text-Classification-API
```
##  Environment Setup
### .env
```bash
# Server Configuration
PORT=3000
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

OPENAI_MODEL=gpt-3.5-turbo

OPENAI_MAX_TOKENS=100

OPENAI_TEMPERATURE=0.3
```
