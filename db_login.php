<?php
session_start();
include 'dbcon.php'; // Include your database connection class

// Create a new instance of the Database class and get the connection
$database = new Database();
$con = $database->getConnection(); // Use the getConnection method to get the MySQLi connection

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

if (isset($_POST['login'])) {
    $uname = trim($_POST['uname']);
    $pass = $_POST['pass'];

    // Prepare SQL query to fetch the hashed password
    $sql = "SELECT username, password FROM tbl_member WHERE username = ?";
    $stmt = $con->prepare($sql);

    if ($stmt === false) {
        die("Prepare failed: " . $con->error);
    }

    // Bind the username parameter
    $stmt->bind_param("s", $uname);
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        $storedHash = $row['password']; // Fetch hashed password from database

        if (password_verify($pass, $storedHash)) { // Compare entered password with stored hash
            session_regenerate_id(true); // Prevent session fixation attack
            $_SESSION['user_id'] = $row['user_id']; // Store user_id securely
            $_SESSION['username'] = $row['username']; // Store username

            header('Location: home.html');
            exit();
        } else {
            // Incorrect password
            header('Location: login.php?error=invalid_password');
            exit();
        }
    } else {
        // User not found
        header('Location: login.php?error=user_not_found');
        exit();
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$con->close();
?>
