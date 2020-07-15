<?php
    
    header("Access-Control-Allow-Origin: * ");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "library";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$details = [];
  
// $sql = "INSERT INTO book (ISBM, bookname, author)
// VALUES ('$bookName', '$amount', '$buyer')";

 $bookName = $_GET['bookname'];

    $query = "SELECT * FROM book
    WHERE bookname = '$bookName'";

    $index = 0;
    if ($result = mysqli_query($conn, $query)) {
        $rowCount = $result->num_rows;
        if ($rowCount > 0) {
             while ($row = mysqli_fetch_assoc($result)) {
                $details[$index]['ISBN'] = $row['ISBN'];
                $details[$index]['bookname'] = $row['bookname'];
                $details[$index]['author'] = $row['author'];
                $index++;
            }
        }else {
            echo "result : 0 results";
        }
    }else {
        echo "result fault:";
        http_response_code(404);
    }
    echo json_encode($details);
?>
