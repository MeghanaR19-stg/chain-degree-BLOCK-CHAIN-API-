# DEMO MODE BLOCKCHAIN SERVICE
# This replaces real Web3 calls with an in-memory store
# So you can run the project without MetaMask or Sepolia.

from typing import Dict
import time

# simple in-memory "blockchain"
CERT_DB: Dict[str, dict] = {}

def issue_on_blockchain(cert_hash: str, student: str, course: str, institution: str):
    """
    Fake issue function.
    Instead of sending a real transaction, we store the certificate locally.
    Returns a fake transaction hash.
    """
    CERT_DB[cert_hash] = {
        "student": student,
        "course": course,
        "institution": institution,
        "issued_on": int(time.time()),
        "is_valid": True,
    }

    # return a fake tx hash (just for display)
    return f"0xFAKE_TRANSACTION_HASH_{cert_hash[:10]}"


def verify_on_blockchain(cert_hash: str):
    """
    Fake verify function.
    Returns the same format as the smart contract verifyCertificate():
      (bool, string, string, string, uint256)
    """
    cert = CERT_DB.get(cert_hash)

    if not cert or not cert["is_valid"]:
        return (False, "", "", "", 0)

    return (
        True,
        cert["student"],
        cert["course"],
        cert["institution"],
        cert["issued_on"],
    )
