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

// 데이터베이스 연결
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// JSON 입력값 읽기
$input = json_decode(file_get_contents('php://input'), true);
$perfume = $conn->real_escape_string($input['perfume']);

// totalN 계산: 가장 최근 id 값
$sqlTotal = "SELECT MAX(id) as max_id FROM perfumeuser";
$resultTotal = $conn->query($sqlTotal);
$totalN = 0;
if ($resultTotal->num_rows > 0) {
    $row = $resultTotal->fetch_assoc();
    $totalN = intval($row['max_id']);
}

// includeN 계산: perfume 값과 일치하는 Usertype 값의 갯수
$sqlInclude = "SELECT COUNT(*) as count FROM perfumeuser WHERE Usertype = '$perfume'";
$resultInclude = $conn->query($sqlInclude);
$includeN = 0;
if ($resultInclude->num_rows > 0) {
    $row = $resultInclude->fetch_assoc();
    $includeN = intval($row['count']);
}

// percent 계산
$percent = ($totalN > 0) ? ($includeN / $totalN) * 100 : 0;

$data = array(
    'totalN' => $totalN,
    'includeN' => $includeN,
    'percent' => $percent,
    'perfume' => $perfume // 디버깅을 위해 입력된 perfume 값 추가
);

header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
?>
