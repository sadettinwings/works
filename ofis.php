<?php
 function GetIP(){  
            if(getenv("HTTP_CLIENT_IP")) {
            $ip = getenv("HTTP_CLIENT_IP");
            } elseif(getenv("HTTP_X_FORWARDED_FOR")) {
            $ip = getenv("HTTP_X_FORWARDED_FOR");
            if (strstr($ip, ',')) {
                $tmp = explode (',', $ip);
                $ip = trim($tmp[0]);
            }
            } else {
            $ip = getenv("REMOTE_ADDR");
            }
            return $ip;
           } 
$ip = GetIP();
echo $ip;

switch($ip)
{
   
    case'178.244.238.41';// office3
    $sonuc=2;
    break;

    case'178.244.238.39';//office2
    $sonuc=2;
    break;

    case'178.244.238.38'; // office1 88.247.182.43
    $sonuc=2;
    break;

    case'88.247.182.43'; // office1 88.247.182.43
    $sonuc=2;
    break;

    default;
    $sonuc=1;
    break;
}

if($sonuc == 2){
    echo "ip bizim";
}else {
   echo "değil";
}




?>