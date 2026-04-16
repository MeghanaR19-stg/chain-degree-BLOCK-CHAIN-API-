from fastapi import APIRouter
from app.services.blockchain import verify_on_blockchain

router = APIRouter(prefix="/verify")

@router.get("/{cert_hash}")
def verify(cert_hash: str):
    result = verify_on_blockchain(cert_hash)

    return {
        "is_valid": result[0],
        "student": result[1],
        "course": result[2],
        "institution": result[3],
        "issued_on": result[4]
    }
