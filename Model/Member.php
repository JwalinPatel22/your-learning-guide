<?php
class Member
{
    private $conn;

    function __construct()
    {
        include 'dbcon.php'; // Include your database connection file
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    // Check if username already exists
    public function isUsernameExists($username)
    {
        $query = 'SELECT * FROM tbl_member WHERE username = ?';
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows > 0;
    }

    // Check if email already exists
    public function isEmailExists($email)
    {
        $query = 'SELECT * FROM tbl_member WHERE email = ?';
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows > 0;
    }

    // Register a new member
    public function registerMember()
    {
        $isUsernameExists = $this->isUsernameExists($_POST["username"]);
        $isEmailExists = $this->isEmailExists($_POST["email"]);

        if ($isUsernameExists) {
            echo "Username already exists.";
        } elseif ($isEmailExists) {
            echo "Email already exists.";
        } else {
            if (!empty($_POST["signup-password"])) {
                $hashedPassword = password_hash($_POST["signup-password"], PASSWORD_DEFAULT);
                $query = 'INSERT INTO tbl_member (username, password, email) VALUES (?, ?, ?)';
                $stmt = $this->conn->prepare($query);
                $stmt->bind_param("sss", $_POST["username"], $hashedPassword, $_POST["email"]);

                if ($stmt->execute()) {
                    // Redirect to login page after successful registration
                    header("Location: login.php?success=1");
                    exit();
                } else {
                    echo "Registration failed.";
                }
            } else {
                echo "Password cannot be empty.";
            }
        }
    }

    // Login a member
    public function loginMember()
    {
        $query = 'SELECT * FROM tbl_member WHERE username = ?';
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $_POST["username"]);
        $stmt->execute();
        $result = $stmt->get_result();
        $member = $result->fetch_assoc();

        if ($member && password_verify($_POST["login-password"], $member["password"])) {
            // Successful login, store username in session
            session_start();
            $_SESSION["username"] = $member["username"];
            header("Location: home.html");
            exit();
        } else {
            echo "Invalid username or password.";
        }
    }
}
?>
