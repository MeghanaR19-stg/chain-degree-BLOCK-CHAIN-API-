import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
    SEPOLIA_RPC_URL = os.getenv("SEPOLIA_RPC_URL", "")
    PRIVATE_KEY = os.getenv("PRIVATE_KEY", "")
    CONTRACT_ADDRESS = os.getenv("CONTRACT_ADDRESS", "")

settings = Settings()
