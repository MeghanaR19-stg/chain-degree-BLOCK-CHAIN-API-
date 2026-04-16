// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CertificateRegistry {

    struct Certificate {
        string studentName;
        string courseName;
        string institutionName;
        uint256 issuedOn;
        bool isValid;
    }

    mapping(bytes32 => Certificate) public certificates;

    event CertificateIssued(
        bytes32 indexed certHash,
        string studentName,
        string courseName,
        string institutionName,
        uint256 issuedOn
    );

    event CertificateRevoked(bytes32 indexed certHash);

    // Issue new certificate
    function issueCertificate(
        bytes32 certHash,
        string memory studentName,
        string memory courseName,
        string memory institutionName
    ) public {

        require(!certificates[certHash].isValid, "Certificate already exists");

        certificates[certHash] = Certificate({
            studentName: studentName,
            courseName: courseName,
            institutionName: institutionName,
            issuedOn: block.timestamp,
            isValid: true
        });

        emit CertificateIssued(
            certHash,
            studentName,
            courseName,
            institutionName,
            block.timestamp
        );
    }

    // Verify certificate
    function verifyCertificate(bytes32 certHash)
        public
        view
        returns (
            bool,
            string memory,
            string memory,
            string memory,
            uint256
        )
    {
        Certificate memory cert = certificates[certHash];

        return (
            cert.isValid,
            cert.studentName,
            cert.courseName,
            cert.institutionName,
            cert.issuedOn
        );
    }

    // Revoke certificate
    function revokeCertificate(bytes32 certHash) public {
        require(certificates[certHash].isValid, "Certificate does not exist");

        certificates[certHash].isValid = false;

        emit CertificateRevoked(certHash);
    }
}
