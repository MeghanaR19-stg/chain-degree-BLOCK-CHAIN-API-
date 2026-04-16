from pydantic import BaseModel

class CertificateIssue(BaseModel):
    student_name: str
    course_name: str
    institution_name: str
