import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap" rel="stylesheet">
    <title>Happy</title>
    <link rel="icon" href="/images/logo-icon.png">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/page-landing.css">
    <link rel="stylesheet" href="css/animation.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">

    
</head>

<body id="body">
    
    <div id="page-landing">
        <div id="container">
            <header>
                <img id ="logo" class="animate-up" src="./public/images/logo.svg" alt="Logo Marca">
                <div class="location animate-up">
                    <strong>
                        Volta Redonda
                    </strong>
                    <p>Rio de Janeiro</p>
                </div>
            </header>
            <main>
                <h1 class="animate-up">Leve felicidade para o mundo.</h1>
                <section class="visit">
                    <p class="animate-up">Visite orfanatos e mude o dia de muitas crianças.</p>
                    <a href="orphanages.html" class="animate-up"><img src="./public/images/arrow.svg" alt="seta clicavel"></a>
                </section>
            </main>
        </div>
    </div>
</body>
  )
}
