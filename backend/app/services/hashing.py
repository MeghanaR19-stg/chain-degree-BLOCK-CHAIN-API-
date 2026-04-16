import hashlib, time

def generate_cert_hash(student, course, institution):
    raw = f"{student}-{course}-{institution}-{time.time()}"
    return hashlib.sha256(raw.encode()).hexdigest()
