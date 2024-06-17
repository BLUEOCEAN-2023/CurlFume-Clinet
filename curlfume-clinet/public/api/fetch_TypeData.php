<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "mysql";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    die("Failed to decode JSON: " . json_last_error_msg());
}

$perfume = $data['perfume'];
if (!$perfume) {
    die("No perfume data received.");
}

// PerfumeUser 테이블에 새로운 레코드 추가
$sql = "INSERT INTO PerfumeUser (Usertype) VALUES ('$perfume')";

if ($conn->query($sql) !== TRUE) {
    echo "Error: " . $sql . "<br>" . $conn->error;
    $conn->close();
    exit;
}

// 가장 최근 추가된 ID 가져오기
$recent_id = $conn->insert_id;

// totalN 계산
$sql_total = "SELECT COUNT(*) as total FROM PerfumeUser";
$result_total = $conn->query($sql_total);
$totalN = 0;
if ($result_total->num_rows > 0) {
    $row_total = $result_total->fetch_assoc();
    $totalN = floor($row_total['total'] / 2);
}

// includeN 계산
$sql_include = "SELECT COUNT(*) as include_count FROM PerfumeUser WHERE Usertype='$perfume'";
$result_include = $conn->query($sql_include);
$includeN = 0;
if ($result_include->num_rows > 0) {
    $row_include = $result_include->fetch_assoc();
    $includeN = floor($row_include['include_count'] / 2);
}

// percent 계산
$percent = ($totalN > 0) ? floor(($includeN / $totalN) * 100) : 0;

// JSON으로 결과 반환
$response = [
    'totalN' => $totalN,
    'includeN' => $includeN,
    'percent' => $percent,
];
echo json_encode($response);

$conn->close();
?>
