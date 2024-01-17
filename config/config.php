<?php
if (session_status() == PHP_SESSION_NONE) {
    $name = preg_replace("/[^a-z\d]/i", "", __DIR__);
    session_name($name);
    session_start();
}

if (isset($_GET["action"])) {
    $reload = fn() => header('Location: ' . preg_replace('/(&|(?:\/\?))[a-zA-Z]+=[a-zA-Z]+/', '', $_SERVER['REQUEST_URI']));

    if ($_GET["action"] == "theme") {
        $previousValue = isset($_SESSION["theme"]) ? $_SESSION["theme"] : null;

        if ($previousValue == "dark") {
            unset($_SESSION["theme"]);
        } else {
            $_SESSION["theme"] = "dark";
        }
        $reload();
    }

    if ($_GET["action"] == "session_destroy") {
        session_destroy();
        $reload();
    }
}
