<?php

    $file1= fopen("L1_Exer_14-1.txt", "r");
    $contenido1 = fread($file1, filesize("L1_Exer_14-1.txt"));
    
    $file2= fopen("L1_Exer_14-2.txt", "r");
    $contenido2 = fread($file2, filesize("L1_Exer_14-2.txt"));
    
    $file3= fopen("L1_Exer_14-3.txt", "r");
    $contenido3 = fread($file3, filesize("L1_Exer_14-3.txt"));
    
    $file4= fopen("L1_Exer_14-4.txt", "r");
    $contenido4 = fread($file4, filesize("L1_Exer_14-4.txt"));
    
    $imagen1=  explode(",", $contenido1);
    $imagen2=  explode(",", $contenido2);
    $imagen3=  explode(",", $contenido3);
    $imagen4=  explode(",", $contenido4);
    
    $contenido="<table width='130' border='0'>
          <tr>
            <td width='62' height='60'><img src='$imagen1[0]' width='76' height='64'/></td>
            <td width='62'><img src='$imagen1[1]' width='76' height='64'/></td>
          </tr>
          <tr>
            <td height='60'><img src='$imagen1[2]' width='76' height='64'/></td>
            <td><img src='$imagen2[0]' width='76' height='64'/></td>
          </tr>
          <tr>
            <td height='60'><img src='$imagen2[1]' width='76' height='64'/></td>
            <td><img src='$imagen2[2]' width='76' height='64'/></td>
          </tr>
          <tr>
            <td height='60'><img src='$imagen3[0]' width='76' height='64'/></td>
            <td><img src='$imagen3[1]' width='76' height='64'/></td>
          </tr>
          <tr>
            <td height='60'><img src='$imagen3[2]' width='76' height='64'/></td>
            <td><img src='$imagen4[0]' width='76' height='64'/></td>
          </tr>
          <tr>
            <td height='60'><img src='$imagen4[1]' width='76' height='64'/></td>
            <td><img src='$imagen4[2]' width='76' height='64'/></td>
          </tr>
        </table>";
    echo $contenido;
?>
