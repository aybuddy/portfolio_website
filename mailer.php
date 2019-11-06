<?PHP
$to = "aaron@aaronyu.net";
$subject = "Results from your Request Info form";
$headers = "From: ".$_POST['email'];
$forward = 1;
$location = "";

$date = date ("l, F jS, Y");
$time = date ("h:i A");


$msg = "Below is the result of your feedback form. It was submitted on $date at $time.\n\n";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($_POST as $key => $value) {
        $msg .= ucfirst ($key) ." : ". $value . "\n";
    }
}
else {
    foreach ($_GET as $key => $value) {
        $msg .= ucfirst ($key) ." : ". $value . "\n";
    }
}

mail($to, $subject, $msg, $headers);
if ($forward == 1) {
    header ("Location: index.html?mailsend");
}
else {
    echo "Thank you for submitting our form. We will get back to you as soon as possible.";
}

// if (isset($_POST['submit'])) {
// $name = $_POST['name'];
// $subject = $_POST['subject'];
// $mailFrom = $_POST['email'];
// $message = $_POST['message'];

// $mailTo = "aaron@aaronyu.net";
// $headers = "From: ".$mailFrom;
// $txt = "You have received an e-mail from ".$name.".\n\n".$message;

// mail($mailTo, $subject, $txt, $headers);
// header("Location: index.html?mailsend");
// }
?>