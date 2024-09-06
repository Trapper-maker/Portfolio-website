<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // You can now store this data in a database or send it as an email
    // Example: sending an email
    $to = "your_email@example.com";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);

    echo "Message Sent!";
}
?>
