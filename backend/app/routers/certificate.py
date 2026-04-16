from fastapi import APIRouter
from app.models.certificate_model import CertificateIssue
from app.services.hashing import generate_cert_hash
from app.services.blockchain import issue_on_blockchain
from app.services.qrcode_service import generate_qr_base64

router = APIRouter(prefix="/certificate")

@router.post("/issue")
def issue_certificate(data: CertificateIssue):
    cert_hash = generate_cert_hash(
        data.student_name,
        data.course_name,
        data.institution_name
    )

    tx = issue_on_blockchain(
        cert_hash,
        data.student_name,
        data.course_name,
        data.institution_name
    )

    qr = generate_qr_base64(
        f"http://localhost:5173/verify/{cert_hash}"
    )

    return {
        "cert_hash": cert_hash,
        "transaction_hash": tx,
        "qr_code": qr
    }
