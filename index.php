<?php
    include_once "pagina_principal.php"; // Inclui o cabeçalho

    // Array associativo que mapeia as páginas disponíveis aos seus respectivos nomes amigáveis
    $pages = array(
        '1' => 'pagina_principal.php',
        '2' => 'login.php'
        // Adicione mais páginas conforme necessário
    );

    // Verifica se a página solicitada está disponível
    if (isset($_GET['p']) && array_key_exists($_GET['p'], $pages)) {
        $p = $_GET['p'];
    } else {
        $p = 'default'; // Defina a página padrão aqui, se nenhum valor for passado pelo $_GET
    }

    // Inclui a página solicitada
    include_once $pages[$p];

?>