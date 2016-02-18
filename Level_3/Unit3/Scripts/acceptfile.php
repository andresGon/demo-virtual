<?php

   if(!isset($_REQUEST['filename']))
   {
     exit('No file');
     die;
   }

   $upload_path = dirname(__FILE__). '/';
   $za = new ZipArchive();
   $filename = $_REQUEST['filename'];
   $zipfilename = "$filename.zip";
   $fp = fopen($upload_path."/".$filename.".mp3", "wb");
   fwrite($fp, file_get_contents('php://input'));
   /*$za->open($upload_path."/".$zipfilename,ZIPARCHIVE::CREATE);//Modificacion realizada para comprimir el archivo
   $za->addFile($upload_path."/".$filename.".wav",$filename.".wav");
   $za->close();*/
   fclose($fp);
   exit('done');

?>