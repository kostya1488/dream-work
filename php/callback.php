<?php
$recepient = "matvienkoigor956@gmail.com";
$sitename = "DW";
$token = "1075686909:AAERuG4YvzxCjg3ChV_vI0LCNhCKDP5cDrI"; 
$chat_id = "-424143553";


$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$tel = trim($_POST["tel"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nEmail: $email \nТелефон: $tel \nТекст: $text";

$arr = array(
  'Имя пользователя: ' => $name,
  'Email' => $email,
  'Телефон' => $tel,
  'Сообщение' => $text
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$pagetitle = "Сообщение с сайта: \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient"); 

?>
