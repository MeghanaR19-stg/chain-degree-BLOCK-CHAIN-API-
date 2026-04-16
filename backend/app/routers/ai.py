from fastapi import APIRouter
from app.services.gemini_service import generate_certificate_text

router = APIRouter(prefix="/ai")

@router.get("/text")
def ai_text(student: str, course: str, institution: str):
    text = generate_certificate_text(student, course, institution)
    return {"description": text}
