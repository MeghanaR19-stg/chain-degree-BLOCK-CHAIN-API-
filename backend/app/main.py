from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import certificate, verify, ai

app = FastAPI(title="Chain-Degree Backend")

# allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend Running Successfully 🚀"}

# register routers
app.include_router(certificate.router)
app.include_router(verify.router)
app.include_router(ai.router)
