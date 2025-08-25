Vamshi International Courier Services – Web Portal

A modern, user-friendly website built for Vamshi International Courier Services to showcase their global logistics offerings and provide real-time tracking capabilities.

⸻

Key Features
	•	Responsive Design for seamless browsing on mobile, tablet, and desktop
	•	Service Listings detailing shipping options (e.g., food, medicines, documents)
	•	Live Shipment Tracking using AWB codes for real-time status updates
	•	Quick Quotes & Contact Forms for effortless customer inquiries
	•	SEO Optimization to enhance visibility across search engines

⸻

Tech Stack

Layer	Technology
Frontend	React, TailwindCSS
Backend	Node.js, Express.js
Tracking	REST API for AWB status
Hosting	Vercel (frontend), Heroku/Node host (backend)


⸻

Project Structure

├── src/
│   ├── components/        # Reusable UI parts (Header, Footer, Tracking Form)
│   ├── pages/
│   │   ├── Home.js
│   │   └── Track.js
│   ├── styles/             # Centralized Tailwind styles config
│   └── App.js
├── backend/
│   ├── routes/             # REST endpoints (e.g., GET /api/track/:awb)
│   ├── controllers/        # Business logic for tracking queries
│   ├── models/             # Data schema (if using DB)
│   └── server.js
├── public/                 # Static assets, favicon, Open Graph previews
├── .env.example            # Environment variables (e.g., API keys)
├── package.json
└── README.md


⸻

Installation & Setup
	1.	Clone the repo:

git clone https://github.com/your-username/vamshi-courier-website.git


	2.	Navigate into the project folder:

cd vamshi-courier-website


	3.	Install dependencies:

npm install
cd backend && npm install


	4.	Configure environment variables in both frontend and backend (e.g., API keys, ports).
	5.	Run the application:

# In one terminal (frontend)
npm run dev

# In another (backend)
cd backend && npm start


	6.	Visit http://localhost:3000 (or your configured host) to view the website.


⸻

Contributing

Contributions are welcome! Feel free to:
	•	Fork the repo
	•	Create a feature branch (e.g., feature/add-auth)
	•	Submit a pull request for review

⸻

Website: https://vamshicouriers.com/
