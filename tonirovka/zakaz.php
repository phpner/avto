<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$to = "7506273@mail.ru";
$subject = "Заказ";
$message = "
Письмо отправлено c сайта http://автостиль174.рф<br />
Пользователь указал:<br />Имя: ".htmlspecialchars($name)."<br />
Телефон: ".htmlspecialchars($phone)."";
$headers = "From: Заявка - Тонировка<info@autostyle174.ru>\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/reset.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link href="css/lightbox.css" rel="stylesheet" />
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script src="js/jquery.validate.min.js" type="text/javascript"></script>
  <script src="js/jquery.inputmask.js" type="text/javascript"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script src="js/lightbox-2.6.min.js"></script>
  <title>Сообщение отправлено</title>
</head>
<body style="background: rgba(0,0,0,.9); text-align: center;">
<div class="otpr">
    <h2 class="mes"style="color:#fff; font-family: Arial;">Спасибо!</h2>
    <h3 class="mes"style="color:#fff; font-family: Arial;">с Вами свяжутся в ближайшее время!</h3>
    <a style="color:#fff; font-family: Arial;" href="/tonirovka.php"><b>Продолжить</b></a>
	</div>
</body>
</html>