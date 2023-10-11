<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "monika_portfolio";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Select the database
mysqli_select_db($conn, $database);

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$email_subject = $_POST['email_subject'];
$message = $_POST['message'];

$sql = "INSERT INTO connect_form(full_name, email, phone_number, email_subject, message)
        VALUES('$full_name', '$email', '$phone_number', '$email_subject', '$message')";


$full_name = isset($_POST['full_name'])?
$_POST['full_name'] : '';

$email_subject= isset($_POST['email_subject'])?
$_POST['email_subject']: '';

$message = $_POST['message']??'';

if ($conn->query($sql) === TRUE) {
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



$conn->close();
?>

