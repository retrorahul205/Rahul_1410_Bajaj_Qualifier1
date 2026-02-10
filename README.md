Name:- Rahul Chaudhary
Rollno:- 2311981410
University:- Chitkara University

Qualifier round 1 Bajaj Finserve 

Date:- 10th February 2026

1. Clone the repository
```bash
git clone 
cd Rahul_1410_Bajaj_Qualifier1
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```bash
GEMINI_KEY=your_actual_gemini_api_key
```

4. Run the server
```bash
npm start
```

Server will run at `http://localhost:3000/bfhl`

## API Endpoints

### GET /health
Returns health status and email

### POST /bfhl
Accepts various operations:
- `fibonacci`: Generate fibonacci sequence
- `prime`: Filter prime numbers
- `lcm`: Calculate LCM
- `hcf`: Calculate HCF  
- `ai`: AI-powered question answering

